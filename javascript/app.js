
$(document).ready(function() {
  var userFormValidator = new UserFormValidator();
  var formValidator = new FormValidator();

  var validate = function(userData) {
    var messages = [];

    if(formValidator.invalidName(userData.name)) {
      messages.push('Invalid Name');
    }

    if(formValidator.invalidEmail(userData.email)) {
      messages.push('Invalid Email');
    }

    return messages;
  };

  var handleValidation = function() {
    var userData = userFormValidator.$getFormFields();
    var messages = validate(userData);
    userFormValidator.$updateValidationMessages(messages);
  };

  userFormValidator.$onFormChanged(handleValidation);
});


