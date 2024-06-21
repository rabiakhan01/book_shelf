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
    const [languages, setLanguages] = useState(languagesData);
    const min = Math.min(...allBooksData.map((item) => item.new_price));
    const max = Math.max(...allBooksData.map((item) => item.new_price))
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

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

    // console.log("filter listing", context.bookPageContext.bookListing)
    const applyFilter = () => {


        const filterData = [];
        const filterLanguageData = [];
        const filterCategoryData = [];

        const selectedCategory = categories.filter((item) => item.check);
        const selectedLanguage = languages.filter((item) => item.check);
        const selectedFilters = selectedCategory.concat(selectedLanguage)
        const selectedPrice = {
            minPrice: minVal,
            maxPrice: maxVal,
        }
        let filters;

        if (minVal > min || maxVal < max) {
            filters = { ...context.bookPageContext, bookFilters: [...selectedFilters, { ...selectedPrice }] }
        }
        else {
            filters = { ...context.bookPageContext, bookFilters: [...selectedFilters] }

        }
        const filterLanguages = languages.map((item) => {
            const matchingLanguage = filters.bookFilters.find((filterItem) => filterItem.name === item.name);
            if (matchingLanguage) {
                return matchingLanguage
            }

        }).filter((r) => r !== undefined);

        const filterCategories = categories.map((item) => {
            const matchingCategory = filters.bookFilters.find((filterItem) => filterItem.name === item.name);
            if (matchingCategory) {
                return matchingCategory
            }

        }).filter((r) => r !== undefined);

        if (selectedCategory.length > 0 || selectedLanguage.length > 0 || minVal) {

            filterCategories.map(element => {
                allBooksData.filter((filterItem) => {
                    if (filterItem.category === element.name && filterItem.new_price > minVal && filterItem.new_price < maxVal) {
                        filterCategoryData.push(filterItem);
                    }
                })
            });
            filterLanguages.map(element => {
                allBooksData.filter((filterItem) => {
                    if (filterItem.language === element.name && filterItem.new_price > minVal && filterItem.new_price < maxVal) {
                        filterLanguageData.push(filterItem);
                    }
                })
            });

            if (filterLanguages.length > 0 && filterCategories.length > 0) {
                filterLanguages.map((item) => {
                    filterCategoryData.filter((filterItem) => {
                        if (filterItem.language === item.name && filterItem.new_price > minVal && filterItem.new_price < maxVal) {
                            filterData.push(filterItem);
                        }
                    })
                });
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: filters.bookFilters, bookListing: filterData });
            }

            else if (filterLanguages.length > 0) {
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: filters.bookFilters, bookListing: filterLanguageData });
            }

            else if (filterCategories.length > 0) {
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: filters.bookFilters, bookListing: filterCategoryData });
            }
            else {
                context.bookPageContext.bookListing.map((item) => {
                    if (item.new_price > minVal && item.new_price < maxVal) {
                        filterData.push(item);
                    }
                })
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: filters.bookFilters, bookListing: filterData });
            }
        }

        else {
            context.setBookPageContext({ bookFilters: [], bookListing: allBooksData })
        }

        // console.log("🚀 ~ applyFilter ~ filters:", filters)
    }

    const resetAllFilters = () => {
        context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: allBooksData });
        setMinVal(min);
        setMaxVal(max);
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
        const findPriceFilter = filters.find((item) => item?.minPrice || item?.maxPrice);
        if (!findPriceFilter) {
            setMinVal(min);
            setMaxVal(max);
            //context.setBookPageContext({ ...context.bookPageContext, bookListing: allBooksData })
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
                                    <input type="checkbox" checked={category.check} value={category.name} onChange={handelCategory} onClick={handelCategory} disabled={context.searchTrigger ? true : false} />
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
                                    <input type="checkbox" checked={language.check} value={language.name} onChange={handelLanguage} disabled={context.searchTrigger ? true : false} />
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
                    min={min}
                    max={max}
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
                    color="errorColor"
                    onClick={resetAllFilters}
                    disabled={context.searchTrigger ? true : false}
                >Reset</Button>
                <Button
                    variant="contained"
                    size="extra-small"
                    onClick={applyFilter}
                    disabled={context.searchTrigger ? true : false}
                >Apply</Button>
            </div>
        </div>
    )
}
export default FilterSection;