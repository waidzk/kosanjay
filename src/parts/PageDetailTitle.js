import React from 'react'

export default function PageDetailTitle({data}) {
  return (
    <section className='m-0 font-poppins'>
        <h1 className='text-4xl text-accent font-bold'>{data.name}</h1>
        <span className='text-lg text-slate-300'>{data.city}, {data.country}</span>
    </section>
  )
}
