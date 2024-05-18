import React, { useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";
import { useContext } from "react";
import { filterContext } from "../../AllBooksPage/BooksListing";

const FilterSection = () => {

    const selectedFilters = useContext(filterContext);

    //Categories array where all types of category are defined
    const categories = ['Imaginative literature', 'Scientific literature', 'Bussines', 'Educational', 'Other'];

    //define all the language in which books are availabe
    const languages = ['English', 'Russian', 'Korean'];

    // filter all the book from which category it belongs
    const [category, setCategory] = useState('');

    //filter all the book which are available in which language
    const [language, setLanguage] = useState('');

    //store the values of the categories are selected
    const handelCategory = (event) => {
        const selectedCategory = event.target.value;
        const { checked } = event.target;
        console.log(checked)
        if (checked) {
            setCategory(selectedCategory);
            selectedFilters.setChoice([...selectedFilters.choice.filter((item) => item !== selectedCategory), selectedCategory]);
        }

    }

    const handelLanguage = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        selectedFilters.setChoice([...selectedFilters.choice.filter((item) => item !== selectedLanguage), selectedLanguage]);
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
                                    <input type="checkbox" value={category} onChange={handelCategory} />
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
                                    <input type="checkbox" value={language} onChange={handelLanguage} />
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
                    onChange={({ min, max }) => { }}
                />
            </div>
        </div>
    )
}
export default FilterSection;