
let findRatingAverage = function (ratings) {
    let ratingProduct = Object.keys(ratings).map((key, value) => {
        return Object.values(ratings)[value] * key;
    });
    let averageRating = ratingProduct.reduce((a, b) => {
        return (
            (a + b) /
            Object.values(ratings).reduce((a, b) => {
                return a + b;
            })
        );
    });
    return Math.round(averageRating * 10) / 10
}

export default findRatingAverage