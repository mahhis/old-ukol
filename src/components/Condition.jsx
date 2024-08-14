import "/src/css/Condition.css"
import Service from "./Service"
import conditionImg from "/src/assets/second.png"

export default function Condition() {

  const services = {
    0:{
      headingText : "БЫСТРЫЙ ВЫЕЗД",
      subText : "Можем отправить Вам хорошего опытного <br/> квалифицированного  специалиста <br/> минимум в течение 20 минут, максимум в <br/> течение 1 часа."
    },
    1:{
      headingText:"ОПЫТНЫЕ специалисты",
      subText:"У каждого специалиста есть все необходимые <br/> документы подтверждающие квалификацию. <br/> Имеются удостоверение личности, диплом и <br/> сертификат специалиста."
    },
    2:{
      headingText:"анонимность",
      subText:"Мы гарантируем конфиденциальность и <br/> анонимность личности/информации пациентов."
    }
  }

  return (
    <section id = "condition"> 
        <h1 className="condition-heading">Мы предлагаем <br/> ЛУЧШИЕ условия</h1>

        <div className="condition-info">
          <div className="info-service">
            {Object.values(services).map((value, index) => {
              return(
              <Service key = {index} headingText = {value.headingText} subText = {value.subText}/>
              )
            })}
          </div>

          <img src={conditionImg} alt= "" className="condition-image"/>
        </div>

    </section>
  )
}
