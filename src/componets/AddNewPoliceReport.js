import React, { useState } from 'react';

const AddNewPoliceReport = () => {
  const [isNewReportPopupVisible, setNewReportPopupVisible] = useState(false);

  const showNewReportPopup = () => {
    setNewReportPopupVisible(true);
  };

  const closeNewReportPopup = () => {
    setNewReportPopupVisible(false);
  };

  return (
    <div>
      <button onClick={showNewReportPopup}>Add New Police Report</button>

      {isNewReportPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closeNewReportPopup} className="close-button">
              X
            </button>
            <h2>Add New Police Report:</h2>
            <form>
              <input type="text" placeholder="Report Type" />
              <input type="text" placeholder="Description" />
              <input type="text" placeholder="Location" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.8);
          padding: 20px;
          border: 1px solid #ccc;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          color: white;
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
          color: white;
        }
      `}</style>
    </div>
  );
};

export default AddNewPoliceReport;
