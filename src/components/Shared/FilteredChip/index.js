import React from "react";
import icons from "../../../assets/icons/icons";
import { filterContext } from "../../AllBooksPage/BooksListing";
import { useContext } from "react";

const FilteredChip = ({ name }) => {
    const selectedFilters = useContext(filterContext);
    console.log(selectedFilters.choice)

    const removeChip = (removeItem) => {

        const index = selectedFilters.choice.findIndex((item) => item.name === removeItem);
        selectedFilters.choice.splice(index, 1);
        selectedFilters.setChoice((prev) => prev?.name !== removeItem)
        selectedFilters.setChoice([...selectedFilters.choice]);

        //filter the categories which left after removel
        const filteredCategories = selectedFilters.categories.map((item) => {
            if (item.name === removeItem) {
                return {
                    ...item,
                    check: false,
                }
            }
            else {
                return item;
            }
        });
        selectedFilters.setCategories([...filteredCategories]);

        //filtered the language which are left after removal
        const filteredLanguages = selectedFilters.languages.map((item) => {
            if (item.name === removeItem) {
                return {
                    ...item,
                    check: false,
                }
            }
            else {
                return item;
            }
        });
        console.log(filteredLanguages);
        selectedFilters.setLanguages([...filteredLanguages]);
    }

    return (
        <div className="flex justify-center items-center gap-2 bg-chipColor w-auto p-2 rounded-full mb-3 lg:mb-0">
            <p className="text-sm text-textLightWhiteColor text-nowrap">{name}</p>
            <button className="flex justify-center items-center h-6 w-6 sm:h-8 sm:w-8 bg-secondaryColor rounded-full" onClick={() => removeChip(name)}><img src={icons.cross} al className="w-3 h-3" /></button>
        </div>
    )
}

export default FilteredChip;