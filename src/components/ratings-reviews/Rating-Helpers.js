
function findRatingAverage(ratings) {
    // let ratingProduct = Object.keys(ratings).map((key, value) => {
    //     return Object.values(ratings)[value] * key;
    // });
    // let averageRating = ratingProduct.reduce((a, b) => {
    //     return (
    //         (a + b) /
    //         Object.values(ratings).reduce((a, b) => {
    //             return a + b;
    //         })
    //     );
    // });
    // return Math.round(averageRating * 10) / 10
    if (!ratings[1]) {
        ratings[1] = 0
    }
    if (!ratings[2]) {
        ratings[2] = 0
    }
    if (!ratings[3]) {
        ratings[3] = 0
    }
    if (!ratings[4]) {
        ratings[4] = 0
    }
    if (!ratings[5]) {
        ratings[5] = 0
    }
    let sumTotal = ratings[1] * 1 + ratings[2] * 2 + ratings[3] * 3 + ratings[4] * 4 + ratings[5] * 5

    let valSum = ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5]
    return (Math.round((sumTotal / valSum) * 10) / 10)
}

function findRecommendPercent(recommended) {
    return (recommended[1] /
        (recommended[0] + recommended[1]))
}

function getRatingPercentages(ratings) {
    let largest = 0;
    let largestKey
    let valueSum = Object.values(ratings).reduce((a, b) => a + b)
    // console.log(ratings)
    if (!ratings) {
        return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }

    for (let val in ratings) {
        if (ratings[val] > largest) {
            largest = ratings[val]
        }
        largestKey = val
    }

    let ratingPercentages = {
        "1": (ratings[1] / valueSum) * 100,
        "2": (ratings[2] / valueSum) * 100,
        "3": (ratings[3] / valueSum) * 100,
        "4": (ratings[4] / valueSum) * 100,
        "5": (ratings[5] / valueSum) * 100
    }

    for (let val in ratingPercentages) {
        if (!ratingPercentages[val]) {
            ratingPercentages[val] = 0;
        }
    }
    return ratingPercentages
}


export {
    findRatingAverage,
    findRecommendPercent,
    getRatingPercentages,
}
