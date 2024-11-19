import { useNavigate, useLocation } from "react-router-dom";
import "/src/css/Button.css";

export default function Button({ text }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // Check if the current path matches '/order'
    if (location.pathname === "/order") {
      // Stay on '/order' or do nothing
      return;
    }
    try {
      navigate("/order");
    } catch {
      // Fallback to WhatsApp if navigation fails
      window.location.href =
        "https://api.whatsapp.com/send?phone=77027776776&text=Здравствуйте!%20Хочу%20вызвать%20медсестру%20на%20дом.";
    }
  };

  return (
    <button onClick={handleClick} className="main-button">
      {/* <img className="button-icon" src={icon} alt="whatsapp-icon" /> */}
      <h1 className="button-text">{text}</h1>
    </button>
  );
}