import React from 'react';
import './index.css';
import Headshot from '../../assets/headshot/lindsey-headshot.jpeg';
const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
            <span>Freelance Photographer</span>
            <div className='hero-icons'></div>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={Headshot} alt='' />
          </div>
        </div>
      </section>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={Headshot} alt='' />
          </div>
        </div>
      </section>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={Headshot} alt='' />
          </div>
        </div>
      </section>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h2>Lindsey</h2>
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
