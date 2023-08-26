import { ChangeEventHandler, useCallback } from "react";
import { fetchJokes } from "../../store/jokesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { total } = useAppSelector((state) => state.jokes);
  const inputRef = useCallback((element: HTMLInputElement) => {
    if (element) {
      element.focus();
    }
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { target } = e;
    if (target.value.length < 3) {
      return;
    }
    dispatch(fetchJokes(target.value));
  };

  return (
    <div className="mx-auto w-full px-6 md:pb-[60px] md:w-[626px] ">
      <input
        className="outline-none w-full py-[19px] px-9 shadow-xl text-[#656EC2] font-bold placeholder:text-[#656EC2] focus:placeholder:text-[#656ec28f]"
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Search jokes..."
        ref={inputRef}
        onChange={handleInputChange}
      />
      {total !== null && (
        <p className="font-montserrat mt-5 ml-9 leading-tight">
          Found jokes:
          {" "}
          {total}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
