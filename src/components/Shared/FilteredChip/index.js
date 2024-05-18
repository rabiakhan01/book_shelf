import React from "react";
import icons from "../../../assets/icons/icons";
import { filterContext } from "../../AllBooksPage/BooksListing";
import { useContext } from "react";

const FilteredChip = ({ name }) => {
    const selectedFilters = useContext(filterContext);

    const removeChip = () => {
        // remove the chip from the filtered list
        // and update the filtered list state
        const updatedCategory = selectedFilters.categories.map((item) => {
            if (item.name === name) {
                return { ...item, check: false, }
            }
            else {
                return item;
            }
        });

        selectedFilters.setCategories([...updatedCategory]);
        const index = selectedFilters.choice.findIndex((item) => item.name === name);
        selectedFilters.choice.splice(index, 1);
        selectedFilters.setChoice([...selectedFilters.choice]);

    }


    return (
        <div className="flex justify-center items-center gap-2 bg-chipColor w-auto p-2 rounded-full">
            <p className="text-sm text-textLightWhiteColor text-nowrap">{name}</p>
            <button className="flex justify-center items-center h-8 w-8 bg-secondaryColor rounded-full" onClick={removeChip}><img src={icons.cross} al className="w-3 h-3" /></button>
        </div>
    )
}

export default FilteredChip;