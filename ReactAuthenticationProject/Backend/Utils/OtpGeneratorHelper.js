function OtpGeneratorHelper() {

    const OTP = Math. floor(Math. random() * (9999 - 1000 + 1)) + 1000
    
    return OTP.toString();
}

module.exports = OtpGeneratorHelper
