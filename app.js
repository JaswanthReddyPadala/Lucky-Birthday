let dateOfBirth = document.querySelector('#date-of-birth');

let luckyNumber = document.querySelector('#lucky-number');

let checkButton = document.querySelector("#checkLucky");
let result = document.querySelector(".result");


checkButton.addEventListener("click", function() {
    result.innerText = "";
    let dob = calculateDob(dateOfBirth.value);
    let luckyNum = luckyNumber.value;
    result.style.display = "flex";
    if(luckyNum > 0 && dob != undefined){

        result.innerHTML = "<img src='https://media.giphy.com/media/l4KhS0BOFBhU2SYIU/giphy.gif' />"
        
        setTimeout(()=> {
            result.style.border = "2px solid #4741A6";
            if(dob % luckyNum > 0){
                result.innerHTML = "<h2>Oh no, 😫 Your birthday is not lucky</h2>";
            }
            else{
                result.innerHTML = "<h2>So cool, Your birthday is your lucky day 🤩🍰</h2>";
            }
        },2000);
    }
    else{
        alert('Please enter inputs correctly');
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
