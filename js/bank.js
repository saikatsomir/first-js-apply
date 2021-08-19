document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    //   get user password
    const passwordlField = document.getElementById('user-password')
    const userPassword = passwordlField.value
    if (userEmail == 'saikatsomir@gmail.com' && userPassword == 'saikat') {
        window.location.href = "banking.html"
    }

})

