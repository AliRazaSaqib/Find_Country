import React, { Component } from "react";
import "./App.css";
//import { SearchField } from "./search/User/SearchField";
//import { GetCountryList } from "./search/User/GetCountryList";
const CountryList = [
  {
    name: "Afghanistan",
    code: "AF",
  },
  {
    name: "Åland Islands",
    code: "AX",
  },
  {
    name: "Albania",
    code: "AL",
  },
  {
    name: "Algeria",
    code: "DZ",
  },
  {
    name: "American Samoa",
    code: "AS",
  },
  {
    name: "AndorrA",
    code: "AD",
  },
  {
    name: "Angola",
    code: "AO",
  },
  {
    name: "Pakistan",
    code: "PAK",
  },
  {
    name: "America",
    code: "AMK",
  },
  {
    name: "HongKong",
    code: "HON",
  },
  {
    name: "Barbados",
    code: "BB",
  },
  {
    name: "Belarus",
    code: "BY",
  },
  {
    name: "Belgium",
    code: "BE",
  },
  {
    name: "Belize",
    code: "BZ",
  },
  {
    name: "Benin",
    code: "BJ",
  },
  {
    name: "Bermuda",
    code: "BM",
  },
  {
    name: "Bhutan",
    code: "BT",
  },
  {
    name: "Bolivia",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
  },
  {
    name: "Botswana",
    code: "BW",
  },
  {
    name: "Bouvet Island",
    code: "BV",
  },
  {
    name: "Brazil",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
  },
  {
    name: "Bulgaria",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    code: "BF",
  },
  {
    name: "Burundi",
    code: "BI",
  },
  {
    name: "Cambodia",
    code: "KH",
  },
  {
    name: "Cameroon",
    code: "CM",
  },
  {
    name: "Canada",
    code: "CA",
  },
  {
    name: "Cape Verde",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    code: "KY",
  },
  {
    name: "Central African Republic",
    code: "CF",
  },
  {
    name: "Chad",
    code: "TD",
  },
  {
    name: "Chile",
    code: "CL",
  },
  {
    name: "China",
    code: "CN",
  },
  {
    name: "Christmas Island",
    code: "CX",
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = CountryList.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div className="arrange">
          <ul>
            <li className="list">
              <span className="listItems">{data.name}</span>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="Enter Any Country Name"
          className="addStyle"
          onChange={(e) => this.searchSpace(e)}
        />
        {items}
      </div>
    );
  }
}

export default App;
