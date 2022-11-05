import React from "react";
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.css'
const Directory = ({categories}) =>{
    return (
        <div className="directories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />

            ))}

        </div>
    )

}

export default Directory;