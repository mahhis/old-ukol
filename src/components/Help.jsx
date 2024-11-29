import "/src/css/Help.css"
import SliderBox from "./SliderBox";
//import OurService from "./OurService";


export default function Help() {
    
    return (
        <section className="help" id="service-help">    

            <h1 className="help-heading">Вот с чем мы <br/>можем помочь</h1>

            <SliderBox />
            {/* <OurService /> */}

            {/* <ButtonWA text="бесплатная консультация" /> */}
        </section>
    );
}
