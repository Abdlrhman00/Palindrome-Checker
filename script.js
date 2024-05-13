document.getElementById("check-btn").addEventListener("click",function(e){
    var resDiv = document.getElementById("result");

    var inputText = document.getElementById("text-input").value;
    //console.log(inputText);
    if(inputText == "")
        alert("Please input a value");
    else{
        
        let result = checkPalindrome(inputText);
        var styleText = "<span  style='font-weight:bolder;'>"+ inputText + "</span>";

        if(result){
            var text = " is a palindrome";
            resDiv.innerHTML = styleText + text;
        }else
            resDiv.innerHTML = styleText + " is not a palindrome";

    }

    resDiv.style.marginTop = "10px";
    //resDiv.style.fontSize = "20px";
    resDiv.style.color = "#333";

})

function checkPalindrome(original){
    let copy = ""
    original = prep(original);
    copy = reverseString(original);

    console.log(copy);

    return original === copy;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function prep(str){
    str = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    return str;
}