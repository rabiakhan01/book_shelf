import React, { useContext, useEffect, useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";
import Button from "../Button";
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";
import { languagesData, categoriesData } from "../../../utils/MockupData";
const FilterSection = () => {

    const context = useContext(bookListingContext);
    // filter all the book from which category it belongs

    const [category, setCategory] = useState({});
    const [categories, setCategories] = useState(categoriesData);

    //filter all the book which are available in which language
    const [language, setLanguage] = useState({});
    const [languages, setLanguages] = useState(languagesData)

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(500);

    //handel the category array
    const handelCategory = (event) => {

        const value = event.target.value;
        const { checked } = event.target;

        //filter all the book from which category it belongs
        const selectedCategory = {
            ...category,
            name: value,
            check: checked,
        }

        // //store the values of the categories are selected and make the cheked true
        if (checked) {

            setCategory(selectedCategory);

            const updatedCategory = categories.map((item) => {
                if (item.name === selectedCategory.name) {
                    return { ...item, check: true, }
                }
                else {
                    return item;
                }
            });

            setCategories([...updatedCategory]);
            context.bookPageContext.bookFilters.push(selectedCategory);
            // update the array which contains the selcted values by user 
        }

        // when user uncheck the checkbox
        else {
            const updatedCategory = categories.map((item) => {
                if (item.name === selectedCategory.name) {
                    return { ...item, check: false, }
                }
                else {
                    return item;
                }
            });
            //update the categories array
            setCategories([...updatedCategory]);
        }

    }

    // //handel the values of the language are selected
    const handelLanguage = (event) => {
        const value = event.target.value;
        const { checked } = event.target;

        //filter all the book from which category it belongs
        const selectedLanguage = {
            ...language,
            name: value,
            check: checked,
        }

        //store the values of the languages are selected and make the cheked true
        if (checked) {

            setLanguage(selectedLanguage);

            const updatedLanguage = languages.map((item) => {
                if (item.name === selectedLanguage.name) {
                    return { ...item, check: true, }
                }
                else {
                    return item;
                }
            });

            setLanguages([...updatedLanguage]);
        }

        // when user uncheck the checkbox
        else {
            const updatedLanguage = languages.map((item) => {
                if (item.name === selectedLanguage.name) {
                    return { ...item, check: false, }
                }
                else {
                    return item;
                }
            });

            //update the categories array
            setLanguages([...updatedLanguage]);

        }

    }

    const applyFilter = () => {

        const filterData = [];
        const selectedCategory = categories.filter((item) => item.check);
        const selectedLanguage = languages.filter((item) => item.check);
        const selectedFilters = selectedCategory.concat(selectedLanguage)
        const selectedPrice = {
            minPrice: minVal,
            maxPrice: maxVal,
        }
        const filters = { ...context.bookPageContext, bookFilters: [...selectedFilters, { ...selectedPrice }] }

        if (selectedCategory.length > 0 || selectedLanguage.length > 0 || minVal > 0) {

            filters.bookFilters.map(element => {
                allBooksData.filter((filterItem) => {

                    if (filterItem.category === element.name || filterItem.language === element.name) {
                        filterData.push(filterItem);
                    }
                    else if (element.minPrice > 0 && element.maxPrice) {
                        if (filterItem.new_price > element.minPrice && filterItem.new_price < element.maxPrice) {
                            console.log("hello")
                            filterData.push(filterItem);
                        }
                    }
                    if (element.name == 'Other') {
                        if (filterItem.category !== 'Imaginative literature' && filterData.category !== 'Scientific literature' && filterItem.category !== 'Business' && filterItem.category !== 'Educational') {
                            filterData.push(filterItem);
                        }
                    }
                })
            });

            context.setBookPageContext({ ...context.bookPageContext, bookFilters: filters.bookFilters, bookListing: filterData });
        }

        else {
            context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: allBooksData })
        }
    }

    const resetAllFilters = () => {
        context.setBookPageContext({ ...context.bookPageContext, bookFilters: [] });
        setMinVal(0);
        setMaxVal(500);
    }

    useEffect(() => {

        const filters = context.bookPageContext.bookFilters;
        if (filters.length >= 0) {

            const filterLanguages = languages.map((item) => {
                const matchingLanguage = filters.find((filterItem) => filterItem.name === item.name);
                return matchingLanguage ? item : { ...item, check: false };
            })
            const filterCategories = categories.map((item) => {
                const matchingCategory = filters.find((filterItem) => filterItem.name === item.name);
                return matchingCategory ? item : { ...item, check: false };
            })
            setCategories([...filterCategories])
            setLanguages([...filterLanguages])
        }

    }, [context.bookPageContext.bookFilters])

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
                                <div className="flex gap-2" key={category.id}>
                                    <input type="checkbox" checked={category.check} value={category.name} onClick={handelCategory} />
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
                        languages.map((language) => {
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
                    max={500}
                    minVal={minVal}
                    maxVal={maxVal}
                    setMinVal={setMinVal}
                    setMaxVal={setMaxVal}
                    onChange={({ min, max }) => { }}

                />
            </div>
            <div className="flex justify-between w-full pt-4">
                <Button
                    variant="outlined"
                    size="extra-small"
                    onClick={resetAllFilters}
                >Reset</Button>
                <Button
                    variant="contained"
                    size="extra-small"
                    onClick={applyFilter}
                >Apply</Button>
            </div>
        </div>
    )
}
export default FilterSection;