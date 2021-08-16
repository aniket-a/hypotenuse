const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-button");
const output = document.querySelector("#output");


function calculateSumOfSquare(a, b){
    const sumOfSquare = a*a + b*b;
    console.log(sumOfSquare);
    return sumOfSquare;
}


function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare( Number(sides[0].value), Number(sides[1].value) );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare)
    console.log(lengthOfHypotenuse);
    output.innerText ="The length of the hypotenuse is: " + lengthOfHypotenuse;

}



hypotenuseBtn.addEventListener("click", calculateHypotenuse);