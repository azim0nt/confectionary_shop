import './style.scss'
import reviewsJSON from '../../db/reviews.json'
import CarouselComponent from '../common/CarouselComponent'
function Reviews() {

    return (
        <>
            <div className="reviews-wrapper">
                <div className="reviews">
                    
                        <CarouselComponent>
                        {
                            reviewsJSON.map((item, index) => (
                                <div className="review" key={index}>
                                    <div className="body">
                                        <div className="top">
                                            <p className="bold-text">
                                                «{item.title}»
                                            </p>
                                        </div>

                                        <div className='bottom'>
                                            <p className="small-text">
                                                {item.reviews}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </CarouselComponent>


                </div>
            </div>
                        
        </>
    );
}

export default Reviews;