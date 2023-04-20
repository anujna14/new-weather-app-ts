import { createContext } from "react";
import { useState } from "react";
import { SearchContextType, ChildrenPropType } from "../types/WeatherTypes";

export const SearchContext = createContext<SearchContextType | null>({
  searchedValue: "",
  handleSearchedValue: (searchVal: string) => {},
});

const SearchContextProvider = ({ children }: ChildrenPropType) => {
  const [searchedValue, setsearchedValue] = useState<string>("");

  const handleSearchedValue = (searchVal: string) => {
    console.log("searchVal", searchVal);
    setsearchedValue(searchVal);
  };
  return <SearchContext.Provider value={{ searchedValue, handleSearchedValue }}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
