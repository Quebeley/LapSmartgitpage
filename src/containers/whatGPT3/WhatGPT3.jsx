import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='Overview'>
      {/* <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is LapSmart" text="LapSmart is a revolutionary mobile application designed for track racing enthusiasts. Compatible with both Android and iOS devices, LapSmart is your ultimate companion for mastering the race track. Whether you're a professional racer or an amateur enthusiast, this app is engineered to enhance your driving performance with precision and insight.With internal or external GPS tracking device, LapSmart enables you to monitor every nuance of your driving, helping you to refine your racing techniques.
The app's comprehensive analysis tools transform raw data into actionable insights, paving the way for continuous improvement.
You can share your passion and progress with a like-minded community. Learn from others and showcase your skills."/>
      </div> */}
      <div className='gpt3__whatgpt3-feature'>
        {/* Added a new class for the title */}
        <Feature title={<h2 className="whatgpt3__feature-title">What is LapSmart</h2>} text="LapSmart is a revolutionary mobile application designed for track racing enthusiasts. Compatible with both Android and iOS devices, LapSmart is your ultimate companion for mastering the race track. Whether you're a professional racer or an amateur enthusiast, this app is engineered to enhance your driving performance with precision and insight.With internal or external GPS tracking device, LapSmart enables you to monitor every nuance of your driving, helping you to refine your racing techniques.
The app's comprehensive analysis tools transform raw data into actionable insights, paving the way for continuous improvement.
You can share your passion and progress with a like-minded community. Learn from others and showcase your skills."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Analyze" text=" Utilize your mobile device's inbuilt GPS or connect to an external GPS device for heightened accuracy. LapSmart meticulously records your driving performance, capturing every detail of your race.
Dive deep into your driving data with LapSmart's robust analysis tools. 
The app offers various metrics to evaluate your performance, including lap comparison and identification of potential improvements. " />
        <Feature title="Coach" text="LapSmart's coaching feature acts as your personal track mentor, offering customized tips based on your driving data. It pinpoints areas for improvement and provides practical advice to enhance your racing techniques. This virtual coach helps you refine your skills and achieve better lap times. With LapSmart, accelerating your journey to becoming a more skilled racer." />
        <Feature title="Share" text="Stand out with LapSmart's unique feature of importing data from other track racing apps. 
        This seamless integration allows you to aggregate and analyze all your racing data in one place, providing a holistic view of your performance.
       Share your results online and engage with a community of racers. Compare your performances, exchange tips, and maybe even spark friendly rivalries." />
      </div>
    </div>
  )
}

export default whatGPT3
