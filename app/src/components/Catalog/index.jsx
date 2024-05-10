import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.png';
import Image4 from '../../assets/images/4.png';
import Image5 from '../../assets/images/5.png';
import Image6 from '../../assets/images/6.png';
import Image7 from '../../assets/images/7.png';
import Image8 from '../../assets/images/8.png';
import Image9 from '../../assets/images/9.png';
import Berry from '../../assets/images/berry.png';
import CatalogItem from '../../db/data.json'
import { useState, useEffect} from 'react';
import './style.scss';
function Catalog() {
    
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];    
    return ( <>
        <div className="catalog-wrapper">
            <div className="title"><p>Для любых событий и дорогих вам людей </p></div>
            <div className="cards">
                {CatalogItem.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="top">
                        <img src={images[index]} alt={'image-'+index} width={'100%'} />
                        </div>
                        <div className="bottom">
                            <p id='bold-text'>{item.name}</p>
                        <p id='small-text'>{item.description}</p>
                        <p>{item.price} ₽/шт.</p>
                        <div>
                        <button className='yellow-button'>Заказать</button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
 );
}

export default Catalog;