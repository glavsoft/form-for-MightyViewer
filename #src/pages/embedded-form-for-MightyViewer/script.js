(function () {

    let form = document.querySelector(".embedded-form-mv__[data-2306211538] > .form__");
    //если не будет этого класса to-connect-with__ то инпуты не будут завязаны с кнопкой отправить
    let inputs = form.querySelectorAll('input.to-connect-with__');
    let btn = form.querySelector("#btn2806211546");

    setTimeout(function () {
        btn.setAttribute('disabled', '');
    }, 3000)

    btn.addEventListener('click', getChecked);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', getChecked);
        inputs[i].addEventListener('keyup', getChecked);
    }

    function getChecked() {
        let allEmptyCheckboxes = true;
        let allEmptyEmail = true;
        let selectedAllCheckbox = null;
        let filledAllEmail = null;
        let numberAllCheckboxes = null;
        let numberAllInputEmail = null;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'checkbox') {
                numberAllCheckboxes++
            }
            if (inputs[i].type === 'text') {
                numberAllInputEmail++
            }
        }

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'checkbox' && inputs[i].checked === true) {
                let numberCheckedCheckboxes = !!inputs[i];
                selectedAllCheckbox += numberCheckedCheckboxes;

                if (numberAllCheckboxes === selectedAllCheckbox) {
                    allEmptyCheckboxes = false;
                }
            }
            if (inputs[i].type === 'text' && inputs[i].value !== '') {
                let numberFilledEmail = !!inputs[i];
                filledAllEmail += numberFilledEmail;

                if (numberAllInputEmail === filledAllEmail) {
                    allEmptyEmail = false;
                }
            }
        }

        if (!allEmptyEmail && !allEmptyCheckboxes) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', '');
        }
    }

}());



