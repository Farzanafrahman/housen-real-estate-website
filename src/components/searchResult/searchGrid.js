import React from 'react'
import SearchItem from './searchItem'

const searchGrid = ({ items, isLoading }) => {
    return isLoading ? (<h2>Loading...</h2>) : (<div className='list-item-box'>
        <div className="list-item-group">
        {items.length>0? items.map((item) => (
            <SearchItem key={item.short_code} item={item}></SearchItem>
        )):<div className="empty-message-box">We didn't find any things here!</div>}
        </div>
    </div>)
}

export default searchGrid
