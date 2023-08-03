import React, { ChangeEvent, memo } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./search.scss";

function Search() {
  const { searchUser, clearSearch, fetchUsers } = useActions();
  const filter = useTypedSelector((state) => state.users.filter);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    searchUser(value);
  };

  const resetApp = () => {
    clearSearch();
    fetchUsers();
  };

  return (
    <>
      <input
        className="search"
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
      <button className="search_reset_button" onClick={resetApp}>
        Reset
      </button>
    </>
  );
}

export default memo(Search);
