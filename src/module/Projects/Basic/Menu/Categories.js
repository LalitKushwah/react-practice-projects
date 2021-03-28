import React from 'react';

const Categories = ({ filterItems, categories }) => {
    console.log(categories);
    return (
        <div className="btn-container">
            {
                categories.map(category => {
                    return (<button className="filter-btn" onClick={() => filterItems(category)}>{category}</button>)
                })
            }
        </div>
    )
}
export default Categories;