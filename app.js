validateForm = () => {
    var name = document.forms["myForm"]["name"];
    var phone = document.forms["myForm"]["phone"];
    var email = document.forms["myForm"]["email"];

    //Validations
    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if ( isNaN(phone.value)) {
        window.alert(
            "Please enter your telephone number. - numbers");
        phone.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    alert('Submitted Data' + name.value + email.value + phone.value);
    return window.location.assign('index.html');


};

phoneNumber = () => {
    var num = /^\d{10}$/;
    if(phone.value.match(num)){
        return true;
    }else{
        alert('Check Phone Number');
        return false;
    }
};
