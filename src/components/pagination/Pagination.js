import {useSelector} from "react-redux";

import {PaginationItem} from "./paginationItem/PaginationItem";
import {createPaginationItems} from '../../tools';

import './Pagination.css';


export function Pagination({page, totalPages}) {
    const url = useSelector(({settingReducer: {genres_URL}}) => genres_URL);

    const paginationItems = createPaginationItems(page, totalPages, 12);

    const selectedPaginationItem = (paginationItem) => {
        return page === paginationItem ? 'selectedPaginationItem' : '';
    };

    return (
        <div className={'pagination'}>
            {
                paginationItems.map((item, index) => <PaginationItem
                    paginationItem={item}
                    key={index}
                    url={url}
                    selectedPaginationItem={selectedPaginationItem}
                />)
            }
        </div>
    );
}