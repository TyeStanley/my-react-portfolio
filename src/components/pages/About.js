import React from 'react';
import bubbles from '../../assets/images/bubbles-logic.jpg'

export default function About() {
  return (
    <div>
      <img className="bubblesImg" src={bubbles} alt="Tye Stanley" />
      <h2>About Me</h2>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  )
}