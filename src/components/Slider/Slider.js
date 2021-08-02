import React from 'react';
import './Slider.css';

import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    return ( 
        <div className="Slider">
            <FaAngleLeft />
            <div className="featured">
                <p>Featured</p>
                <p>Learn How to Value your Contributions</p>
            </div>
            <div className="readmore">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus, perspiciatis impedit ea dicta saepe at facere enim magnam? Corrupti sed soluta dolores.</p>
                <span>Learnmore </span><FaArrowRight />
            </div>
            <FaAngleRight />
        </div>
    );
}
 
export default Slider;  