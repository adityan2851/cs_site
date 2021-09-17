import React, {useState, useEffect} from 'react'
import VisionAndMission from '../../components/visionAndMission';
import Footer from '../../components/footer';
import { silderInfo } from './Data'
import wireSVG from '../../../public/images/wire.svg'
import Shapes from './Shapes'
import Carousel from 'react-bootstrap/Carousel'


const HomePage = () => {

    
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    let mobDesign = isMobile ? "flex-column" : "flex-row-reverse";

    const sliderContentItems = silderInfo.map((obj, index) => 
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={obj['imageURL']}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{obj['heading']}</h3>
                    <p>{obj['content']}</p>
                    </Carousel.Caption>
                </Carousel.Item>
    )

    const wireStyle = {
        position: "absolute",
        left: "0",
        right: "0",
        top: "30vh"
    }
    return (
        <div>
            <main>
            <section style={{height: "100vh"}}>
            <div className= {`container d-flex ${mobDesign} justify-content-center align-items-center`} >
                <div className="container">
                    <Carousel className="carousel-dark" keyboard="true" nextLabel="" prevLabel="" pause="hover" wrap="true" variant="dark">
                    {sliderContentItems}
                    </Carousel>
                </div>
                <div className="container d-flex justify-content-center align-items-center" >
                <div className="container d-flex justify-content-center align-items-center" style={{textAlign: isMobile ? "center" : "left"}}>
                    {isMobile ? <></> : <Shapes />}
                    <h1>Providing the best in Computer Education Since 1995.</h1>
                </div>
                </div>
            </div>
            </section>

            {isMobile ? <></> : <div className="container" style={wireStyle}>
            <img src={wireSVG} alt="wireImage" width="100%" />
            </div>}
            

            <section style={{height: "100vh"}}>
            <div className= {`container d-flex ${mobDesign} justify-content-center align-items-center`}>
            <div className="container d-flex" style={{textAlign: "center"}}>
                {isMobile ? <></> : <Shapes />}
                    <h1>Watch our Testimonials</h1>
                </div>
                
                <div className="container">
                <iframe 
                    width={isMobile ? "100%": "800"} 
                    height="500" 
                    title="Youtube-Video"
                    src="https://www.youtube.com/embed/0Mh8KPg1xNU?autoplay=0&mute=1&loop=1&playlist=0Mh8KPg1xNU"
                ></iframe>
                </div>
            </div>
            </section>
        </main>
            <VisionAndMission />
            <Footer/>
        </div>
    )
}

export default HomePage;
