import "./Testimonials.scss";

function Testimonials({testimonials}) {
    return (
        <div className="row testimonials">
            <div className="three columns">
                <h1>
                    <span className="option_span">Testimonials</span>
                </h1>
            </div>

            <div className="nine columns">

                {testimonials?.map((testimonial, index) => {
                    return (
                        <div className="testimonial">
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
                }) }

            </div>

        </div>
    )
}

export default Testimonials
