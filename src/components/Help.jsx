import "/src/css/Help.css"
import ButtonWA from "./ButtonWA"
import SliderBox from "./SliderBox";

export default function Help() {
    
    return (
        <section className="help" id="service-help">    

            <h1 className="help-heading">Вот с чем мы <br/>можем помочь</h1>

            <SliderBox />

            <ButtonWA text="бесплатная консультация" />
        </section>
    );
}
