import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Categories({ data }) {
    return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section
        className="mx-28 mt-5 p-4 font-poppins"
        key={`category-${index1}`}
      >
        <Fade cascade>
          <h4 className="mb-3 font-semibold">{category.name}</h4>
          <div className="grid grid-cols-4 gap-5 h-auto">
            <Fade cascade damping={0.1}>
              {category.itemId.map((item, index2) => {
                return (
                  <div
                    className="item"
                    key={`category-${index1}-item-${index2}`}
                  >
                    <Button
                      type="link"
                      href={`/properties/${item._id}`}
                      className="block"
                    >
                      <div className="card w-64 bg-base-100 shadow-xl">
                        <figure className="img-cover h-full bg-cover">
                          <img
                            src={
                              item.imageId[0]
                                ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                : ""
                            }
                            alt={item.title}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-sm">
                            {item.title}
                            {item.isPopular && (
                              <div className="badge badge-secondary">
                                Popular!
                              </div>
                            )}
                          </h2>
                          <p>
                            {item.city}, {item.country}
                          </p>
                        </div>
                      </div>
                    </Button>
                  </div>
                );
              })}
            </Fade>
          </div>
        </Fade>
      </section>
    );
  });
}
