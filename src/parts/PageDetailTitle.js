import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function PageDetailTitle() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const data = page?.[id] || [];
  return (
    <section className='m-0 font-poppins'>
        <h1 className='text-4xl text-accent font-bold'>{data.title}</h1>
        <span className='text-lg text-slate-300'>{data.city}, {data.country}</span>
    </section>
  )
}
