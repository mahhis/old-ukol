import logo from "/src/assets/logo.png"
import "/src/css/Navbar.css"
import menu from "/src/assets/bars-solid.svg"
import {useNavigate} from "react-router-dom"

export default function Navbar(){  

  function handleNavigation(){
    document.querySelector('.main-navigation').style.display = 'none'
    document.querySelector('.mobile-navigation').style.display = "flex"
    document.querySelector('body').style.backgroundColor = "#FFFAF0"
    document.querySelector('.scroll-container').style.overflowY = 'hidden'
  }

  const navigate = useNavigate()

    return(
      <div className="nav-bar">
        <div className="container">
    
            <nav className="nav">
              <div className="logo-wrapper">
                <img src = {logo} alt="logo of company" className="logo"/>
                <h1 onClick={() => location.reload()} className="logo-text">ukol.kz</h1>
              </div>
    
              <ul className="links">
                <li><a className="link" href="#service-help">наши услуги</a></li>
                <li><a className="link" href="#condition">о нас</a></li>
                <li><a className="link" href="#reviews">отзывы</a></li>
                <li><a onClick = {(e) => {e.preventDefault(); window.alert("Данного сервиса не существует")}} className="link" href="#">медсестрам</a></li>
                <li><a onClick = {() => navigate("/certificate")} className="link" href="">сертификаты</a></li>
              </ul>

              <img className="menu-icon" src={menu} alt="" onClick={handleNavigation} />
    
            </nav>


        </div>
      </div>
    )
  }