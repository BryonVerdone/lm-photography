import React from 'react';
import './index.css';
import Headshot from '../../assets/headshot/lindsey-headshot.jpeg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
            <span>Freelance Photographer</span>
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
                {' '}
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={Headshot} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
