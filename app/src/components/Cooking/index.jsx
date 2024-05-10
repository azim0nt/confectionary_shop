import './style.scss'
import Fluid from '../../assets/images/fluid.png'
import PhoneInHand from '../../assets/images/phone-in-hand.png'
function Cooking(props) {
    return ( <>
    <div className="cooking-wrapper">
        <div className="body">
        <div className="left">
            <img src={PhoneInHand}  style={props.paralax} width={'90%'} alt="" />
        </div>
        <div className="right">
            <span><button className='white-button'>Не нашли то что нужно?</button></span>
            <p id="bold-text">
            Приготовим заказ <br /> любой сложности <br /> по фото или эскизу
            </p>
            <p id="small-text">
            Загрузите фотографию или эскиз капкейков <br /> и мы рассчитаем стоимость за 30 минут
            </p>
            <div><button className='yellow-button'>Заказать</button></div>
        </div>
        </div>
        <img src={Fluid} id='fluid' alt="" />
    </div>
    </> );
}

export default Cooking;