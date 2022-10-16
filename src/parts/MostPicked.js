import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="mx-28 mt-5 p-4 font-poppins" ref={props.refMostPicked}>
      <Fade bottom>
        <h2 className="text-2xl font-semibold">Most Picked</h2>
        <div className="grid grid-rows-4 grid-cols-3 gap-4 h-96 mt-4">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={index === 0 ? " row-span-4" : " row-span-2"}
              >
                <Fade bottom delay={300 * index}>
                  <div className="card gap-4 h-full">
                    <div className="tag z-30 bg-primary absolute top-0 right-0 text-white rounded-bl-2xl p-[7px] font-semibold">
                      ${item.price}
                      <span className="font-light"> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper z-10 absolute inset-0 m-0 scale-110 duration-100 ease-in-out">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper p-5 z-20 inset-y-0 w-full absolute flex justify-end flex-col duration-100 translate-y-0">
                      <div className="backdrop-blur-sm p-1 rounded-sm">
                        <Button
                          type="link"
                          className="font-semibold text-white"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.name}</h5>
                        </Button>
                        <span className="text-white">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
