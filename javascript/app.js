$(document).ready(function() {
  var userFormValidator = new UserFormValidator();

  var validate = function() {
    var userData = userFormValidator.$getFormFields();
    console.log(userData);
  }

  userFormValidator.$onFormChanged(validate)
});

