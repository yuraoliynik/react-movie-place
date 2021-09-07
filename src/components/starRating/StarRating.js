import {StarItem} from "./starItem/StarItem";

import {arrayRating10Star} from "../../tools";

import './StarRating.css';


export function StarRating({rating}) {
    const ratingArray = arrayRating10Star(rating);

    return (
        <div className={'star-rating'}>
            {
                ratingArray.map((item, index) => <StarItem value={item} key={index}/>)
            }
        </div>
    );
}