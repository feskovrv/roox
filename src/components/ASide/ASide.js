import React from "react";
import './ASide.scss';
import Button from '../Button/Button';

const Aside = ({sort}) => {

    return (
        <div className="aside">
            <span className="aside__title">Сортировка</span>
            <Button label="по городу" func={()=>sort('city')} />
            <Button label="по компании" func={()=>sort('company')} />
        </div>
    )
}

export default Aside;