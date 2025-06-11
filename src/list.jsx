import React, { useState } from 'react';

const List = ({ items, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const hymnList = Object.entries(items);

  // Search will now match title or number (1-based index)
  const filteredList = hymnList
    .map(([key, item], index) => ({
      key,
      item,
      number: index + 1 // keep the display number
    }))
    .filter(({ item, number }) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      number.toString().includes(searchTerm.trim())
    );

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="searchTitles" className="block font-medium">
          Search Hymns
        </label>
        <input
          type="text"
          id="searchTitles"
          name="searchTitles"
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type a hymn title"
        />
      </div>

      <div aria-live="assertive" className="text-sm text-gray-700" aria-atomic="true">
        {filteredList.length === 0 ? (
          <p>No hymns found.</p>
        ) : (
          <p>{filteredList.length} result{filteredList.length !== 1 && 's'} found</p>
        )}
      </div>

      <ul className="space-y-2" type="none">
        {filteredList.map(({ key, item, number }) => (
          <li key={key}>
            <button
              onClick={() => onSelect(item)}
              className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="font-semibold mr-2 text-gray-500"> {number}. </span> 
              {item.title} 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
