import React from "react";
import './Content.scss';
import UserCard from "../UserCard/UserCard";
import loading from '../../img/hug.gif';

const Content = ({title, info, users, changePage}) => {

    const renderUsersCard = () => {
        if(users.length === 0) {
            return (
                <img src={loading} alt="loading" className='loading'/>
            )
        }else{
            return users.map(user => {
                return (
                    <UserCard 
                        name={user.name}
                        city={user.address.city}
                        company={user.company.name}
                        key={user.name}
                        id={user.id}
                        changePage={changePage}
                    />
                )
            })
        }

    }

    return(
        <div className="content">
            <span className="content__title">{title}</span>
            <div className="content__elements">
                {renderUsersCard()}
            </div>
            <span className="content__info"> {info}</span>
        </div>
    )
}

export default Content;