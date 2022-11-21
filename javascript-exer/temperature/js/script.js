
function temperature() {
    let fahrenheit = parseInt(document.querySelector(".fahrenheit-num").value);
    let celsius = parseInt(document.querySelector(".celsius-num").value);

    let fValue = (fahrenheit - 32) * .5566;
    let cValue = (celsius * 1.8) + 32;

    Math.round(fValue);
    Math.round(cValue);
    
    document.getElementById('cResult').value = cValue;
    document.getElementById('fResult').value = fValue;
}