var UserFormValidator = function() {
  this.$form = $('#user-info');
};

//DOM inspection
UserFormValidator.prototype.$getFormFields = function() {
  return {
    name: this.$form.find('#name').val(),
    email: this.$form.find('#email').val(),
    password: this.$form.find('#password').val()
  };
};

//DOM events
UserFormValidator.prototype.$onFormChanged = function(validate) {
  this.$form.find('input').on('change', validate)
};

//var Validator = function() {
//};

