// Get data from the server.
function getServerData(url) {
    let fetchOptions ={
        metod:"GET",
        mode:"cors",
        cache:"no-cache"
    };

   return fetch (url,fetchOptions).then(
        response=> response.json(),
        err=> console.error(err)
    );
}

//document.querySelector("#getDataBtn").addEventListener("click", function() {
    getServerData("http://localhost:3000/users").then(
        data => console.log(data)
);
//};
