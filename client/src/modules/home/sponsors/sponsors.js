import React from "react"
import PropTypes from "prop-types"
import{Container,Title,Logo} from"./styles"
import Carousel ,{ autoplayPlugin, slidesToShowPlugin }from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

export default function Sponsors({ children}) {
    return <Container>{children}</Container>
}

Sponsors.propTypes = {
    children: PropTypes.array.isRequired
}

Sponsors.Title = function SponsorsTitle({children}) {
    return <Title>{children}</Title>
}

Sponsors.Title.propTypes = {
    children: PropTypes.array.isRequired
}

Sponsors.Logo = function SponsorsLogo({src, alt, width, scale}) {
    let props = {src, alt, width}
    if(!scale){ scale = 1}
    return <Logo scale={scale} {...props}/>
}

Sponsors.Logo.propTypes = {
    src: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    scale: PropTypes.number
}

Sponsors.Carousel = function SponsorsCarousel({children}){
    return(
        <Carousel
            plugins={[
                "infinite",
                {
                    resolve: slidesToShowPlugin,
                    options: { numberOfSlides: 6 }
                },
                {
                    resolve: autoplayPlugin,
                    options: { interval: 2000}
                }
            ]}
            animationSpeed={1700}
            itemWidth={240}
        >
            {children}
        </Carousel>
    )
}

Sponsors.Carousel.propTypes = {
    children: PropTypes.array.isRequired
}
