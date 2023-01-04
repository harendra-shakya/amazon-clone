import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gray-to-t from-gray-100 to-transparent bottom-0" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="images/banner/newyear_banner.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="images/banner/laptop_banner.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="images/banner/products_banner.jpg" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="images/banner/games_banner.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="images/banner/home_essentials_banner.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="images/banner/beauty_banner.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
}
