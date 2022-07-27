import React from 'react';
import './index.css';
import Headshot from '../../assets/headshot/lindsey-headshot.jpeg';
import AboutImg from '../../assets/portfolio-images/img-4.jpg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import Button from '../../components/button/Button';
const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
            <p>
              Portrait photographer who specializes in family, engagement, and
              individual sessions.
            </p>
            <div>
              <Button text={'book a session'} />
            </div>
            <div className='hero-icons'>
              <a
                target='_blank'
                href='https://www.facebook.com/lindseymabelphotography'
              >
                <BsFacebook />
              </a>

              {/* <AiOutlineInstagram /> */}
              <a
                target='_blank'
                href='https://www.instagram.com/lindseymabelphotography/'
              >
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={Headshot} alt='' />
          </div>
        </div>
      </section>
      <section className='about-section'>
        <div className='about-content'>
          <div className='about-img'>
            <img className='about-img' src={AboutImg} alt='' />
          </div>
          <div className='about-text'>
            I have always been obsessed with capturing images since I was young
            but officially started my business in 2021. I have been teaching for
            8 years, currently I'm a Kindergarten teacher- So Cute! I started as
            a second photographer and quickly realized that I wanted to fulfill
            my childhood dream of starting my own photography business. I love
            capturing the magical moments a family creates (furry family members
            are always welcome). With so many photographers in the area, thank
            you for stopping by and checking out my work. It would be a pleasure
            to capture those fleeting moments for you and your family. Creating
            extraordinary memories from everyday moments once capture at a time.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
