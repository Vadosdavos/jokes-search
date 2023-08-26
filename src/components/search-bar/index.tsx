import { useCallback } from "react";

type SearchBarProps = {
  itemsTotal: number;
};

const SearchBar = ({ itemsTotal }: SearchBarProps) => {
  const inputRef = useCallback((element: HTMLInputElement) => {
    if (element) {
      element.focus();
    }
  }, []);

  return (
    <div className="mx-auto w-full px-6 md:pb-[60px] md:w-[626px] ">
      <input
        className="outline-none w-full py-[19px] px-9 shadow-xl text-[#656EC2] font-bold placeholder:text-[#656EC2] focus:placeholder:text-[#656ec28f]"
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Search jokes..."
        ref={inputRef}
      />
      {!!itemsTotal && (
        <p className="font-montserrat mt-5 ml-9 leading-tight">
          Found jokes:
          {" "}
          {itemsTotal}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
