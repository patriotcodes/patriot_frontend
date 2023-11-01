// OfficerSearch.js

import React, { useState } from 'react';

const OfficerSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const dummyData = [
    { id: 1, firstName: 'John', lastName: 'Doe', badgeNumber: '1234' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', badgeNumber: '5678' },
    // Add more dummy data as needed
  ];

  const handleSearch = () => {
    // Perform a search using the searchQuery and dummyData
    const results = dummyData.filter((officer) =>
      `${officer.firstName} ${officer.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first or last name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">
              X
            </button>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map((officer) => (
                <li key={officer.id}>
                  {officer.firstName} {officer.lastName} - Badge Number:{' '}
                  {officer.badgeNumber}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

<style jsx>{`
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8); /* Dark gray with 80% transparency */
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: white; /* Text color for dark theme */
  }

  .popup-content {
    text-align: center;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: white; /* Text color for close button in dark theme */
  }
`}</style>


      
    </div>
  );
};

export default OfficerSearch;
