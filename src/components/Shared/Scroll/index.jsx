import React, { useState } from "react";
import images from '../../../assets/images/images'
const Scroll = () => {

    const [showScroll, setShowScroll] = useState(false);

    document.addEventListener('scroll', (event) => {
        if (window.scrollY > 400) {
            setShowScroll(true);
            event.stopPropagation();
        }
        else {
            setShowScroll(false)
        }
    })

    const handelScroll = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });

    }
    return (
        <div className={`justify-center items-center h-8 w-8 bg-lightYellowColor rounded-full cursor-pointer ${showScroll ? 'flex' : 'hidden'}`} onClick={handelScroll}>
            <img src={images.upArrow} alt="up-arrow" className="h-5 w-5" />
        </div>
    )
}

export default Scroll;