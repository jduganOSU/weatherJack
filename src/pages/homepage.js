import React, { useState } from 'react';

function Homepage() {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  // Handles changes for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handles address submission
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    alert(`Address: ${formData.street}, ${formData.city}, ${formData.state}`);
  };

  // Handles ZIP code submission with validation for 5 digits
  const handleZipSubmit = (e) => {
    e.preventDefault();
    if (/^\d{5}$/.test(formData.zip)) {
      alert(`ZIP Code: ${formData.zip}`);
    } else {
      alert('Please enter a valid 5-digit ZIP code.');
    }
  };

  return (
    <div className="homepage-container">
      <header>
        <h1>Welcome to WeatherJack!</h1>
      </header>
      <p>
        WeatherJack is a site that allows you, the user, to instantly find the 
        current weather for any location in the US! Simply type in your address below and hit submit, 
        or just enter your ZIP code at the bottom if you prefer.
      </p>
      <form onSubmit={handleAddressSubmit}>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit Address</button>
      </form>
      <p>Or, if you'd rather just use your ZIP code:</p>
      <form onSubmit={handleZipSubmit}>
        <label>
          ZIP Code:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit ZIP Code</button>
      </form>
    </div>
  );
}

export default Homepage;
