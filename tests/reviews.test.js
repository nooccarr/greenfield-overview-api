import React from 'react'
import {
    findRatingAverage,
    findRecommendPercent,
    getRatingPercentages,
} from '../src/ratings-reviews/Rating-Helpers';

test('rating percentages', () => {
    expect(getRatingPercentages({ 1: 2, 2: 2, 3: 2, 4: 2, 5: 2 })).toBe({
        "1": 20,
        "2": 20,
        "3": 20,
        "4": 20,
        "5": 20
    })
})