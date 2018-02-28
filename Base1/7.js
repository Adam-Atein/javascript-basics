
const shoe_size = document.getElementById("shoe_size");
const year = document.getElementById("year");
const validate = document.getElementById("validate");

validate.addEventListener('click', function () {
    const number = parseInt(shoe_size.value)
    number *= parseInt(2);
    number += parseInt(5);
    number *= parseInt(50);
    number -= parseInt(year.value);
    number += parseInt(1766);
    document.write(number);
});
//Adam
