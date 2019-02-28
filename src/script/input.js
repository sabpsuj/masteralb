class Input {
  constructor() {
    this.formClass = 'malb-form';
    this.inputClass = 'malb-form-input';
    this.checkBoxClass = 'malb-form-checkbox-badge';
    this.buttonClass = 'malb-form-button';
    this.buttonAltCLass = `${this.buttonClass}--alt`;
    this.textArea = 'malb-form-textarea';

    this.validEmail = false;
    this.validPhone = false;
    this.validUser = false;
    this.validMessage = false;
    this.validPassword = false;
    this.validSelect = false;
    this.isChecked = false;

    this.init();
  }

  init() {
    const buttonsList = document.querySelectorAll(`.${this.buttonClass}`);

    Array.from(buttonsList).forEach(buttonEl => {
      buttonEl.addEventListener('click', () => {
        this.validatationHandler(buttonEl);
      });
    });
  }

  validatationHandler(button) {
    event.preventDefault();
    const closestForm = button.closest('form');

    if(button.classList.contains('malb-form-button--alt')) {
      return alert('You do not have to subscribe but if you want to, you can always do this anytime');
     } else {
       let insideFormInputs = closestForm.querySelectorAll('input');
       
       Array.from(insideFormInputs).forEach(input => {
         if(input.classList.contains('malb-form-input--email')) {
           this.validateEmail(input);
         } else if(input.classList.contains('malb-form-input--phone')) {
           this.validatePhone(input);
         } else if(input.classList.contains('malb-form-input--user')) {
           this.validateUser(input);
         } else if(input.classList.contains('malb-form-input--password')) {
           this.validatePassword(input);
         } 
       });

       if(closestForm.classList.contains('malb-form--register')) {
        const selectInput = closestForm.querySelector('select');
        const checkboxInput = closestForm.querySelector('.malb-form-checkbox-badge');
        this.validateSelect(selectInput);

        if(!checkboxInput.checked) {
          checkboxInput.nextElementSibling.classList.add('error');
        } else {
          if(checkboxInput.nextElementSibling.classList.contains('error')){
            checkboxInput.nextElementSibling.classList.remove('error');
            this.isChecked = true;
          }
        }

          if(this.validUser && this.validEmail && this.validPassword && this.validSelect && this.isChecked) {
            setTimeout(() => alert(`Thank you. You have registered successfully. Have a good day!`), 1000);
          }
       }

       if(closestForm.classList.contains('malb-form--send-email')) {
        const textArea = closestForm.querySelector('.malb-form-textarea');
        this.validateMessage(textArea);

        if(this.validUser && this.validEmail && this.validMessage) {
          setTimeout(() => alert(`Thank you. You have send us a message successfully. Have a good day!`), 1000);
        }
      }

        if(closestForm.classList.contains('malb-form--sign-in')) {
          if(this.validUser && this.validPassword) {
            setTimeout(() => alert(`Yay! You have signed in!`), 1000);
          }
        }

        if(closestForm.classList.contains('malb-form--recover')) {
          if(this.validEmail) {
            setTimeout(() => alert(`You have just send us the recovery form info. Please wait until you receive an e-mail or SMS message.`), 1000);
          }
        }

        if(closestForm.classList.contains('malb-form--subscribe')) {
          if(this.validEmail) {
            setTimeout(() => alert(`Your e-mail is now on our subscription list. Thank you and have a good day!`), 1000);
          }
        }

     }
  }

  validateEmail(email) {
    if(email.value === '' || !email.value.includes('@') || email.value.length < 3) {
      email.parentElement.classList.add('error');
    } else {
      if(email.parentElement.classList.contains('error')) {
        email.parentElement.classList.remove('error');
      }
      this.validEmail = true;
    }
    
  }

  validatePhone(phone) {
    let isNum = /^\d+$/.test(phone.value);
    if(!isNum || phone.value === '' || phone.value.length < 9) {
      phone.parentElement.classList.add('error');
    } else {
      if(phone.parentElement.classList.contains('error')) {
        phone.parentElement.classList.remove('error');
      };
      this.validPhone = true;
    }
  }

  validateUser(user) {
    let isString = /(?=.*[a-zA-Z])/.test(user.value);

    if(!isString || user.value === '' || user.value.length < 2) {
      user.parentElement.classList.add('error');
    } else {
      if(user.parentElement.classList.contains('error')) {
        user.parentElement.classList.remove('error');
      }
      this.validUser = true;
    }
  }

  validatePassword(password) {
    let confirmPassword = document.querySelector('.malb-form-input--password-confirm');
    let isValidPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password.value);

    if(!isValidPass || password.value === '' || password.value.length < 6 || password.value != confirmPassword.value) {
      password.parentElement.classList.add('error');
    } else {
      if(password.parentElement.classList.contains('error')) {
        password.parentElement.classList.remove('error');
      }
      this.validPassword = true;
    }
  }

  validateMessage(message) {
    if(message.value.length < 20) {
      message.classList.add('error');
    } else {
      if(message.classList.contains('error')) {
        message.classList.remove('error');
      }
      this.validMessage = true;
    }
  }

  validateSelect(select) {
    if(select.value === '') {
      select.parentElement.classList.add('error');
    } else {
      if(select.parentElement.classList.contains('error')) {
        select.parentElement.classList.remove('error');
      }
      this.validSelect = true;
    }
  }

}

export default Input;