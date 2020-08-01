 // generate random number
 function generateNum() {
    var randomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("random-num-field").value = randomNum;
    document.getElementById("try-left").innerText = 3;
    clearNumField() //clear input field
    var submitBtn = document.getElementById("submit"); 
    submitBtn.disabled = false; //enable submit button
    document.getElementById('right-message').style.display = "none";
    document.getElementById('wrong-message').style.display = "none";

    
}

// Take Input  
function inputNum(num) {

    var numLength = (document.getElementById("num-input-field").value).length;

    if (numLength < 4) {
        document.getElementById("num-input-field").value += num;
    } 
    else {
        alert("You can't enter more than 4 Digit")
    }
}


// Match Number
function matchNum() {
    
    var generateNum = parseInt(document.getElementById("random-num-field").value);
    console.log(generateNum);
    var givenNum = parseInt(document.getElementById("num-input-field").value);

    let rightMessage = document.getElementById('right-message');
    let wrongMessage = document.getElementById('wrong-message');
 

    var numLength = (document.getElementById("num-input-field").value).length;
   
    // if doen't generate pin 
    
    if (isNaN(generateNum)){
        alert("Generate Pin First");
        return;
    }

    // if input number less than 4 digit
    if (numLength < 4) {  
        alert("Enter 4 digit number");
        return;
    }

    

    // if generate number is equal to input number
    if (generateNum == givenNum) {
        rightMessage.style.display = "block";
        wrongMessage.style.display = "none";
        clearNumField()
        document.getElementById("random-num-field").value = "";
        tryLeft();
        var submitBtn = document.getElementById("submit");
        submitBtn.disabled = true;  // disable submit button
    } 
     // if generate number is not equal to input number
    else {
        wrongMessage.style.display = "block";
        rightMessage.style.display = "none";
        clearNumField()  //clear the input filed
        tryAmount = tryLeft();   
        // after 3 try
        if (tryAmount < 2) {
            document.getElementById("random-num-field").value = ""; //generate number field blank after 3 try
            var submitBtn = document.getElementById("submit");
            submitBtn.disabled = true;  // disable submit button after 3 try
            alert("Generate New Pin")
        }
    }
}

// Clear Number Field
function clearNumField() {
    document.getElementById("num-input-field").value = "";
}

// Delete last Digit
function backspaceNum() {
    var inputNum = (document.getElementById("num-input-field").value);
    inputNum = inputNum.substring(0, inputNum.length - 1)
    document.getElementById("num-input-field").value = inputNum;
}

// Try Left Reamining
function tryLeft() {
    var tryLeft = parseInt(document.getElementById("try-left").innerText);
    if (tryLeft > 0) {
        document.getElementById("try-left").innerText = tryLeft - 1;
    }
    return tryLeft;
}