import {Link} from "react-router-dom";


export function PaginationItem({paginationItem, url}) {
    switch (paginationItem) {
        case 1:
            return (<div><Link to={`${url}`}> {paginationItem} </Link></div>);

        case '...':
            return (<div>{paginationItem}</div>);

        default:
            return (<div><Link to={`${url}/movies-page=${paginationItem}`}> {paginationItem} </Link></div>);
    }
}