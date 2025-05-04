const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const result = movies.filter(function(movie){
    return movie.genre === "action"

})
console.log(result)