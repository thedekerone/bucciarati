import React from 'react'
import { Link } from '../../routes'
import Layout from '../Layout'

export default function SuccessPortal() {
  return (
    <Layout>
      <div className='success-container'>
        <div className='success'>
          <img
            src={require('../../static/icons/icons8-ok.svg')}
            width='215px'
            alt=''
          />
        </div>
        <h3>Tu compra se ha realizado exitosamente!!!</h3>
        <Link route='/'>
          <a className='btn'>
            <span>VOLVER</span>
          </a>
        </Link>

        <style jsx>{`
          .success-container {
            width: 100vw;
            height: 80vh;
            flex-direction: column;
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          span {
            color: white;
          }
        `}</style>
      </div>
    </Layout>
  )
}
