import React, {useState} from 'react';
import { AreaHeader, AreaImg, Nav, StyledButton, AreaItems} from './HeaderStyled.js'

import { HiMenu } from 'react-icons/hi';

import {Link} from 'react-scroll';


import barber1 from '../../Images/barber11.png';

function Header() {


    const [Open, setOpen] = useState(true);

    const [Navbars, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    
    window.addEventListener('scroll', changeBackground);
    return (
        <>
        
        <AreaHeader id='home'>
            <Nav className={ Navbars ? 'active' : 'navbar'}>
                <div className='areaLinks' style={{ transform: Open ? "" : "translateX(0px)"}}>
                        <Link onClick={() => setOpen(true)} smooth={true} to='home'><StyledButton>Home</StyledButton></Link>
                        <Link onClick={() => setOpen(true)} smooth={true} to='about'><StyledButton>Sobre</StyledButton></Link>
                        <Link onClick={() => setOpen(true)} smooth={true} to='services'><StyledButton>Serviços</StyledButton></Link>
                        <Link onClick={() => setOpen(true)} smooth={true} to='contact'><StyledButton>Contato</StyledButton></Link>
                </div>

                
                <div className='areaButton'>
                    <HiMenu className='buttonMenu' onClick={() => setOpen(!Open)} />
                </div>
            </Nav>
            <AreaImg>
                    <img className="imgbarber" alt="imgbarber" src={barber1} />
                <AreaItems>
                    <h1 className="para">Barbearia do Mário</h1>
                    <p className="para2">"A busca pelo bem estar do cliente através do corte de cabelo nos impulsiona a desenvolver cada vez mais em conhecimento e preparação para que desde os cortes tradicionais, criativos ou modernos, sejam todos feitos para que cada cliente conheça seu estilo e sua identidade"</p>
                    <Link onClick={() => setOpen(true)} smooth={true} to='contact'><button className="agende"> AGENDE SEU CORTE</button></Link>
                </AreaItems>
            </AreaImg>
            

        </AreaHeader>
        </>
    )
}

export default Header;
