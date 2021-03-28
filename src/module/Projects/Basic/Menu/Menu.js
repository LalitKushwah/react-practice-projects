import React, { useState } from 'react';
import Categories from './Categories';
import MenuItem from './MenuItem';
import items from '../../../../assets/data/Menu';

const Menu = () => {
    const [menuItems, setMenuItems] = useState(items);
    // const [categories, setCategories] = useState([]);

    const allCategories = ['all', ...new Set(items.map(item => item.category))];

    const filterItems = (category) => {
        console.log('=====', category);
        if (category.toLowerCase() === 'all') {
            setMenuItems(items);
            return;
        }
        const filteredItems = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
        console.log('=== param ===', category);
        console.log('=== filteredItems ===', filteredItems);

        setMenuItems(filteredItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
            </section>
            <Categories filterItems={filterItems} categories={allCategories} />
            <MenuItem items={menuItems}></MenuItem>
        </main>
    )
}
export default Menu;