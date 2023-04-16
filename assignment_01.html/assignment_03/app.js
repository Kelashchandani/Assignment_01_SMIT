(async function(){
const response = await fetch("./Data.json");
const Data = await response.json();

const genre = document.getElementById("genre");
const year = document.getElementById("year");
const language = document.getElementById("language");
const rating = document.getElementById("rating");

// console.log(Data);
genre.addEventListener("click", getGenre());
 function getGenre(){
     
     let option = document.createElement("option");
     genre.appendChild(option);
    //  Data.genres.json.stringfy() = option;

}



// getGenre();

})();