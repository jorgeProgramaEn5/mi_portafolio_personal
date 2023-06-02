import '../estilos/Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import { header720x720 } from '../Assets';

const Banner = ()=>{
    return (
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{`I'm webdecoded `}<span className='wrap'>web developer</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
                ratione pariatur rem. Magni ad dolorem numquam mollitia ducimus eos 
                porro reiciendis, explicabo neque aut rem! Natus dicta molestiae 
                autem veniam.
              </p>
             <button className='btn btn-outline-primary' onClick={()=> console.log('connect')}><span>Let's Connect <BsArrowRightCircle size={25} /></span></button>
            </Col>
            <Col>
              <div className='imgHeader'>
                <img src={header720x720} alt="Headder" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Banner;