export function Badge({badgeItem: {id, name}, onClickBadge, stateBadge}) {
    const handleOnClick = () => {
        onClickBadge(id);
    };

    return (
        <div onClick={handleOnClick} className={stateBadge(id)}>
            {name}
        </div>
    );
}