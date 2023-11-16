// Api task

async function get() {
    var res = await fetch("https://jsonplaceholder.typicode.com/comments");
    var data = await res.json();
    text = "";
    for (var i = 0; i < data.length; i++)
    {
        var cortona =
        `
        <div class="col-md-3 mb-3 text-center ">
        <img src="${data[i].url}" alt="">
        <h2>${data[i].id}</h2>
        <h5>${data[i].title}</h5>
    </div>`
    text += cortona;
    }

    document.querySelector("#tast").innerHTML = text;
}
get();


// var req = new XMLHttpRequest();
// req.open("Get", "https://jsonplaceholder.typicode.com/posts", true);
// req.send();
// req.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status ==2) {
//         console.log(this.responseText);
//     }
// }