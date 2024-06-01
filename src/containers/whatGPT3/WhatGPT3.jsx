import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const importAll = (requireContext) => {
  const images = {};
  requireContext.keys().forEach(item => { images[item.replace('./', '')] = requireContext(item); });
  return images;
};
const images = importAll(require.context('../../assets/app_screenshots', false, /\.(png|jpe?g|svg)$/));

// Add descriptions for each image
const imageDescriptions = [
  { name: 'main_screen.png', title: "Main Screen", text: "The main screen provides an overview of all available features." },
  { name: 'driver_info_confirm.png', title: "Driver Info Confirm", text: "Confirm driver information with ease." },
  { name: 'lap_timer.png', title: "Lap Timer", text: "Keep track of your lap times with precision." },
  { name: 'view_lap_history.png', title: "View Lap History", text: "Review your lap history to analyze performance." },
  { name: 'lap_analysis.png', title: "Lap Analysis", text: "Detailed analysis of each lap." },
  { name: 'turn_analysis.png', title: "Turn Analysis", text: "Analyze your turns to improve cornering performance." },
  { name: 'car_management.png', title: "Car Management", text: "Manage your car settings and preferences." },
];

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='Overview'>
      <div className='gpt3__whatgpt3-row'>
        <div className='gpt3__whatgpt3-feature'>
          <Feature title={<h2 className="whatgpt3__feature-title">What is LapSmart</h2>} text="LapSmart is a revolutionary mobile application designed for track racing enthusiasts. Compatible with both Android and iOS devices, LapSmart is your ultimate companion for mastering the race track. Whether you're a professional racer or an amateur enthusiast, this app is engineered to enhance your driving performance with precision and insight. With internal or external GPS tracking device, LapSmart enables you to monitor every nuance of your driving, helping you to refine your racing techniques. The app's comprehensive analysis tools transform raw data into actionable insights, paving the way for continuous improvement. You can share your passion and progress with a like-minded community. Learn from others and showcase your skills." />
        </div>
        <div className='gpt3__whatgpt3-carousel'>
          <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
            {imageDescriptions.map((desc, index) => (
              <div className='carousel-slide' key={index}>
                <img src={images[desc.name]} alt={`App Screenshot ${index + 1}`} className="carousel-image" />
                <div className='carousel-text'>
                  <h2>{desc.title}</h2>
                  <p>{desc.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Analyze" text="Utilize your mobile device's inbuilt GPS or connect to an external GPS device for heightened accuracy. LapSmart meticulously records your driving performance, capturing every detail of your race. Dive deep into your driving data with LapSmart's robust analysis tools. The app offers various metrics to evaluate your performance, including lap comparison and identification of potential improvements." />
        <Feature title="Coach" text="LapSmart's coaching feature acts as your personal track mentor, offering customized tips based on your driving data. It pinpoints areas for improvement and provides practical advice to enhance your racing techniques. This virtual coach helps you refine your skills and achieve better lap times. With LapSmart, accelerating your journey to becoming a more skilled racer." />
        <Feature title="Share" text="Stand out with LapSmart's unique feature of importing data from other track racing apps. This seamless integration allows you to aggregate and analyze all your racing data in one place, providing a holistic view of your performance. Share your results online and engage with a community of racers. Compare your performances, exchange tips, and maybe even spark friendly rivalries." />
      </div>
    </div>
  );
}

export default whatGPT3;
