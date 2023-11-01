import React, { useState, useRef } from 'react';

const CurrentCallsTable = () => {
  const [isTableVisible, setTableVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const callsPerPage = 10;
  const draggableRef = useRef(null);

  // 30 dummy calls
  const dummyCalls = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    callType: `Call Type ${index + 1}`,
    description: `Description ${index + 1}`,
    location: `Location ${index + 1}`,
  }));

  // Pagination logic
  const indexOfLastCall = currentPage * callsPerPage;
  const indexOfFirstCall = indexOfLastCall - callsPerPage;
  const currentCalls = dummyCalls.slice(indexOfFirstCall, indexOfLastCall);

  const totalPages = Math.ceil(dummyCalls.length / callsPerPage);

  const toggleTableVisibility = () => {
    console.log('Toggling table visibility to:', !isTableVisible);
    setTableVisible(!isTableVisible);
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', draggableRef.current.style.left + ',' + draggableRef.current.style.top);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const [left, top] = e.dataTransfer.getData('text/plain').split(',');
    draggableRef.current.style.left = `${parseInt(left, 10) + e.clientX}px`;
    draggableRef.current.style.top = `${parseInt(top, 10) + e.clientY}px`;
  };

  console.log('Current table visibility state:', isTableVisible);

  return (
    <div className='container'>
      <button className='toggle-button' onClick={toggleTableVisibility}>View Current Calls</button>

      {isTableVisible && (
        <div
          ref={draggableRef}
          draggable="true"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          className='draggable-table'
        >
          {/* Your table code here */}
        </div>
      )}

      <style jsx>{`
        .container {
          background-color: #333;
          color: #fff;
        }

        .toggle-button {
          background-color: #444;
          color: #fff;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .draggable-table {
          position: absolute;
          background-color: #555;
          color: #fff;
          cursor: grab;
        }
      `}</style>
    </div>
  );
};

export default CurrentCallsTable;