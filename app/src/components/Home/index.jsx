import './style.scss'
import Tag from '../../assets/icons/tag.svg'
import Phone from '../../assets/icons/phone.svg'
function Home() {
    function goToPath(path) {
        const target = document.querySelector(path)
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        })
    }
    return (<>
        <div className="home-wrapper">
            <div className="home">
                <header>
                    <div className="nav">
                        <div className="left">
                            <div id="title">Сладкий сундук</div>

                        </div>
                        <div className="right">
                            <div className="left-r">
                                <span><img src={Tag} alt="" />
                                    <p id='address'>
                                        г. Санкт Петербург, <br /> ул. Куйбышева 31
                                    </p>
                                </span>
                            </div>
                            <div className="right-r">
                                <span>
                                    <img src={Phone} alt="" />
                                    <p id='phone-number'>
                                        <span id='bold'><a href="tel:88128449549">8 (812) 844-95-49</a></span>
                                        <span id='work-time'>Ежедневно с 9:00 до 20:00</span>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="body">
                    <span>
                        <button className='white-button'>вкуснейшие</button>
                        </span>
                    <p id='bold-text'>Пирожные и капкейки <br /> от 150 ₽/шт. с доставкой <br /> по Санкт Петербургу</p>
                    <p id="small-text">
                        Приготовим за 3 часа в день заказа.  <br />
                        Доставка на авто в холодильнике.
                    </p>
                    <div id='button-and-text'>
                        <button className='yellow-button' onClick={()=>{goToPath('# catalog')}}>Перейти в каталог</button> <p>9 различных <br /> видов на выбор</p>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Home;