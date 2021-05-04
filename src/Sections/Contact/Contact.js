import React from 'react';

import {InputGroup, FormControl, Form } from 'react-bootstrap';

import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoYoutube, IoLogoInstagram } from 'react-icons/io';

import Gmaps from '../../Components/GoogleMaps/maps';


import AOS from 'aos';
import 'aos/dist/aos.css';



import {Container, AreaText, AreaInput, AreaFooter, AreaContactmap, Footer} from './Contact.styled';

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


function Contact() {
    return (
        <Container id='contact'>
            <AreaText  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" >
                <div className='line'></div>
                <h2 className='services'>Venha nos visitar</h2>
                <h1 className='services1'>Marque um horário</h1>
            </AreaText>

            <AreaInput>
                <div className='areainputs'>
                    <div className='linput'>
                        <label for="name" className='name'>Nome</label>
                        <Form.Group  size="sm" className="Input1">
                            <FormControl required  id='name' type='text' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Form.Group>
                    </div>
                    
                    <div className='linput'>
                        <label for="email" className='name'>Email</label>
                        <Form.Group size="sm" className="Input1">
                            <FormControl required id="email"  type='email' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Form.Group>
                    </div>

                    <div className='linput'>
                        <label for='tel' className='name'>Telefone</label>
                        <Form.Group size="sm" className="Input1">
                            <FormControl required id='tel' type='number' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Form.Group>
                    </div>
                </div>

                <div className='areainputs'>
                    <div className='linput'>
                        <label className='name'>Corte Cabelo</label>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control size='sm' as="select">
                            <option> </option>
                            <option>Shaped Afro</option>
                            <option>Corte Militar</option>
                            <option>French crop</option>
                            <option>Side parting</option>
                            <option>Pompadour</option>
                            </Form.Control>
                        </Form.Group>

                    </div>

                    <div className='linput'>
                        <label className='name'> Corte Barba</label>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control size='sm' as="select">
                            <option> </option>
                            <option>Barba desenhada</option>
                            <option>Barba zerada</option>
                            <option>Hidratação</option>
                            <option>Barba na tesoura</option>
                            <option>Barba 5</option>
                            </Form.Control>
                        </Form.Group>

                    </div>
                    
                    <div className='linput'>
                        <label for='date' className='name'>Data</label>
                        <Form.Group size="sm" className="Input1">
                            <FormControl required name='date' type='date'  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Form.Group>
                    </div>

                    <div className='linput'>
                        <label for='time' className='name'>Hora</label>
                        <Form.Group size="sm" className="Input1">
                            <FormControl required id='time' type='time' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Form.Group>
                    </div>
                </div>

                <div className='areabutton'>
                    <button className='send'>Enviar</button>
                </div>
            </AreaInput>
            

            <AreaFooter>
                <AreaContactmap>
                    <div className='areaC1'>
                        <div className='Areanameicon'>
                            <MdLocationOn className='icon' />
                            <p className='nameicon'>Copacabana- RJ</p>
                        </div>

                        <div className='Areanameicon'>
                            <FaWhatsapp className='icon' />
                            <p className='nameicon'>000-000-0000</p>
                        </div>

                        <div className='Areanameicon'>
                            <AiOutlineMail className='icon' />  
                            <p className='nameicon'>contato@barbearia.com.br</p>
                        </div>

                        <div className='Areanameicon'>
                            <MdAccessTime className='icon' />
                            <p className='nameicon'>10:00 ás 21:00</p>
                        </div>

                        <div className='areasocials'>
                            <FaFacebookF className='iconssocial' />
                            <IoLogoYoutube className='iconssocial' />
                            <IoLogoInstagram className='iconssocial' />
                        </div>


                    </div>


                    <div className='areaC2'>
                        <Gmaps />

                    </div>
                </AreaContactmap>

                <Footer>
                    <div className='areasocialsfooter'>

                        <div className='areaiconssfooter'>
                            <FaFacebookF className='iconssocialfooter' />
                            <IoLogoYoutube className='iconssocialfooter' />
                            <IoLogoInstagram className='iconssocialfooter' />
                        </div>

                        <div className='areacopy'>
                            <p className='namecopy'>Copyright - Barbearia</p>
                        </div>
                    </div>


                </Footer>

            </AreaFooter>
        </Container>
    )
}

export default Contact;
