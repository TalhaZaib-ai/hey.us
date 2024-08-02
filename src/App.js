import React, { useState } from 'react';
import './App.css';
import { IconCircle, IconLoader, IconCheck, IconX } from '@tabler/icons-react';

const App = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({
    label: 'Status',
    icon: null
  });

  const statusOptions = [
    { label: 'Todo', color: '#f3e5f5', icon: <IconCircle color="#9c27b0" size={24} stroke={2} /> },
    { label: 'In-Progress', color: '#e3f2fd', icon: <IconLoader color="#42a5f5" size={24} stroke={2} /> },
    { label: 'Completed', color: '#e8f5e9', icon: <IconCheck color="#66bb6a" size={24} stroke={2} /> },
    { label: 'Cancelled', color: '#ffebee', icon: <IconX color="#ef5350" size={24} stroke={2} /> },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelectStatus = (option) => {
    setSelectedStatus(option);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="main-layout">
      <div className="left-dialog">
        <div className="heading">
          <span className="status-heading">status</span>
        </div>
        {statusOptions.map((option, index) => (
          <div key={index} className="status-icon-wrapper" style={{ backgroundColor: option.color }}>
            {option.icon}
          </div>
        ))}
      </div>
      <div className="right-dialog">
        <div className="heading blue-heading">dropdown - status</div>
        <div className="status-bar" onClick={toggleDropdown}>
          <div className="status-icon-wrapper" style={{ backgroundColor: selectedStatus.color }}>
            {selectedStatus.icon}
          </div>
          <span className="label">{selectedStatus.label}</span>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-container">
            <div className="dropdown">
              <ul className="dropdown-list">
                <li className="dropdown-item header-item">
                  <span className="label header-label">Status</span>
                </li>
                {statusOptions.map((option, index) => (
                  <li key={index} className="dropdown-item" onClick={() => handleSelectStatus(option)}>
                    <div className="icon" style={{ backgroundColor: option.color }}>
                      {React.cloneElement(option.icon, { size: 24 })}
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

export default App;
