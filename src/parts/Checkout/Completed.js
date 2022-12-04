import React from 'react'

import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <section className='flex justify-center items-center'>
        <img src={CompletedIllustration} alt="completed checkout" />
        <p className="text-accent text-sm">We will inform you via email later once the transaction has been accepted</p>
    </section>
  )
}
