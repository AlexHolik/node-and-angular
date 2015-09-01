function SubscribersCtrl($scope, $filter, ngTableParams, $timeout){
    $scope.title = "Subscriber";
    $scope.datas = [
        {
            name: 'Arthur Crawford',
            class: 'red',
            infulence: 'High',
            email: 'acrawford@email.com',
            age: '37',
            gender: 'M',
            added: '8/1/13',
            source: 'Web'
        },
        {
            name: 'Frances Mason',
            class: 'yellow',
            infulence: 'Medium',
            email: 'fmason@email.com',
            age: '34',
            gender: 'M',
            added: '5/15/05',
            source: 'Organic'
        },
        {
            name: 'Russell Gonzalez',
            class: 'green',
            infulence: 'Low',
            email: 'rgonzalez@email.com',
            age: '37',
            gender: 'M',
            added: '1/1/13',
            source: 'Manual'
        },
        {
            name: 'Dorothy Hernandez',
            class: 'green',
            infulence: 'Low',
            email: 'dhernandez@email.com',
            age: '25',
            gender: 'F',
            added: '1/1/13',
            source: 'Facebook'
        }
    ];
}