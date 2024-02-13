import React from 'react';
import './HotNumbers.css'; // Asegúrate de importar tus estilos correctamente
// import {pepe} from './assets/react.svg'
function HotNumbers({number}) {
  


    return (
      <div className='circleInfo'>
        <div className='numberCircle'>
            <p>{number?.toString().padStart(2, '0')}</p>
            {/* <p>11.toString().padStart(2, '0')</p> */}
        </div>
        <svg viewBox='0 0 144.48 144.48' width='150' height='150'>
          <path
            id='ct-banner-curve-pxl_banner_carousel-d3a9627-5863'
            d='M242.93,123A71.74,71.74,0,1,1,171.2,51.22,71.73,71.73,0,0,1,242.93,123Z'
            transform='translate(-98.96 -50.72)'
          ></path>
          <text x='50' y='50' textAnchor='middle' dy='.3em'>
            <textPath  href='#ct-banner-curve-pxl_banner_carousel-d3a9627-5863'>
              {'--------------------'}
              NUMEROS GANADORES-
            </textPath>
          </text>
        </svg>
      </div>
    );
  }

export default HotNumbers;