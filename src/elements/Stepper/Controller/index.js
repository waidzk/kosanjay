import React from 'react'

export default function Controller(props) {
  return (
    <section className='flex justify-center'>
        <div>{props.children}</div>
    </section>
  )
}
