function checkStateBadge(badgeId, selectedGenres) {
    return selectedGenres.filter(item => item === badgeId).length > 0;
}

export default checkStateBadge;