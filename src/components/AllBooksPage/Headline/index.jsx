import React from "react";

const Headline = () => {
    const headline = ['all books'];
    for (let i = 0; i < 7; i++) {
        headline.push(headline[0]);
    }
    return (
        <div className="flex gap-4 h-16 w-full bg-lightYellowColor mt-9 justify-center items-center uppercase text-3xl overflow-hidden">
            {
                headline.map((headline, index) => {
                    return <p className={`text-nowrap ${index === 3 ? 'text-textPrimaryColor' : 'text-textYellowColor'}`}>{headline}</p>
                })
            }
        </div>
    )
}

export default Headline;