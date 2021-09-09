import {Link} from "react-router-dom";

import './PaginationItem.css';


export function PaginationItem({paginationItem, url, selectedPaginationItem}) {
    const className = `pagination-item ${selectedPaginationItem(paginationItem)}`;

    switch (paginationItem) {
        case 1:
            return (<div className={className}><Link to={`${url}`}> {paginationItem} </Link></div>);

        case '...':
            return (<div className={className}>{paginationItem}</div>);

        default:
            return (<div className={className}><Link to={`${url}/movies-page=${paginationItem}`}> {paginationItem} </Link></div>);
    }
}