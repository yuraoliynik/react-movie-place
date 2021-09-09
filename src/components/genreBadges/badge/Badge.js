import './Badge.css';


export function Badge({badgeItem: {id, name}, onClickBadge, stateBadge}) {
    const handleOnClick = () => {
        onClickBadge(id);
    };

    return (
        <div className={'badge'}>
            <button onClick={handleOnClick} className={stateBadge(id)}>
                {name}
            </button>
        </div>
    );
}