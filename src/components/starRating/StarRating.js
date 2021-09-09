import {StarItem} from "./starItem/StarItem";

import {createRating10Star} from "../../tools";

import './StarRating.css';


export function StarRating({rating}) {
    const ratingArray = createRating10Star(rating);

    return (
        <div className={'star-rating'}>
            {
                ratingArray.map((item, index) => <StarItem value={item} key={index}/>)
            }
        </div>
    );
}