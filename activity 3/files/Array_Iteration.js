
    const numbers = [35, 4, 4, 19, 91];

    let txt = "";
    numbers.forEach(myFunction);
    document.getElementById("ArrIt").innerHTML = txt;

    function myFunction(value) {
        txt += value + "<br>"; 
}