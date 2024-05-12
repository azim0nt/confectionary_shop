import './style.scss';
import Cake1 from '../../assets/images/portfolio-images/cake1.png';
import Cake2 from '../../assets/images/portfolio-images/cake2.png';
import Cake3 from '../../assets/images/portfolio-images/cake3.png';
import Cake4 from '../../assets/images/portfolio-images/cake4.png';
import Cake5 from '../../assets/images/portfolio-images/cake5.png';
import Cake6 from '../../assets/images/portfolio-images/cake6.png';
import Cake7 from '../../assets/images/portfolio-images/cake7.png';
import Cake8 from '../../assets/images/portfolio-images/cake8.png';
import Cake9 from '../../assets/images/portfolio-images/cake9.png';

function Portfolio() {
    return ( <>
            <div className="portfolio-wrapper">
                <div className="portfolio">
                   <div className="header">
                    <p className="title">Сделали более 3.000 заказов за 2 года</p>
                    <p className="desc">Посмотрите фото реальных заказов из нашего instagram</p>
                </div>
                <div className="examples">
                    <img src={Cake1} alt="example-1"  />
                    <img src={Cake2} alt="example-2"  />
                    <img src={Cake3} alt="example-3"  />
                    <img src={Cake4} alt="example-4"  />
                    <img src={Cake5} alt="example-5"  />
                    <img src={Cake6} alt="example-6"  />
                    <img src={Cake7} alt="example-7"  />
                    <img src={Cake8} alt="example-8"  />
                    <img src={Cake9} alt="example-9"  />
                </div>  
                </div>
               
            </div>
    </> );
}

export default Portfolio;