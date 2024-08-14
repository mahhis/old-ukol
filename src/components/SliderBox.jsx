import "/src/css/SliderBox.css"
import SyringeIcon from "/src/assets/syringe-icon.svg";
import DropletIcon from '/src/assets/droplet-icon.svg';
import BedIcon from '/src/assets/bed-solid.svg';
import UtensilsIcon from '/src/assets/utensils-solid.svg';
import StethoscopeIcon from '/src/assets/stethoscope-solid.svg';
import UserAltIcon from '/src/assets/user-alt-solid.svg';
import HandHoldingHeartIcon from '/src/assets/hand-holding-heart-solid.svg';
import CocktailIcon from '/src/assets/cocktail-solid.svg';
import PillsIcon from '/src/assets/pills-solid.svg';
import BandAidIcon from '/src/assets/bandage-solid.svg';

export default function SliderBox() {

    const serviceDescriptions = [
        {
            title: "Уколы на дому",
            description: "Удобные и безопасные инъекции прямо у вас дома.",
            icon: SyringeIcon
        },
        {
            title: "Капельницы на дому",
            description: "Эффективное лечение капельницами в уютной домашней обстановке.",
            icon: DropletIcon
        },
        {
            title: "Удобство и комфорт",
            description: "Ваше здоровье в центре внимания.",
            icon: BedIcon
        },
        {
            title: "Пищевые отравления",
            description: "Быстрая помощь при пищевых отравлениях.",
            icon: UtensilsIcon
        },
        {
            title: "Желудочные зонды",
            description: "Профессиональное введение желудочных зондов.",
            icon: StethoscopeIcon
        },
        {
            title: "Уход за пожилыми на дому",
            description: "Чуткий и заботливый уход за пожилыми людьми.",
            icon: UserAltIcon
        },
        {
            title: "Бережные процедуры",
            description: "Аккуратный и безопасный уход.",
            icon: HandHoldingHeartIcon
        },
        {
            title: "Коктейли",
            description: "Золушка (Синдерелла), Коктейли для Спортсменов, Лаеннек (Laennec) — Плацентарная терапия",
            icon: CocktailIcon
        },
        {
            title: "Вывод из запоя на дому",
            description: "Капельница от интоксикации, Детокс терапия, Дезинтоксикация",
            icon: PillsIcon
        },
        {
            title: "Перевязки",
            description: "Качественные перевязочные процедуры.",
            icon: BandAidIcon
        }
    ];


  return (
    <div className="slider-box">
            {serviceDescriptions.map((service, index) => (
                <div className="slider-topic" key={index}>
                    <img className="slider-icon" src={service.icon} alt={service.title} />
                    <h2 className="slider-heading">{service.title}</h2>
                    <p className="slider-text">{service.description}</p>
                </div>
            ))}
        </div>
    );
}
