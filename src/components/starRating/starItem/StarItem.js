import './StarItem.css';


export function StarItem({value}) {
    return (
        <div className={'star-item'}>
            <div className={'star-item_black'}>
                ★
            </div>

            <div className={'star-item_yellow'} style={{width: value * 100 + '%'}}>
                ★
            </div>
        </div>
    );
}