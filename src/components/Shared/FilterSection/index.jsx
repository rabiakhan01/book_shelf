import React from "react";
import { useState } from "react";
const FilterSection = () => {
    const categories = ['Imaginative literature', 'Scientific literature', 'Bussines', 'Educational', 'Other'];
    const languages = ['English', 'Russian', 'Korean'];

    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(30);

    const handelMinValue = (event) => {

        setMinValue(event.target.value);

    }
    const handelMaxValue = (event) => {

        setMaxValue(event.target.value);


    }
    return (
        <div className="flex flex-col justify-between p-4 gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-medium uppercase">
                    <h1>Categories</h1>
                </div>
                <div className="flex flex-col">
                    {
                        categories.map((category) => {
                            return (
                                <div className="flex gap-2">
                                    <input type="checkbox" />
                                    <label>{category}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-medium uppercase">
                    <h1>languages</h1>
                </div>
                <div className="flex flex-col">
                    {
                        languages.map((language) => {
                            return (
                                <div className="flex gap-2">
                                    <input type="checkbox" />
                                    <label>{language}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-lg md:text-xl font-medium uppercase">
                    <h1>price</h1>
                </div>
                <div className="flex gap-2">
                    <div className="w-10 h-8 flex justify-center items-center bg-lightGrayColor rounded-md"><p>${minValue}</p></div>
                    <div><p>to</p></div>
                    <div className="w-10 h-8 flex justify-center items-center bg-lightGrayColor rounded-md"><p>${maxValue}</p></div>
                </div>
                <div>
                    <div className="relative flex">
                        <input type="range" min={0} max={27} value={minValue} onChange={handelMinValue} className={`absolute h-[2px] `} />
                        <input type="range" min={1} max={30} value={maxValue} onChange={handelMaxValue} className={`absolute h-[2px]  `} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterSection;