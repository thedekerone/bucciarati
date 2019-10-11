import React from 'react'
import test from '../static/mainView/mainImage.jpg?trace'

export default function mongol() {
    return (
        <div>
            <img src={test.trace} alt=""/>
            <img src={test.src} alt=""/>

        </div>
    )
}
