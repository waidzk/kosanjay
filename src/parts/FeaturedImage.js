import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <section className="images-section ml-28 m-0 w-1/2">
      <div className="inline-grid grid-cols-2 grid-rows-3 gap-2">
        {data.map((item, index) => {
          return (
            <div key={`FeaturedImage-${index}`} className={index === 0 ? " col-span-2 row-span-3" : ""}>
              <img src={item.url} alt={item._id} className="w-full rounded-md" />
            </div>
          );
        })}
      </div>
    </section>
  );
}