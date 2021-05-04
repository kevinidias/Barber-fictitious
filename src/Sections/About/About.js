import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Container, AreaAbout, AreaImg, AreaImg2, AreaItems } from './About.Styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Items from '../../Components/AboutAreaItems/AreaItems';


import img2 from '../../Images/barber2.jpg';

import img3 from '../../Images/barber33.png';

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


function About() {
    return (
        <Container id='about'>
            <AreaAbout data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <div className='line'></div>
                <h1 className='aboutname'>Sobre a barbearia</h1>
                <h2 className='welcome'>Bem-vindo a barbearia</h2>
                <p className='textabout'>Focada em excelência, a Barbearia do Mário conta com tudo que o homem moderno precisa. Um ambiente confortável, descontraído e exclusivamente masculino, com cuidados para todos os estilos de barba e cabelo. Uma barbearia premium, para cuidar do visual.</p>
            </AreaAbout>
                
            <AreaImg data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                <img className='img2' alt='img2' src={img2} />
            </AreaImg>

            <AreaImg2 data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <img className="img3" alt="img3" src={img3} />
                <AreaItems>
                    <Carousel interval={2000} controls={false}>
                        <Carousel.Item interval={3000}>
                            <Items
                                comment = 'A melhor barbearia do Rio de Janeiro.'
                                name = 'João Roberto'
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Items
                                comment = 'Nunca me senti tão bem em uma barbearia.'
                                name = 'Marcelo Santhiago'
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Items
                                comment = 'Podem confiar, o trabalho é bem feito.'
                                name = 'Bernardo Campos'
                            />
                        </Carousel.Item>
                    </Carousel>
                </AreaItems>
            </AreaImg2>
        </Container>
    )
}

export default About;
