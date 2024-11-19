import {  useLocation } from "react-router-dom";
import "/src/css/Button.css";

export default function Button({ text }) {
  const location = useLocation();

  const handleClick = () => {
    // Check if the current path matches '/order'
    if (location.pathname === "/order") {
      // Stay on '/order' or do nothing
      return;
    }
    try {
      // Redirect to the order page
      window.location.href = "https://test.ukol.kz/order"; 
    } catch (error) {
      console.error('Error navigating:', error);
      // Fallback to the full URL if React Router navigation fails
    
    }
  };

  return (
    <button onClick={handleClick} className="main-button">
      {/* <img className="button-icon" src={icon} alt="whatsapp-icon" /> */}
      <h1 className="button-text">{text}</h1>
    </button>
  );
}
