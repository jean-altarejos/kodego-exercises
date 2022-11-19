

const btnCheck = document.querySelector(".btnCheck");
btnCheck.addEventListener("click", oddEven);


function oddEven() {
    let num = document.querySelector("input").value;

    if (num % 2 == 0){
        let result = document.createElement("p");
        let text = document.createTextNode("EVEN!!");
        result.appendChild(text);

        let displayResult = document.querySelector(".display-result");
        displayResult.appendChild(result);

    } else {
        let result = document.createElement("p");
        let text = document.createTextNode("ODD!!");
        result.appendChild(text);

        let displayResult = document.querySelector(".display-result");
        displayResult.appendChild(result);
    }
}