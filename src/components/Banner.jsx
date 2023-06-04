import '../Style/Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import { header720x720 } from '../Assets';
import { useState, useEffect } from 'react';

const Banner = ()=>{

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Web Designer', 'Electrical Engineer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);  //- Math.random() * 100
  const period = 1000

  useEffect(()=> {
    let ticker = setInterval(()=>{
      tick();
    },delta)

    return ()=> { clearInterval(ticker)}
  }, [delta, text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    } 
    
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText ===''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(80);
    }
  }

    return (
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>{`I'm `}<span className='wrap'>{text}</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
                ratione pariatur rem. Magni ad dolorem numquam mollitia ducimus eos 
                porro reiciendis, explicabo neque aut rem! Natus dicta molestiae 
                autem veniam.
              </p>
             <button className='btn-connect' onClick={()=> console.log('connect')}><span>Let's Connect <BsArrowRightCircle size={25} /></span></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
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