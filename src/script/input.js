class Input {
  constructor() {
    this.inputClass = 'malb-form-input';
    this.checkBoxClass = 'malb-form-checkbox-badge';
    this.buttonClass = 'malb-form-button';
    this.buttonAltCLass = `${this.buttonClass}--alt`;
    this.textArea = 'malb-form-textarea';
    this.init();
  }

  init() {
    const buttonsList = document.querySelectorAll(`.${this.buttonClass}`);

    Array.from(buttonsList).forEach(buttonEl => {
      buttonEl.addEventListener('click', this.show);
    });
  }

  show(e) {
    e.preventDefault();
    const buttonClicked = e.target;
    if(buttonClicked.classList.contains('malb-form-button--alt')) {
      return alert('You do not have to subscribe but if you want to, you can always do this anytime');
    } else {
     console.log(buttonClicked.closest('form')); 
    }
  }  

}


export default Input;