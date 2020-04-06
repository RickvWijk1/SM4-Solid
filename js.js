function check01(){

    document.getElementById("overlay").style.visibility = "visible";
}
function check02(){
    document.getElementById("checkbox02").style.borderColor = "#50d890";
    document.getElementById("checkbox02").style.borderWidth = "5px"
}
function check03(){
    document.getElementById("checkbox03").style.borderColor = "#50d890";
    document.getElementById("checkbox03").style.borderWidth = "5px"
}
function check04(){
    document.getElementById("checkbox04").style.borderColor = "#50d890";
    document.getElementById("checkbox04").style.borderWidth = "5px"
}
function save(){
    document.getElementById("checkbox01").style.borderColor = "#50d890";
    document.getElementById("checkbox01").style.borderWidth = "5px";
    document.getElementById("overlay").style.visibility = "hidden";
    console.log(document.getElementById("subbox01").value + ": " + document.getElementById("subbox01").checked);
    console.log(document.getElementById("subbox02").value + ": " + document.getElementById("subbox02").checked);
    console.log(document.getElementById("subbox03").value + ": " + document.getElementById("subbox03").checked);
    console.log(document.getElementById("subbox04").value + ": " + document.getElementById("subbox04").checked);
    console.log(document.getElementById("subbox05").value + ": " + document.getElementById("subbox05").checked);
    console.log(document.getElementById("subbox06").value + ": " + document.getElementById("subbox06").checked);
    console.log(document.getElementById("subbox07").value + ": " + document.getElementById("subbox07").checked);
    console.log(document.getElementById("subbox08").value + ": " + document.getElementById("subbox08").checked);
    console.log(document.getElementById("subbox09").value + ": " + document.getElementById("subbox09").checked);
    console.log(document.getElementById("subbox10").value + ": " + document.getElementById("subbox10").checked);
    console.log("Electronics value: " + document.getElementById("myRange").value)
}
function clearform(){
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("checkbox01").style.borderColor = "black";
    document.getElementById("checkbox01").style.borderWidth = "1px";
}