import React from "react";

const Headline = () => {
    const headline = ['all books'];
    for (let i = 0; i < 10; i++) {
        headline.push(headline[0]);
    }
    return (
        <div className="flex gap-4 h-16 w-full bg-lightYellowColor mt-2 lg:mt-7 justify-center font-medium items-center uppercase text-[5vw] sm:text-[4vw] md:text-[3vw] 2xl:text-4xl overflow-hidden">
            {
                headline.map((headline, index) => {
                    return <p key={index} className={`text-nowrap  ${index === 5 ? 'text-textPrimaryColor' : 'text-textYellowColor'}`}>{headline}</p>
                })
            }
        </div>
    )
}

export default Headline;