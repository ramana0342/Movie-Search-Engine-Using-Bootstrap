var subBtn=document.getElementById("submitBtn");
var filmName=document.getElementById("movieName");
var movieContainer=document.getElementById("movieCards")
var MovieStatus=document.getElementById("movieStatus")


//click event is added to submit button
movieContainer.innerHTML = "<img  id=firstImage src=https://ghawthorne66.github.io/movie-search-app/assets/images/Movie-Logo.png>"
subBtn.addEventListener("click",()=>{
    movieContainer.innerHTML =""
    MovieStatus.innerHTML=""
    MovieStatus.innerHTML="<p><h1>Loading.......</h1></p>"
    if(filmName.value==""){
        MovieStatus.innerHTML=""
        alert("!!!  Movie Name Reqired: Enter Any Movie Name");
    }
    else{
             // API Link    ======>https://www.omdbapi.com/?apikey=45f0782a&s=titanic
        axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${filmName.value}`).then((res)=>{
        if(res.data.Response=="True"){
            var movies=res.data.Search;
            movies.map((movie,index)=>{
                MovieStatus.innerHTML=""
                movieContainer.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div class="card"">
                                                     <img src="${movie.Poster}" class="card-img-top" alt="...">
                                                  <div class="card-body">
                                                  <p class="card-text"><b>Movie Name:   ${movie.Title}</b></p>
                                                  <p class="card-text"><b>Movie Relese Year:   ${movie.Year}</b></p>
                                                  </div>
                                                </div> 
                                             </div>`

            })
        }else{
            MovieStatus.innerHTML="<p><h1>!!!  Error 404 Movie  not found</h1></p>"
        }
        })
    }
});