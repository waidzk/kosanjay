import React from 'react'

export default function Controller(props) {
  return (
    <section className='flex justify-center m-0 mb-5'>
        <div>{props.children}</div>
    </section>
  )
}                           
