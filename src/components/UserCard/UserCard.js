import React from "react";
import './UserCard.scss';

const UserCard = ({name, city, company, id, changePage}) => {

    return (
        <div className="card" data-id={id}>
            <span className="card__userInfo">
                ФИО: <span>{name}</span>
            </span>
            <span className="card__userInfo">
                город: <span>{city}</span>
            </span>
            <span className="card__userInfo">
                компания: <span>{company}</span>
            </span>
            <span className="card__additionBtn" onClick={()=>{changePage('userFields', id)}}>Подробнее</span>
        </div>
    )
}

export default UserCard;