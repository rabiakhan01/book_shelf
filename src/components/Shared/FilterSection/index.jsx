import React, { useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";

const FilterSection = () => {

    const categories = ['Imaginative literature', 'Scientific literature', 'Bussines', 'Educational', 'Other'];
    const languages = ['English', 'Russian', 'Korean'];
    const [filter, setFilter] = useState('');

    const handelCategory = (event) => {
        setFilter(event.target.value)
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
                                    <input type="checkbox" value={language} onChange={handelCategory} />
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
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>
        </div>
    )
}
export default FilterSection;