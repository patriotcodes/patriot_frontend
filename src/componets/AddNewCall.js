import React, { useState } from 'react';

const AddNewCall = () => {
  const [isNewCallPopupVisible, setNewCallPopupVisible] = useState(false);

  const showNewCallPopup = () => {
    setNewCallPopupVisible(true);
  };

  const closeNewCallPopup = () => {
    setNewCallPopupVisible(false);
  };

  return (
    <div>
      <button onClick={showNewCallPopup}>Add New Call</button>

      {isNewCallPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closeNewCallPopup} className="close-button">
              X
            </button>
            <h2>Add New Call:</h2>
            <form>
              <input type="text" placeholder="Call Type" />
              <input type="text" placeholder="Description" />
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

export default AddNewCall;
