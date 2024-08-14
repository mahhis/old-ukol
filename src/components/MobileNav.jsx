import "/src/css/MobileNav.css"
import closeImg from "/src/assets/xmark-solid.svg"
import {useNavigate} from "react-router-dom"

export default function MobileNav() {

  const navigate = useNavigate()

    function handleNavigation(){
        document.querySelector('.main-navigation').style.display = 'block'
        document.querySelector('.mobile-navigation').style.display = "none"
        document.querySelector('body').style.backgroundColor = "#F7F7F1"
        document.querySelector('.scroll-container').style.overflowY = 'scroll'
    }

  return (
    <nav className="mobile-navigation">

        <img onClick = {handleNavigation} src= {closeImg} alt="" />

        <ul className="mobile-links">
          <li><a onClick = {handleNavigation} className="link" href="#service-help">наши услуги</a></li>
          <li><a onClick = {handleNavigation} className="link" href="#condition">о нас</a></li>
          <li><a onClick = {handleNavigation} className="link" href="#reviews">отзывы</a></li>
          <li><a onClick = {(e) => {e.preventDefault(); alert("Данного сервиса не существует")}} className="link" href="#">медсестрам</a></li>
          <li><a onClick = {() => navigate("/certificate")} className="link" href="">сертификаты</a></li>
        </ul>
    </nav>
  )
}
