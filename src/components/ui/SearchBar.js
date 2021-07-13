import React, { useState } from 'react'

const SearchBar = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <i className="fas fa-search"></i>
                <input
                    type='text'
                    placeholder='Search for address'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
                <button className='search-btn'>Search</button>
            </form>

        </section>
    )
}

export default SearchBar
