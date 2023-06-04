import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo, linkedin, facebook, instagram, twitter } from '../Assets';
import '../Style/NavBar.css';
import { useEffect, useState } from 'react';

function BasicExample() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50) {
        setScrolled(true)
      } else (
        setScrolled(false)
      )
    }

    window.addEventListener('scroll', onScroll);

    return ()=> window.addEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <div className='logo-container' onClick={()=>onUpdateActiveLink('home')}><img src={logo} alt="Logo" /></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-center">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#!"><img src={linkedin} alt="linkedin" /></a>
              <a href="#!"><img src={facebook} alt="facebook" /></a>
              <a href="#!"><img src={instagram} alt="instagram" /></a>
              <a href="#!"><img src={twitter} alt="twitter" /></a>
            </div>
            <button className='btn-connet' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;