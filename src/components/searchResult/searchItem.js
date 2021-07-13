import React from 'react'

const searchItem = ({ item }) => {

    const getItemInfo = (apptInfo) => {
        return `$${apptInfo.rate/1000}k+ / ${apptInfo.apartment_bed}${apptInfo.apartment_bed>1?' Beds':' Bed'} / Appt.  ...${apptInfo.find_more} more`;

    };

    return (
        <a href="#" className="list-item">
            <strong className="item-title">{item.city_name}, {item.short_code} </strong>
            <small className="item-info">
                <i className="icon"></i>
                {getItemInfo(item)} <i className=" arrow-icon fas fa-angle-right"></i>
            </small>
        </a>
    )
}

export default searchItem
