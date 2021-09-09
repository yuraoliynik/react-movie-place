function foundGenresArr(lookForGenreIdsArr, genresDataArr) {
    const genresIdStr = '.' + lookForGenreIdsArr.join('.') + '.';

    return genresDataArr.filter(item => genresIdStr.indexOf(`.${item.id}.`) !== -1);
}

export default foundGenresArr;
