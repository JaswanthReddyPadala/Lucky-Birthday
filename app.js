let dateOfBirth = document.querySelector('#date-of-birth');

let luckyNumber = document.querySelector('#lucky-number');

let checkButton = document.querySelector("#checkLucky");
let result = document.querySelector(".result");


checkButton.addEventListener("click", function() {
    // console.log(dateOfBirth.value);
    result.innerText = "";
    let dob = calculateDob(dateOfBirth.value);
    let luckyNum = luckyNumber.value;

    if(dob % luckyNum > 0){
        result.innerText = "Oh no, 😫 Your birthday is not lucky";
    }
    else{
        result.innerText = "So cool, Your birthday is your lucky day 🤩🍰";
    }
})

function calculateDob(dob){
    let dobNumber = dob.replaceAll("-","");
    let dobSum = 0 ;

    for(let i of dobNumber){
        dobSum += Number( i );
    }
    return dobSum;
}
