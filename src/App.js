import React, { useState } from 'react';
import './App.css';

// Main App component
const App = () => {
  // State to manage if the dropdown is open
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // State to manage the selected status
  const [selectedStatus, setSelectedStatus] = useState({
    label: 'Status',
    color: '',
    icon: null
  });

  // List of status options with label, color, and icon
  const statusOptions = [
    { label: 'Todo', color: '#f3e5f5', icon: <TodoIcon /> },
    { label: 'In-Progress', color: '#e3f2fd', icon: <InProgressIcon /> },
    { label: 'Completed', color: '#e8f5e9', icon: <CompletedIcon /> },
    { label: 'Cancelled', color: '#ffebee', icon: <CancelledIcon /> },
  ];

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to handle the selection of a status
  const handleSelectStatus = (option) => {
    setSelectedStatus(option);
    setDropdownOpen(false);
  };

  return (
    <div className="main-layout">
      {/* Left dialog section */}
      <div className="left-dialog">
        <div className="heading">
          <span className="status-heading">status</span>
        </div>
        {/* Render status icons */}
        {statusOptions.map((option, index) => (
          <div key={index} className="status-icon-wrapper" style={{ backgroundColor: option.color }}>
            {option.icon}
          </div>
        ))}
      </div>
      {/* Right dialog section */}
      <div className="right-dialog">
        <div className="heading blue-heading">dropdown - status</div>
        {/* Status bar that toggles the dropdown */}
        <div className="status-bar" onClick={toggleDropdown}>
          <div className="status-icon-wrapper" style={{ backgroundColor: selectedStatus.color }}>
            {selectedStatus.icon}
          </div>
          <span className="label">{selectedStatus.label}</span>
        </div>
        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="dropdown-container">
            <div className="dropdown">
              <ul className="dropdown-list">
                {statusOptions.map((option, index) => (
                  <li key={index} className="dropdown-item" onClick={() => handleSelectStatus(option)}>
                    <div className="icon" style={{ backgroundColor: option.color }}>
                      {option.icon}
                    </div>
                    <span className="label">{option.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Icons for each status option
const TodoIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#9c27b0" strokeWidth="2" strokeDasharray="2,2" />
    <circle cx="12" cy="12" r="4" fill="#9c27b0" />
  </svg>
);

const InProgressIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#42a5f5" strokeWidth="2" strokeDasharray="2,2" />
    <path d="M12 2 a10 10 0 0 1 0 20 a10 10 0 0 1 0 -20" fill="#42a5f5" />
  </svg>
);

const CompletedIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#66bb6a" strokeWidth="2" strokeDasharray="2,2" />
    <path d="M9 12 l2 2 l4 -4" stroke="#66bb6a" strokeWidth="2" fill="none" />
  </svg>
);

const CancelledIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#ef5350" strokeWidth="2" strokeDasharray="2,2" />
    <line x1="8" y1="8" x2="16" y2="16" stroke="#ef5350" strokeWidth="2" />
    <line x1="16" y1="8" x2="8" y2="16" stroke="#ef5350" strokeWidth="2" />
  </svg>
);

export default App;
