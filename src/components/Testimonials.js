import React, {useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./testimonials.css";
import { Carousel } from 'react-responsive-carousel';
import Data from "../data/data.json";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(Data.testimonials);
    return (
        <>
            <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4100}
            >
            {
                testimonials.map((data) => (
                    <div key={data.id}>
                        <img src={data.image} />
                        <div className="myCarousel">
                            <h3>{data.name}</h3>
                            <h4>{data.job}</h4>
                            <p>{data.message}</p>
                        </div>
                    </div>
                    )
                )
            }
            </Carousel>
        </>
    )
}

export default Testimonials;