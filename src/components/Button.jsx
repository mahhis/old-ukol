import "/src/css/Button.css"

export default function Button({text}) {
  return (
    <button onClick={() => location = "https://api.whatsapp.com/send?phone=77027776776&text=Здравствуйте!%20Хочу%20вызвать%20медсестру%20на%20дом."} className="main-button">
        {/* <img className="button-icon" src={icon} alt="whatsapp-icon" /> */}
        <h1 className="button-text" >{text}</h1>
    </button>
  )
}
