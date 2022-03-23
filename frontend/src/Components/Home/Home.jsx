import React from "react";
import styled from "styled-components";
import LeergeldFoto from "../../Assets/Images/leergeld_foto1.jpg";
import LeergeldFoto2 from "../../Assets/Images/leergeld_foto2.jpg";
import LeergeldFoto3 from "../../Assets/Images/leergeld_foto3.jpg";
import LeergeldFoto4 from "../../Assets/Images/leergeld_foto4.jpg";
import Samen from "../../Assets/Images/sam&.png";
import Postcode from "../../Assets/Images/postcodeloterij.png";
import Grumor from "../../Assets/Images/grumor.png";
import Jumbo from "../../Assets/Images/jumbo.png";
import Puma from "../../Assets/Images/puma.png";
import Acer from "../../Assets/Images/acer.png";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Mockdata = 
[
    {name: "Sam&", body: "Leergeld Nederland is onderdeel van Samen voor alle kinderen (Sam&)", img: Samen},
    {name: "Postcode loterij", body: "Leergeld Nederland wordt gesteund door", img: Postcode},
    {name: "Grumor in groep 8", body: "Leergeld Nederland en Paul van Loon hebben een groep 8 musical gemaakt: Grumor in groep 8, de griezèlligste groep 8 musical voor scholen met lef!", img: Grumor},
    {name: "Jumbo", body: "Leergeld Nederland wordt gesteund door", img: Jumbo},
    {name: "Puma", body: "Leergeld Nederland wordt gesteund door", img: Puma},
    {name: "Acer", body: "Leergeld Nederland wordt gesteund door", img: Acer},
]

const Home = () => {
    return(
        <Container>
            <Carousel autoPlay="true" showThumbs={false} infiniteLoop="true">
                <ImgContainer>
                    <Img src={LeergeldFoto} alt="" />
                </ImgContainer>
                <ImgContainer>
                    <Img src={LeergeldFoto2} alt="" />
                </ImgContainer>
                <ImgContainer>
                    <Img src={LeergeldFoto3} alt="" />
                </ImgContainer>
                <ImgContainer>
                    <Img src={LeergeldFoto4} alt="" />
                </ImgContainer>
            </Carousel>
            <br></br>
            <HomeMainTextContainer>
                    <h1>Wilt u ons helpen?</h1>
                    <MainTekstContainer>
                        <Tekst>
                            In Nederland leeft 1 op de 12 kinderen in armoede. Deze kinderen kunnen om financiële redenen niet meedoen aan activiteiten die voor hun leeftijdsgenootjes heel normaal zijn. Zij staan vaak letterlijk aan de zijlijn. Leergeld wil deze kinderen mee laten doen!
                            <br></br>
                            <hr></hr>
                            Via 111 lokale Leergeld stichtingen, die samen actief zijn in 75% van alle Nederlandse gemeenten, biedt zij deze kinderen kansen om te kunnen deelnemen aan binnen- en buitenschoolse activiteiten. Leergeld biedt hen hiermee een springplank, waardoor zij opbloeien, kennis en vaardigheden ontwikkelen en eigenwaarde krijgen.
                            <br></br>
                            <br></br>
                            Klik <a href="#" style={{color: "red"}}>HIER</a>  voor een lokale Leergeld stichting bij u in de buurt!
                        </Tekst>
                        <div>

                        </div>
                    </MainTekstContainer>
            </HomeMainTextContainer>
            <br></br>
            <HomeMainTextContainer>
                <h1>Onze sponsors!</h1>
                <SponsorsMainContainer>
                    {
                        Mockdata.map(data => (
                            <SponsorContainer>
                                <h3>{data.name}</h3>
                                <p>{data.body}</p>
                                <SponsorImage src={data.img}/>
                            </SponsorContainer>
                        ))
                    }
                </SponsorsMainContainer>
            </HomeMainTextContainer>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    padding:0 20px;
`;

const Img = styled.img`
    width: 100%;
`;

const ImgContainer = styled.div`
    width:100%;
    height: 600px;
    overflow: hidden;
`;

const HomeMainTextContainer = styled.div`
    color: ${props=>props.theme.colors? props.theme.colors.Danger:"black"};
`;

const MainTekstContainer = styled.div`
    
`;

const Tekst = styled.div`
    width: 50%;
    font-size: 1.125rem;
    color: #571089;    
`;

const SponsorsMainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 150px;
`;

const SponsorContainer = styled.div`
    color: #571089;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center; 
    width: 25%;
`;

const SponsorImage = styled.img`
    width: 100%;
`;