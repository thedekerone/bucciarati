import React from 'react'
import { Link, Router } from '../routes'
import hero from '../static/mainView/main2.webp'
import heroMini from '../static/mainView/main2.jpg?lqip'

export default function MainDisplayer() {
  return (
    <div className='main-displayer'>
      <div className='main-displayer__item'>
        <picture id='item1'>
          <source src={heroMini} width='100%' className='item-image' alt='' />

          <img src={hero} width='100%' className='item-image' alt='' />
        </picture>
        <div className='main-hero'>
          <div className='main-hero__text'>
            <h1>AIR JORDAN XXIV</h1>
            <span>The Future of Flight.</span>
          </div>
          <div className='main-hero__button'>
            <Link route='producto' params={{ tag: 'zapatillas' }}>
              <a>BUY NOW</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .main-displayer {
            display: grid;
            height: 40rem;
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          .main-hero {
            margin: 0 auto;
            max-width: 1150px;
            position: absolute;
            width: 100%;
            height: 60%;
          }
          .main-hero__text,
          .main-hero__button {
            margin: 0 1em;
          }
          .main-hero__text span,
          .main-hero__text h1 {
            margin: 0.2em 0;
            color: white;
          }
          .main-hero__button {
            display: inline-block;
            position: relative;
            z-index: 22;
            margin-top: 1.5em;
            transition: 0.2s;
          }

          .main-hero__button a {
            display: block;
            height: 100%;
            padding: 0.5em 1.4em;
            font-weight: bold;
            border: 1px solid #fd486b;
            font-size: 1.2rem;
            background: #fd486b;

            color: white;
          }
          .main-hero__button:active {
            background: #fd486b;
          }

          .item-image {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          #item1 {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .main-displayer__item {
            background: url(${heroMini});
            background-size: cover;
            background-position: 600px top;
            background-repeat: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .main-displayer__item {
            overflow: hidden;
          }

          @media (min-width: 650px) {
            .main-hero {
              font-size: 20px;
            }
            .main-hero__button:hover {
              background: #fd486b;
            }
            #item1 {
              background-position: center top;
            }
          }
        `}
      </style>
    </div>
  )
}
