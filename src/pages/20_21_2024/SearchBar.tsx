//10. Build a search bar that filters and displays a list of items as the user types.

import { useState } from "react";

const list = [
  "ashna",
  "ahammed",
  "ashwin",
  "clarence",
  "apple",
  "orange",
  "ball",
  "strawberry",
  "caber",
  "mulberry",
  "tomato",
  "tam",
];

const SearchBar = () => {
  const [search, setSearch] = useState("");

  // Filtered list based on the search term
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Search Bar</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-full p-2 border rounded-md mb-4"
      />
      <ul className="list-disc pl-5">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No items match your search.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
