import React from 'react'
import './About.css';
import aboutimg from '../asset/aboutimg1.jpg';
import { Element } from 'react-scroll';
const About = () => {
    return (
        <Element id='about'>
            <section className='aboutsection'>
                <div className='about-container'>
                    <div className='aboutheading-container'>
                        <h2>About</h2>
                    </div>
                    <div className='aboutflex-container'>
                        <div className='aboutimg-container'>
                            <img src={aboutimg} alt='aboutimg' width={300} height={300} />
                        </div>
                        <div className='abouttext-container'>
                            <p>I am a dedicated and self-driven individual with a background in B.Com, followed by three years of preparation for competitive exams. This experience helped me build strong discipline, time-management skills, and an analytical mindset. Throughout this period, I discovered my passion for web development, which led me to dive into learning frontend technologies.
                                I have honed my skills in HTML, CSS, JavaScript, and React.js to create dynamic and responsive web applications. One of my personal projects includes a food order mini-site, where I independently designed and developed the entire frontend using my knowledge of these technologies. Now, I am eager to transition into a web development career, where I can continue to grow, learn, and contribute to innovative projects.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About