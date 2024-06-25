import React from "react";

const Headline = ({ headlineData }) => {
    const headlineArray = [];
    for (let i = 0; i < 11; i++) {
        headlineArray.push(headlineData);
    }

    return (
        <div className=" flex gap-4 h-14 w-full bg-lightYellowColor justify-center font-medium items-center uppercase text-[5vw] sm:text-[4vw] md:text-[3vw] 2xl:text-3xl overflow-hidden" id="pageStart">
            {
                headlineArray.map((headline, index) => {
                    return <p key={index} className={`text-nowrap  ${index === 5 ? 'text-textPrimaryColor' : 'text-textYellowColor'} `}>{headline}</p>
                })
            }
        </div>
    )
}

export default Headline;