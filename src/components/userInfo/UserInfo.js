import userImage from '../../image/user-image.png';

import './userInfo.css';


export function UserInfo() {
    return (
        <div className={'user-info'}>
            <img src={userImage} alt={'user-image'}/>
        </div>
    );
}