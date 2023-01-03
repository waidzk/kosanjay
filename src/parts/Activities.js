import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="mx-28 mt-5 p-4 font-poppins">
      <Fade cascade>
        <h4 className="mb-3 font-semibold">Activities</h4>
        <div className="grid grid-cols-4 gap-5 h-auto">
          <Fade cascade damping={0.1}>
            {data.map((item, index2) => {
              return (
                <div className="item" key={`activity-item-${index2}`}>
                  <div className="card w-64 bg-base-100 shadow-xl">
                    <figure className="img-cover h-full bg-cover">
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.title}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-xl">{item.name}</h2>
                      <p>{item.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </Fade>
    </section>
  );
}
