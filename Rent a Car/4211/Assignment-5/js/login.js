document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const cancelResetButton = document.getElementById('cancelResetButton');
    const loginForm = document.getElementById('loginForm');

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            console.log('User Login:', { email, password });
            alert('Login successful!');
        } else {
            alert('Please enter both email and password.');
        }
    });

    // Show the reset password form
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link action
        loginForm.style.display = 'none'; // Hide the login form
        resetPasswordForm.style.display = 'block'; // Show the reset password form
    });

    // Hide the reset password form and show the login form
    cancelResetButton.addEventListener('click', () => {
        resetPasswordForm.style.display = 'none'; // Hide the reset password form
        loginForm.style.display = 'block'; // Show the login form
    });
});
