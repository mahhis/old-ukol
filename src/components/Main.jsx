import Navbar from "./Navbar"
import "/src/css/Main.css"
import Button from "./Button"
import mainImg from "/src/assets/main-img.png"
import MobileNav from "./MobileNav"

export default function Main() {

  return (

    <section>
      <div className="main-navigation">
        <Navbar />
        <div className="container">
          <main>
              <div className="main-text">
                <h1 className="main-heading">Ukol.kz <br/> это медицина <br/> на дом!</h1>
                <p className="main-subtext">
                  Мы предоставляем квалифицированные <br/> медицинские услуги с выездом на дом! <br/>
                  Стаж наших специалистов свыше 7 лет. <br/>  
                  Доверьте свое здоровье настоящим <br/> профессионалам, вам не нужно никуда <br/> ехать!
                </p>
                <Button text = "нажмите на меня для заказа" />
              </div>

              <img className="main-img" src={mainImg} alt="main-image" />

          </main>
        </div>
      </div>

      <MobileNav />

    </section>
  )
}
