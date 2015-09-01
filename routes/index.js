var express = require('express');
var subdomain = require('express-subdomain');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/login');
}

module.exports = function(app, passport){

	/* GET login page. */
	router.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('account/signin', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('account/signup',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {		
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash : true
	}));

	/* GET Home Page */
	router.get('/', isAuthenticated, function(req, res){
		res.render('index', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/login');
	});

    	/* Create Account Page */
	router.get('/create_account', function(req, res) {
		res.render('account/create_account');
	});

	/* Handle Create Account POST */
	router.post('/create_account', function(req, res) {
		var email = req.body.email, 
			company = req.body.company;
		
		domainName = company + '.easycast.io';
		console.log('Created domain with company name %s', domainName);
		app.use(subdomain(domainName, router));

		res.redirect('//' + domainName + ':' + app.get('port') + '/signup');
	});

	/**
	 * GET /forgot
	 * Forgot Password page.
	 */
	router.get('/forgot', function(req, res) {
		res.render('account/forgot');
	});

	/**
	 * POST /forgot
	 * Create a random token, then the send user an email with a reset link.
	 */
	router.post('/forgot', function(req, res, next) {
		req.assert('email', 'Please enter a valid email address.').isEmail();

		var errors = req.validationErrors();

		if (errors) {
			req.flash('errors', errors);
			return res.redirect('/forgot');
		}

		async.waterfall([
			function(done) {
				crypto.randomBytes(16, function(err, buf) {
					var token = buf.toString('hex');
					done(err, token);
				});
			},
			function(token, done) {
				User.findOne({ email: req.body.email.toLowerCase() }, function(err, user) {
					if (!user) {
						req.flash('errors', { msg: 'No account with that email address exists.' });
						return res.redirect('/forgot');
					}

					user.resetPasswordToken = token;
					user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

					user.save(function(err) {
						done(err, token, user);
					});
				});
			},
			function(token, user, done) {
				var transporter = nodemailer.createTransport({
					service: 'SendGrid',
					auth: {
						user: secrets.sendgrid.user,
						pass: secrets.sendgrid.password
					}
				});
				var mailOptions = {
					to: user.email,
					from: 'honzik1984415@gmail.com',
					subject: 'Reset your password on Honzik Kasperak',
					text: 'You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n' +
					'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
					'http://' + req.headers.host + '/reset/' + token + '\n\n' +
					'If you did not request this, please ignore this email and your password will remain unchanged.\n'
				};
				transporter.sendMail(mailOptions, function(err) {
					req.flash('info', { msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.' });
					done(err, 'done');
				});
			}
		], function(err) {
			if (err) return next(err);
			res.redirect('/forgot');
		});
	});

	/**
	 * GET /reset/:token
	 * Reset Password page.
	 */
	router.get('/reset', function(req, res) {
		User
			.findOne({ resetPasswordToken: req.params.token })
			.where('resetPasswordExpires').gt(Date.now())
			.exec(function(err, user) {
				if (!user) {
					req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
					return res.redirect('/forgot');
				}
				res.render('account/reset', {
					title: 'Password Reset'
				});
			});
	});

	/**
	 * POST /reset/:token
	 * Process the reset password request.
	 */
	router.post('/reset', passport.authenticate('reset', {
		successRedirect: '/login',
		failureRedirect: '/reset',
		failureFlash : true
	}));

	return router;
}