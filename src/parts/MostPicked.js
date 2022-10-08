import Button from 'elements/Button'
import React from 'react'

export default function MostPicked(props) {
  return (
    <section className='mx-28 mt-5 p-4 font-poppins'>
        <h2 className='text-2xl font-semibold'>Most Picked</h2>
        <div className='grid grid-rows-4 grid-cols-3 gap-4 h-96'>
        {props.data.map((item, index) => {
          return (
            <div class={index === 0 ? " row-span-4" : " row-span-2"}>
              <div className='card border'>
                <div className='tag'>
                  ${item.price} {index + 1}
                  <span className='font-light'> per {item.unit}</span>
                </div>
                <figure className='img-wrapper'>
                  <img 
                  src={item.imageUrl}
                  alt={item.name}
                  className='img-cover'
                  />
                </figure>
                <div className='meta-wrapper'>
                  <Button
                    type='link'
                    className='text-white'
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </section>
  )
}
