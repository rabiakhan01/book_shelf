import React, { useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";
import { useContext } from "react";
import { filterContext } from "../../AllBooksPage/BooksListing";
import Button from "../Button";

const FilterSection = () => {

    const selectedFilters = useContext(filterContext);

    // filter all the book from which category it belongs
    const [category, setCategory] = useState({});

    //filter all the book which are available in which language
    const [language, setLanguage] = useState({});


    //store the values of the categories are selected
    const handelCategory = (event) => {
        const value = event.target.value;
        const { checked } = event.target;

        //filter all the book from which category it belongs
        const filteredCategory = {
            ...category,
            name: value,
            check: checked,
        }

        //store the values of the categories are selected and make the cheked true
        if (checked) {
            setCategory(filteredCategory);
            const updatedCategory = selectedFilters.categories.map((item) => {
                if (item.name === filteredCategory.name) {
                    return { ...item, check: true, }
                }
                else {
                    return item;
                }
            });

            selectedFilters.setCategories([...updatedCategory]);
            // now update the filters array to show chips on the top 
            selectedFilters.setChoice([...selectedFilters.choice.filter((item) => item.name !== filteredCategory.name), filteredCategory]);
        }

        // now update the category checked if it true than false
        else {
            const updatedCategory = selectedFilters.categories.map((item) => {
                if (item.name === filteredCategory.name) {
                    return { ...item, check: false, }
                }
                else {
                    return item;
                }
            });
            //update the categories array
            selectedFilters.setCategories([...updatedCategory]);

            // find the index which you want to remove 
            const index = selectedFilters.choice.findIndex((item) => item.name === filteredCategory.name);
            selectedFilters.choice.splice(index, 1);
            selectedFilters.setChoice([...selectedFilters.choice]);
        }
    }

    //handel the values of the language are selected
    const handelLanguage = (event) => {

        const value = event.target.value;
        const { checked } = event.target;

        //filter all the book which are available in the spec\cified language
        const filteredLanguage = {
            ...language,
            name: value,
            check: checked,
        }

        // check if the language is selected or not if it is selected then make the cheked true and the remain object and array remains same
        if (checked) {
            selectedFilters.setLanguages(filteredLanguage);
            const updatedLanguages = selectedFilters.languages.map((item) => {
                if (item.name === filteredLanguage.name) {
                    return { ...item, check: true, }
                }
                else {
                    return item;
                }
            });

            selectedFilters.setLanguages([...updatedLanguages]);

            selectedFilters.setChoice([...selectedFilters.choice.filter((item) => item.name !== filteredLanguage.name), filteredLanguage]);
        }

        // if the language is not selected then make the cheked false and the remain object and array remains same
        else {
            const updatedLanguages = selectedFilters.languages.map((item) => {
                if (item.name === filteredLanguage.name) {
                    return { ...item, check: false, }
                }
                else {
                    return item;
                }
            });

            // set the updated language array
            selectedFilters.setLanguages([...updatedLanguages]);

            // filter the language which is selected and remove it from the array
            const index = selectedFilters.choice.findIndex((item) => item.name === filteredLanguage.name);
            selectedFilters.choice.splice(index, 1);
            selectedFilters.setChoice([...selectedFilters.choice]);
        }
    }

    return (
        <div className="flex flex-col justify-between p-4 gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-medium uppercase">
                    <h1>Categories</h1>
                </div>
                <div className="flex flex-col">
                    {
                        selectedFilters.categories.map((category) => {
                            return (
                                <div className="flex gap-2" key={category.id}>
                                    <input type="checkbox" checked={category.check} value={category.name} onChange={handelCategory} />
                                    <label>{category.name}</label>
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
                        selectedFilters.languages.map((language) => {
                            return (
                                <div className="flex gap-2" key={language.id}>
                                    <input type="checkbox" checked={language.check} value={language.name} onChange={handelLanguage} />
                                    <label>{language.name}</label>
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
            <div className="flex justify-between w-full pt-4">
                <Button
                    variant="outlined"
                    size="extra-small"
                >Reset</Button>
                <Button
                    variant="contained"
                    size="extra-small"
                >Apply</Button>
            </div>
        </div>
    )
}
export default FilterSection;