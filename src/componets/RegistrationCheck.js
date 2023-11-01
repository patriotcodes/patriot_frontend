import React, { useState } from 'react';

const RegistrationCheck = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const dummyData = [
    { id: 1, plateNumber: 'ABC123', owner: 'John Doe', registrationDate: '2023-01-15' },
    { id: 2, plateNumber: 'XYZ789', owner: 'Jane Smith', registrationDate: '2023-02-20' },
    // Add more dummy data as needed
  ];

  const handleSearch = () => {
    // Perform a search using the plateNumber and dummyData
    const results = dummyData.filter((record) =>
      record.plateNumber.toLowerCase() === plateNumber.toLowerCase()
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
        placeholder="Enter License Plate Number"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">
              X
            </button>
            <h2>Registration Check Results:</h2>
            <ul>
              {searchResults.map((record) => (
                <li key={record.id}>
                  License Plate: {record.plateNumber}<br />
                  Owner: {record.owner}<br />
                  Registration Date: {record.registrationDate}
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
          background: rgba(0, 0, 0, 0.8); /* Semi-transparent dark background */
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

export default RegistrationCheck;
