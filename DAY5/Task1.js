class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG() {
        return arrmovies.filter(movie => movie.rating === "PG");
    }
}

const lover = new Movie("Lover", "Million dollar studios", "PG-13");

const arrmovies = [
    new Movie("Vadachennai", "Lyca", "PG-13"),
    new Movie("Enthiran", "sun pictures", "PG"),
    new Movie("Love today", "AGS entertainment", "PG"),
    new Movie("Mamannan", "Red giant movies", "R")
];

console.log(Movie.getPG(arrmovies));