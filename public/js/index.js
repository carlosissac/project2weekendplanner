$(document).ready(() => {

    const queryEmail = async (email) => {
        return await $.ajax({
            url: `api/user/email/${email}`,
            method: 'GET',
        });
    };

    let loginForm = {
        'UserInfo' : '',

        saveToLS: function() {
            const UserObj = {
                'UserID': this['UserInfo'].user.UserID,
                'UserEmail': this['UserInfo'].user.UserEmail,
                'UserNickname': this['UserInfo'].user.UserNickname,
                'UserCreated': this['UserInfo'].user.UserCreated
            };
            localStorage.setItem('WP_UserInfo', JSON.stringify(UserObj));
            //console.log(JSON.parse(localStorage.getItem('WP_UserInfo')));
        },

        readLoginEmail: async function() {
            let email = $('#login-textbox').val();
            if(email === '') {
                $('#login-textbox-label').text('Email is Empty');
                $('#login-textbox-label').css('color', 'red');
            } else {
                try {
                    this['UserInfo'] = await queryEmail(email);
                    this.saveToLS();
                    window.location.href = '/event';
                } catch(err) {
                    $('#login-textbox-label').text(err.responseText);
                    $('#login-textbox-label').css('color', 'red');
                }
            }
        }
    };

    lf = loginForm;

    $('#login-textbox').click(event => {
        event.preventDefault();
        initialState();
    });

    $('#login-btn').click(event => {
        event.preventDefault();
        lf.readLoginEmail();
    });

    initialState = () => {
        $('#login-textbox').val('');
        $('#login-textbox-label').text('Email');
        $('#login-textbox-label').css('color', 'black');
        localStorage.clear();
        return;
    };

    initialState();

});