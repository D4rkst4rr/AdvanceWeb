const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const v = new Date();
let month = months[v.getMonth()];
document.getElementById("Get").innerHTML = month;