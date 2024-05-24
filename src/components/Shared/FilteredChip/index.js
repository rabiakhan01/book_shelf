import React, { useContext } from "react";
import icons from "../../../assets/icons/icons";
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";

const FilteredChip = ({ name }) => {

    const context = useContext(bookListingContext);

    const removeFilter = (removeItem) => {

        const filterData = [];
        if (context.bookPageContext.bookFilters.length > 0) {
            const updatedFilter = context.bookPageContext.bookFilters.filter((item) => item.name !== removeItem)
            const filters = { ...context.bookPageContext, bookFilters: updatedFilter };
            filters.bookFilters.map(element => {
                allBooksData.filter((filterItem) => {
                    if (filterItem.category == element.name || filterItem.language == element.name) {
                        filterData.push(filterItem);
                    }
                })
            });
            context.setBookPageContext({ ...context.bookPageContext, bookFilters: updatedFilter, bookListing: filterData });
        }
        else {
            return;
        }
    }
    if (name) {
        return (
            <div className="flex justify-center items-center gap-2 bg-chipColor w-auto p-2 rounded-full mb-3 lg:mb-0">
                <p className="text-sm text-textLightWhiteColor text-nowrap">{name}</p>
                <button className="flex justify-center items-center h-6 w-6 sm:h-8 sm:w-8 bg-secondaryColor rounded-full" ><img src={icons.cross} className="w-3 h-3" onClick={() => removeFilter(name)} /></button>
            </div>
        )
    }
}

export default FilteredChip;