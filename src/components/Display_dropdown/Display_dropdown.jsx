import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Display_dropdown.css';

const Display_dropdown = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (event) => {
    // Do something with the selected option if needed
    const selectedOption = event.target.value;

    // Navigate to the corresponding route
    switch (selectedOption) {
      case 'option1':
        navigate('/by-state');
        break;
      case 'option2':
        navigate('/by-user');
        break;
      case 'option3':
        navigate('/by-priority');
        break;
      case 'optionA':
        navigate('/by-name');
        break;
      case 'optionB':
        navigate('/by-priority');
        break;
      default:
        // Handle default case
        break;
    }

    setDropdownOpen(false);  // Close the dropdown
  };

  return (
    <div>
      <div onClick={handleDropdownClick} className="dropdown-container">
        <span className="additional-text">Display 1</span>
        <span className="dropdown-arrow">&#9660;</span>
      </div>

      {isDropdownOpen && (
        <div className="your-div-class">
          <div className='innerdropdown'>
            <span>Grouping</span>
            <select onChange={handleOptionChange} value="">
              <option value="option1">State</option>
              <option value="option2">User</option>
              <option value="option3">Priority</option>
            </select>
          </div>

          <div className='innerdropdown'>
            <span>Ordering</span>
            <select onChange={handleOptionChange} value="">
              <option value="optionA">Name</option>
              <option value="optionB">Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display_dropdown;
