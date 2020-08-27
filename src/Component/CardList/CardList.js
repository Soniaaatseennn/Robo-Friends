import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
    return (
    <div>
        {
            robots.map((item)=> {
                return (
                    <Card
                     key={ item.id } 
                    name={ item.name }
                    email={item.email } 
                    />
                );
            })
        }
    </div> 
    
    );
}
export default CardList;