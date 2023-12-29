import React from 'react';


export default function About() {
  return(
    <>
    <div className='container d-flex justify-content-center align-items-center flex-column'>
    <img style={{height: 'auto', width: '100%', maxHeight: '450px', maxWidth: '450px'}} src='https://raw.githubusercontent.com/imhardikdesai/Nutritions-Meter/master/src/Assets/ChartLogo.png' alt='logo'/>
      <div className='my-1'>
      <h1 className='py-2 card-title'>what is nurometer?</h1>
        <p className='card-text'>webiste compare fruit</p>
      </div>
    </div>
    </>
  )
}