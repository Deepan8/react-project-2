function form1(contactInfo) {
    // name
   const err={};
    if (contactInfo.name == '') {
    err.name='please enter the name';
    }
    
    // mail
    if (contactInfo.email== '') {
        err.email='please enter email';
    }
    // else if(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(contactInfo.email)){
    //    err.email = "email is not valid";
    // }
    // else{
    //     err.email = "";
    //  }

    // phone
    if (contactInfo.phonenumber == '') {
        err.phonenumber='please enter the phone number';
    }
    else if (contactInfo.phonenumber.length > 10) {
        err.phonenumber='please enter the valid phone number';
    }

    // age
    if (contactInfo.age == '') {
        err.age='please enter the age';
    }
    else if (contactInfo.age.length > 2) {
        err.age='please enter the valid age';
    }

    //message
    if (contactInfo.message == '') {
        err.message='please enter message';
        }
     return err;
    
}
export default form1;
