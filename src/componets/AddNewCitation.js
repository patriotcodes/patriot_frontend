import React, { useState } from 'react';

const AddNewCitation = () => {
  const [isNewCitationPopupVisible, setNewCitationPopupVisible] = useState(false);

  const showNewCitationPopup = () => {
    setNewCitationPopupVisible(true);
  };

  const closeNewCitationPopup = () => {
    setNewCitationPopupVisible(false);
  };

  return (
    <div>
      <button onClick={showNewCitationPopup}>Add New Citation</button>

      {isNewCitationPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={closeNewCitationPopup} className="close-button">
              X
            </button>
            <h2>Add New Citation:</h2>
            <form>
              <input type="text" placeholder="Citation Type" />
              <input type="text" placeholder="Description" />
              <input type="text" placeholder="Fine Amount" />
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

export default AddNewCitation;
