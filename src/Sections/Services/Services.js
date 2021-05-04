import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import { Container, AreaText, AreaSpecialty, AreaList, AreaPhotos, AreaImg, AreaItems33, AreaText2, Areabarberphotos } from './Services.styled';
import { FiScissors } from 'react-icons/fi';
import { GiBeard, GiBladeFall, GiMustache } from 'react-icons/gi';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {Link} from 'react-scroll';
import Items from '../../Components/AboutAreaItems/AreaItems';


import img44 from '../../Images/barber56.png';
import c1 from '../../Images/cliente1.jpg';
import c2 from '../../Images/cliente2.jpg';
import c3 from '../../Images/cliente3.jpg';
import c4 from '../../Images/cliente4.jpg';
import c5 from '../../Images/cliente5.jpg';
import c6 from '../../Images/cliente6.jpg';
import barber1 from '../../Images/barbeiro1.jpeg';
import barber2 from '../../Images/barbeiro2.jpg';
import barber3 from '../../Images/barbeiro3.jpg';



import AreaItems from '../../Components/ServicesAreaItems/ServicesItems';

import AreaItems2 from '../../Components/ServicesAreaItems/Servicesphotos';


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



function Services() {

    const [Open, setOpen] = useState(true);

    return (
        <Container id='services'>
            <AreaText data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <div className='line'></div>
                <h2 className='services'>Nossos serviços</h2>
                <h1 className='services1'>Conheça as nossas especialidades</h1>
            </AreaText>

            <AreaSpecialty>
                <AreaItems
                    img={<FiScissors className='img1' />}
                    text1='Corte tesoura'
                    text2='Cortamos qualquer tipo de cabelo na tesoura, ideal para qualquer tipo de cliente.'
                />
                <AreaItems 
                    img={<GiBeard className='img2' />}
                    text1='Barba desenhada'
                    text2='Uma boa e velha aparada na barba, fazendo aquele desenho totalmente bem pensado ao modelo do seu rosto.'
                />
                <AreaItems 
                    img={<GiBladeFall className='img3' />}
                    text1='Degradê navalhado'
                    text2='Um dos cortes mais usados nos últimos tempos, aquele degradê famoso.'
                />
                <AreaItems 
                    img={<GiMustache className='img4' />}
                    text1='Bigode desenhado'
                    text2='Para aqueles que amam um bigode aparado, sabemos desenhá-lo da melhor forma.'
                />
            </AreaSpecialty>

            <AreaList>
                <div className='list1'>
                    <p className='listc'>Lista de cortes</p>
                    <h1 className='classic'>Cortes clássicos</h1>
                    <div className='list11'>
                        <p className='side'>Shaped afro</p>
                        <div className='line'></div>
                        <p className='price'>R$ 40</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Corte militar</p>
                        <div className='line'></div>
                        <p className='price'>R$ 60</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>French crop</p>
                        <div className='line'></div>
                        <p className='price'>R$ 70</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Cabelo médio</p>
                        <div className='line'></div>
                        <p className='price'>R$ 100</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Side parting</p>
                        <div className='line'></div>
                        <p className='price'>R$ 80</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Pompadour</p>
                        <div className='line'></div>
                        <p className='price'>R$ 200</p>
                    </div>
                </div>

                <div className='list2'>
                    <p className='listc'>Lista de cortes</p>
                    <h1 className='classic'>Ajustes de barba</h1>
                    <div className='list11'>
                        <p className='side'>Barba desenhada</p>
                        <div className='line'></div>
                        <p className='price'>R$ 40</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Barba zerada</p>
                        <div className='line'></div>
                        <p className='price'>R$ 10</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Hidratação</p>
                        <div className='line'></div>
                        <p className='price'>R$ 20</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Barba na tesoura</p>
                        <div className='line'></div>
                        <p className='price'>R$ 50</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Barba 5 </p>
                        <div className='line'></div>
                        <p className='price'>R$ 30</p>
                    </div>
                    <div className='list11'>
                        <p className='side'>Barba 6</p>
                        <div className='line'></div>
                        <p className='price'>R$ 60</p>
                    </div>
                </div>
            </AreaList>

            <AreaPhotos>
                <div className='Areatitle'  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                    <div className='line2'></div>
                    <p className='title1'>Veja as fotos de clientes</p>     
                    <h1 className='title2'>Cabelo/Barba</h1>
                </div>    

                <div className='Areacarousel'>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item interval={4000}>
                    <div className='AreacarouselItems'>
                        <AreaItems2
                            img={<img src={c1} className='img11' />}
                            text11='Roberto Gomez'
                            text22='Ótimo atendimento, excelente ambiente familiar!!!'
                        />
                        <AreaItems2
                            img={<img src={c2} className='img11' />}
                            text11='Fabrício Murilo'
                            text22='Fiquei muito satisfeito com o atendimento e resultado.'
                        />
                        <AreaItems2
                            img={<img src={c3} className='img11' />}
                            text11='Andrez Renato'
                            text22='A melhor barbearia da região, são top demais!!'
                        />
                   </div>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                    <div className='AreacarouselItems'>
                        <AreaItems2
                            img={<img src={c4} className='img11' />}
                            text11='Lionel Messi'
                            text22='Cortaram o cabelo do meu filho super bem!!!'
                        />
                        <AreaItems2
                            img={<img src={c5} className='img11' />}
                            text11='Gabriel Diaz'
                            text22='Excelentes profissionais muita dedicação super indico.'
                        />
                        <AreaItems2
                            img={<img src={c6} className='img11' />}
                            text11='Arnold Grisson'
                            text22='Ainda recebe uma cortesia enquanto espera a sua vez.'
                        />
                        </div>
                    </Carousel.Item>
                    
                </Carousel>
                </div>  

            <AreaImg>
                    <img className="img44" alt="img44" src={img44} />
                    <AreaItems33>
                        <p className='text33'>Agende seu corte ou barba agora mesmo.</p>
                        <Link className='buttona' onClick={() => setOpen(true)} smooth={true} to='contact'><button className='buttona'>AGENDE SEU CORTE</button></Link> 
                    </AreaItems33>
            </AreaImg>

            <AreaText2>
                <div className='areahouse'  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                    <div className='line1'></div>
                    <h2 className='services1'>Conheça nossos profissionais</h2>
                    <h1 className='services22'>Os Barbeiros da casa</h1>
                    <p className='textpr'>Os melhores do estado do Rio de Janeiro em um só lugar, especialistas prontos para atender você da melhor forma.</p>
                </div>

                    
                <Areabarberphotos>
                    <div className='Areabarberp'>
                        <div className='Areanameb1'>
                            <img className='b1' alt='b1' src={barber1} />
                            <p className='bname1'>Sérgio Gomez</p>
                        </div>
                        <div className='Areanameb1'>
                            <img className='b1' alt='b1' src={barber2} />
                            <p className='bname1'>Alberto Faria</p>
                        </div>                       <div className='Areanameb1'>
                            <img className='b1' alt='b1' src={barber3} />
                            <p className='bname1'>Matheus Xavier</p>
                        </div>
                    </div>
                </Areabarberphotos>
            </AreaText2>

            
            </AreaPhotos>


        </Container>
    )
}

export default Services;
