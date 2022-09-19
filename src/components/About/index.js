import react from 'react';
import image from '../../assets/images/mypic.png';
import './about.css'

const About = () => {
    return (
        <div className='about-me'>
            <img src={image} alt='Asha Chakre'/>
            <h1 className='main-title'>Hi, I'm Asha Chakre</h1>
        </div>
    )
}

export default About;