import React from "react";
import CountryList from "./CountryList";
import { SearchField } from "./SearchField";

const style = {};
const GetCountryList = () => {
  console.log(CountryList);
  return (
    <div style={style.list}>
      {CountryList.map((user) => {
        return (
          <div style={style.user} key={user.code}>
            <SearchField user={user} />
          </div>
        );
      })}
    </div>
  );
};
export { GetCountryList };
