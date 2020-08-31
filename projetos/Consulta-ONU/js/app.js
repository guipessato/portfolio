//V1.3
document.getElementById('send').onclick = function () {
    let url = document.getElementById("url").value
    window.open("https://" + url + ":8383", "_blank")
    window.open("http://" + url + ":8383", "_blank");
} 


// document.getElementById('send').onclick = function () {
//     let url = document.getElementById("url").value
//     window.open("http://" + url + ":8383", "_blank") &&
//     window.open("https://" + url + ":8383", "_blank");
// }  
