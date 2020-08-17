$(document).ready(() => {

    const registerUser = (userInfo) => {
        return $.ajax({
            url: '/api/user',
            data: userInfo,
            method: 'POST',
        });
    };

    let registerForm = {
        'UserInfo': '',
        'userName': false,
        'userEmail': false,
        'userNickname': false,

        getTextBoxStates: function(target) {
            return this[target];
        },

        setTextBoxStates: function(target) {
            this[target] = true;
        },

        readUserInfo: async function() {
            let count = 0;
            let name = $('#reg-name-tb').val();
            let email = $('#reg-email-tb').val();
            let nickname = $('#reg-nickname-tb').val();

            if(name === '') {
                $('#reg-name-lbl').text('Name is Empty');
                $('#reg-name-lbl').css('color', 'red');
                this.setTextBoxStates('nameEmpty');
            } else {
                count++;
            }
            if(email === '') {
                $('#reg-email-lbl').text('Email is Empty');
                $('#reg-email-lbl').css('color', 'red');
                this.setTextBoxStates('emailEmpty');
            } else {
                count++;
            }
            if(nickname === '') {
                $('#reg-nickname-lbl').text('Nickname is Empty');
                $('#reg-nickname-lbl').css('color', 'red');
                this.setTextBoxStates('nicknameEmpty');
            } else {
                count++;
            }
            if(count === 3) {
                const userInfo = {
                    'UserName': name,
                    'UserEmail': email,
                    'UserNickname': nickname
                };
                try {
                    this['UserInfo'] = await registerUser(userInfo);
                    window.location.href = '/event';
                } catch(err) {
                    console.log(err.responeText);
                }
            }
        }
    };

    rf = registerForm;

    $('#reg-btn').click(event => {
        event.preventDefault();
        rf.readUserInfo();
    });

    $('#reg-name-tb').click(event => {
        event.preventDefault();
        $('#reg-name-tb').val('');
        $('#reg-name-lbl').text('Name');
        $('#reg-name-lbl').css('color', 'black');
    });

    $('#reg-email-tb').click(event => {
        event.preventDefault();
        $('#reg-email-tb').val('');
        $('#reg-email-lbl').text('Email');
        $('#reg-email-lbl').css('color', 'black');
    });

    $('#reg-nickname-tb').click(event => {
        event.preventDefault();
        $('#reg-nickname-tb').val('');
        $('#reg-nickname-lbl').text('Nickname');
        $('#reg-nickname-lbl').css('color', 'black');
    });

    initialState = () => {
        $('#reg-name-tb').val('');
        $('#reg-name-lbl').text('Name');
        $('#reg-name-lbl').css('color', 'black');
        $('#reg-email-tb').val('');
        $('#reg-email-lbl').text('Email');
        $('#reg-email-lbl').css('color', 'black');
        $('#reg-nickname-tb').val('');
        $('#reg-nickname-lbl').text('Nickname');
        $('#reg-nickname-lbl').css('color', 'black');
        localStorage.clear();
        return;
    };

    initialState();

});