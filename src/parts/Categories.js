import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section
        className="mx-28 mt-5 p-4 font-poppins"
        key={`category-${index1}`}
      >
        <Fade cascade>
          <h4 className="mb-3 font-semibold">{category.name}</h4>
          <div className="grid grid-cols-4 gap-4 h-40">
          <Fade cascade damping={0.1}>
            {category.items.length === 0 ? (
              <div className="items-center">
                There is no property at this category
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div
                    className="item"
                    key={`category-${index1}-item-${index2}`}
                  >
                      <div className="card h-full rounded-none">
                        {item.isPopular && (
                          <div className="tag z-30 bg-primary absolute top-0 right-0 text-white rounded-bl-2xl p-[7px] font-semibold">
                            Popular <span className="font-light">Choice</span>
                          </div>
                        )}
                        <figure className="h-full">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover h-full bg-cover"
                          />
                        </figure>
                        <div className="text-black mt-1">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="block"
                          >
                            <h5 className="font-semibold text-sm">
                              {item.name}
                            </h5>
                          </Button>
                          <span className="text-xs text-slate-400">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                  </div>
                );
              })
            )}
            </Fade>
          </div>
        </Fade>
      </section>
    );
  });
}
