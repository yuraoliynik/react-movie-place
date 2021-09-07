import {createPaginationItems} from '../../tools';
import {PaginationItem} from "./paginationItem/PaginationItem";

import './Pagination.css';
import {useSelector} from "react-redux";


export function Pagination({page, totalPages}) {
    const url = useSelector(({settingReducer: {genres_URL}}) => genres_URL);

    const paginationItems = createPaginationItems(page, totalPages, 12);

    return (
        <div className={'pagination'}>
            {
                paginationItems.map((item, index) => <PaginationItem
                    paginationItem={item}
                    key={index}
                    url={url}
                />)
            }
        </div>
    );
}