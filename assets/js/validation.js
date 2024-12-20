$(document).ready(function() {
        $('#registrationForm').on('submit' , function(e) {
            e.preventDefault();  
            $('.error').text('');
            var isValid = true;
            $('#form').trigger('reset');

            //validate Name Feild
            var name = $('#name').val();
            if (name === '') {
                $('#nameError').text('Please Enter the Name');
                isValid = false;
                return;
           }
            else {
                var value = $('#name').val();    
                if (value.match(/\d+/) != null) {
                    $('#nameError').text('Please Give letters only');
                    isValid = false;
                    return; 
                }
                else if (!(value.charAt(0) >= 'A' && value.charAt(0) <= 'Z')) {
                    $('#nameError').text('First letter must be in capital');
                    isValid = false;
                    return;
                }
            }

            //validate Date Of Birth Feild
            var dob = $('#dob').val();
            if (dob === '') {
                $('#dobError').text('Please Enter the Date of Birth');
                isValid = false;
                return; 
            }

            // Validate Phone Number Feild
            var phone = $('#phone').val();
            var phonePattern =  /^\+(\d{1,2})\d{10}$/;
            if (phone === '') {
                $('#phoneError').text('Please Enter the Mobile Number');
                isValid = false;
                return; 
            }
             else if (!phonePattern.test(phone)) {
                $('#phoneError').text('Please enter a valid phone number (+91)');
                isValid = false;
                return; 
            }

            //Validate Email Feild            
            var email = $('#email').val();
            var emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                $('#emailError').text('Please Enter the Email');
                isValid = false;
                return;  
            } 
            else if (!emailPattern.test(email)) {
                $('#emailError').text('Please enter a valid email');
                isValid = false;
                return;
            }

            //Validate Password Feild
            var password = $('#password').val();
            var passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            if (password === '') {
                $('#passwordError').text('Please Enter the Password');
                isValid = false;
                return;
            }
            else if (!passwordPattern.test(password)) {
                $('#passwordError').text('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.";');
                isValid = false;
                return;
            }

            //Validate ConfirmPassword Feild
            var confirmPassword = $('#confirmPassword').val();
            if (confirmPassword === ''){
                $('#confirmPasswordError').text('Confirm Password is required');
                isValid = false;
                return;
            }
            else if (confirmPassword !== password) {
                $('#confirmPasswordError').text('Passwords does not match');
                isValid = false;
                return;
            }

            //validate Gender Feild
            var gender = $("input[name='gender']:checked").val();
            if (!gender) {
                $('#genderError').text('Please select a gender');
                isValid = false;
                return; 
            }

            //Validate Country Feild
            var country = $('#country').val();
            if (country === '') {
                $('#countryError').text('Please select a country');
                isValid = false;
                return; 
            }

            //Validate Agree To Privacy Policy Feild
            var agree = $('#agree').is(':checked');
            if (!agree) {
                $('#agreeError').text('You must agree to the privacy policy');
                isValid = false;
                return;
            }
            if (isValid) {
                alert('Form submitted successfully!');
                $('#registrationForm')[0].reset();
            }
        });
    });
