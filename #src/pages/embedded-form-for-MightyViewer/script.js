(function () {

    let form = document.querySelector(".embedded-form-MV[data-2306211538] > .form");

    let inputs = form.querySelectorAll('input');
    let btn = form.querySelector("#btn2806211546");




    let arrayInputsExpression = [
        form.querySelector('#checkbox25062112101s'),
        form.querySelector('#checkbox25062112102s'),
    ];

    let arrayInputs = [];

    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].id);
        arrayInputs = inputs[i].id + ',' + arrayInputs.slice(0, -1);
    }
    console.log(arrayInputs);
    arrayInputs = arrayInputs.split(',');
    console.log('arr: ', arrayInputs);





    setTimeout(function () {
        btn.setAttribute('disabled', '');
    }, 3000)

    let countAllCheckbox = null;
    let countAllEmail = null;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'checkbox') {
            countAllCheckbox++
        }
        if (inputs[i].type === 'email') {
            countAllEmail++
        }
    }

    function check() {
        let checked = false;
        let filled = false;
        let checkedCheckbox = null;
        let filledEmail = null;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'email' && !!inputs[i].value === true) {
                filledEmail++
            }
            if (inputs[i].type === 'checkbox' && !!inputs[i].checked === true) {
                checkedCheckbox++
            }
        }

        if (countAllCheckbox === checkedCheckbox) {
            checked = true;
        }
        if (countAllEmail === filledEmail) {
            filled = true;
        }
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



