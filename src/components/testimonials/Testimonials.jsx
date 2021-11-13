import Carousel from "react-elastic-carousel";
import "./Testimonials.scss";

function Testimonials({ testimonials }) {
    return (
        <div className="row testimonials">
            <div className="three columns">
                <h1>
                    <span className="option_span">Testimonials</span>
                </h1>
            </div>

            <div className="nine columns">
                <Carousel className="testimonial__carousel">
                    {testimonials?.map((testimonial, index) => {
                        return (
                            <div key={index} className="testimonial">
                                <h5 className="testimonial__description">
                                    {testimonial.description}
                                </h5>
                                <div className="author__container">

                                    <div className="author__info">
                                        <p className="author__name">
                                            {testimonial.name}
                                        </p>
                                        <p className="author__ocupation">
                                            {testimonial.ocupation}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </Carousel>

            </div>

        </div>
    )
}

export default Testimonials
