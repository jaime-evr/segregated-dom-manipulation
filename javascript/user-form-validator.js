
var UserFormValidator = function() {
  this.$form = $('#user-info');
  this.$validationErrors = $('#validation-errors');

  //DOM inspection
  this.$getFormFields = function() {
    return {
      name: this.$form.find('#name').val(),
      email: this.$form.find('#email').val()
    };
  };

  //DOM event
  this.$onFormChanged = function(validate) {
    this.$form.find('input').on('change', validate)
  };

  //DOM change
  this.$updateValidationMessages = function(messages) {
    var validationErrors = $('#validation-errors');
    validationErrors.empty();
    messages.forEach(function(message) {
      validationErrors.append($('<div>').text(message));
    });
  };
};

var FormValidator = function() {
  this.invalidName = function(name) {
    return !name.lenght > 5
  };

  this.invalidEmail = function(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return !pattern.test(email)
  };
};

