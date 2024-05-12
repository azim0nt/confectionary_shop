import './style.scss'
import Woman from '../../assets/images/woman.png'
function Consultation() {
    function goToPath(path) {
        const target = document.querySelector(path)
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className="consultation-wrapper">
                <div className="consultation">
                    <div className="left">
                        <div className='button1'>
                            <button className="white-button">Кто будет готовить?</button>
                        </div>
                        <p className="bold-text">
                            Лично приготовлю <br /> и всё красиво упакую <br /> для вашего события
                        </p>
                        <div className="list-text">
                            <ul>
                                <li>Проконсультирую по выбору капкейкови придумаю нестандартную идею</li>
                                <li>Приготовлю капкейки для вашего события, которые обязательно всем понравятся</li>
                                <li>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
                            </ul>
                        </div>
                        <div className="button2">
                            <button className="yellow-button" onClick={()=> goToPath('#contact')}>
                                Задать вопрос
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={Woman} width={'100%'} alt="" />
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consultation;