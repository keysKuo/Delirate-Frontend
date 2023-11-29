import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel({ items, ...props }) {
	return (
		<MDBCarousel {...props} showControls dark fade autoplay>
            {items.map((item, index) => {
                return (
                    <MDBCarouselItem
                        key={index}
                        className="w-100 d-block"
                        itemId={index}
                        src={item.url}
                        alt={item.alt}
                    ></MDBCarouselItem>
                )
            })}
		</MDBCarousel>
	);
}
