import './StarItem.css';


export function StarItem({value}) {
    return (
        <div className={'star-item'}>
            <div>
                ★
            </div>

            <div className={'star-item_yellow'} style={{width: value * 100 + '%'}}>
                ★
            </div>
        </div>
    );
}