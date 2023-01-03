import React from "react";
import HtmlReactParser from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <section className="font-poppins w-full mt-2">
      <div className="text-accent text-lg">
        {HtmlReactParser(data.description)}
      </div>
      <div className="icons grid grid-cols-3">
        {data.featureId.length === 0
          ? "Tidak ada Feature"
          : data.featureId.map((feature, index) => {
              return (
                <span key={`feature-${index}`} className="m-5">
                  <img src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`} alt={feature.name} className="w-10"/>
                  <span>
                    {feature.qty} {feature.name}
                  </span>
                </span>
              );
            })}
      </div>
    </section>
  );
}
