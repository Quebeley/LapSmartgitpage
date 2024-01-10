import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='Overview'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is LapSmart" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'> 
        <Feature title="Analyze" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        <Feature title="Coach" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        <Feature title="Share" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      </div>
    </div>
  )
}

export default whatGPT3
