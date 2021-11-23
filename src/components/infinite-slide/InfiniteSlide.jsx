import React from 'react';
import './infinite-slide.scss';

const InfiniteSlide = ({ children }) => {
    return (
        <div className="infiniteSlide">
            <div className="infiniteSlide__fade"></div>
            <div className="infiniteSlide__content">
                {children}
            </div>
        </div>
    )
}

InfiniteSlide.defaultProps = {
    children: null
}
export default InfiniteSlide
