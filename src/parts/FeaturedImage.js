import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FeaturedImage() {

  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const data = page?.[id]?.imageId || [];

  return (
    <section className="images-section ml-28 m-0 w-1/2">
      <div className="inline-grid grid-cols-2 grid-rows-3 gap-2">
        {data.map((item, index) => {
          return (
            <div key={`FeaturedImage-${index}`} className={index === 0 ? " col-span-2 row-span-3" : ""}>
              <img src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item._id} className="w-full rounded-md" />
            </div>
          );
        })}
      </div>
    </section>
  );
}