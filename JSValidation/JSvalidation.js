function ContactValidation() {
    var name = document.contactForm.iname.value;
    var email = document.contactForm.iemail.value;
    var comments = document.contactForm.icomment.value;
    if (name == "" || name.length == '') {
        alert("Name must be filled");
    }
    if (email == "" || email.length == '') {
        alert("Email must be filled");
    }


    if (email.indexOf('@') <= 0) {
        alert("Invalid  Email address, @ Position is not Correct");
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        alert("Invalid Email address, . Position is not correct");
        return false;
    }
    if (comments == "" || comments.length == '') {
        alert("Comments should also be filled");
    }
}