import React from 'react'

const App = () => {
  const phoneNumber = '+1234567890'; // Replace with the desired phone number

  const handleDial = () => {
    // Using 'tel:' URI scheme to open the phone dialer
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="phone-dialer">
      <button className="btn btn-primary" onClick={handleDial}>
        Call Us
      </button>
    </div>
  )
}

export default App