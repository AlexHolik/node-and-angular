var express = require('express')
  , subdomain = require('express-subdomain');

var router = express.Router();

exports.boot = function (app, auth) {

    app.get('/create_account', function (req, res) {
        res.render('account/create_account');
    });

    app.post('/create_account', function (req, res) {
        var email = req.body.email,
            company = req.body.company,
            domainName = company + '.easycast.io';

        console.log('Created domain %s', domainName);

        app.use(subdomain(domainName, app.router));
        
        res.redirect('//' + domainName + ':' + app.get('port') + '/signup');
    });

    app.get('/signup', function (req, res) {
        res.render('account/signup');
    });
}