function createPaginationItems(pageId, totalPages, initCountItem) {
    // initCountItem - min = 6 and even number
    let pageNumbers = [];

    if (totalPages <= initCountItem) {
        return Array.from({length: totalPages}, (x, i) => i + 1);
    }

    const centerItem = initCountItem/2;

    if (pageId <= (initCountItem/2)) {
        pageNumbers = Array.from({length: initCountItem - 2}, (x, i) => i + 1);
    }

    if (pageId > (initCountItem/2) && pageId <= (totalPages - initCountItem/2)) {
        pageNumbers = Array.from({length: initCountItem - 1}, (x, i) => i + pageId - centerItem);
        pageNumbers[0] = 1;
        pageNumbers[1] = '...';
    }

    if (pageId > (totalPages - initCountItem/2)) {
        pageNumbers = Array.from({length: initCountItem}, (x, i) => i + totalPages - initCountItem + 1);
        pageNumbers[0] = 1;
        pageNumbers[1] = '...';
    }

    if (pageId <= (totalPages - initCountItem/2)) {
        pageNumbers[pageNumbers.length] = '...';
        pageNumbers[pageNumbers.length + 1] = totalPages;
    }

    return pageNumbers;
}

export default createPaginationItems;