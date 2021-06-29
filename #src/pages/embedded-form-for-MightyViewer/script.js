(function () {

    let form = document.querySelector(".embedded-form-MV[data-2306211538] > .form");

    let inputs = form.querySelectorAll('input');
    let btn = form.querySelector("#btn2806211546");

    // setTimeout(function () {
    //     btn.setAttribute('disabled', '');
    // }, 3000)

    let countAllCheckbox = null;
    let countAllEmail = null;
    for (let i = 0; i < inputs.length; i ++) {
        if (inputs[i].type === 'checkbox') {
            countAllCheckbox++
        } else if (inputs[i].type === 'email') {
            countAllEmail++
        }
    }
    console.log('countAllEmail: ' ,countAllEmail);

    function check() {
        let checked = false;
        let filled = false;
        let checkedCheckbox = null;
        let filledEmail = null;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'email' && !!inputs[i].value === true) {
                // filled = true;
                filledEmail++
            } else if (inputs[i].type === 'checkbox' && !!inputs[i].checked === true) {
                checkedCheckbox++
            }
        }

        // console.log('filledEmail: ', filledEmail);

        if (countAllCheckbox === checkedCheckbox) {
            checked = true;
        } else if (countAllEmail === filledEmail) {
            //console.log('dada')
            filled = true;
        }
        console.log('filled',filled);
        console.log('checked',checked);
        if (filled && checked) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', '');
        }

    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", check);
        inputs[i].addEventListener("keyup", check);
    }
    btn.addEventListener("click", check);


}());



