import React from 'react';
import './SearchBox.css';







const SearchBox = (props) => {
    return (
        <div className='pa2 input'>
            <input type='text' placeholder='search robots'
                className='pa3 ba b--green bg-lightest-blue'
                onChange={props.onInputChange} />

        </div>
    )

}
export default SearchBox;