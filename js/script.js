function userLogin(users, myName) {
    var
        text = 'Good bye!';
    users = [];
    myName = 'Alex';

    for (var i = 0; i < 5; i++) {
        users.push(prompt('Enter any name', ""));
    }

    for (i = 0; i < users.length; i++) {
        if (users[i] == myName) {
            text = 'Hello!' + ' ' + myName;
        }
    }
    return text;
}
alert(userLogin());
