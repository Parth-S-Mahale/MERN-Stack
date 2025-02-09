function generateOTP() {

    let length = prompt("Enter the length of OTP (Maximum 6):");

    length = parseInt(length, 10);

    if (isNaN(length) || length < 5 || length > 6) {
        alert("Invalid input! Please enter a number between 5 and 6.");
    } 
    
    else {
        let otp = "";
        for (let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10);
        }

        // Display OTP on the page
        document.getElementById("otp-container").innerText = "Your OTP is: " + otp;

    }
    
}