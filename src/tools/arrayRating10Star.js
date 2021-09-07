export default function arrayRating10Star(rating) {
    const ratingArray = Array.from({length: 10}, (x, i) => i < (rating - 1) ? 1 : 0);
    ratingArray[Math.floor(rating)] = Math.round((rating - Math.floor(rating)) * 10) / 10;

    return ratingArray;
}