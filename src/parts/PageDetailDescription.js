import React from "react";
import HtmlReactParser from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <section className="font-poppins w-full mt-2">
      <div className="text-accent text-lg">
        {HtmlReactParser(data.description)}
      </div>
      <div className="icons grid grid-cols-3">
        {data.features.map((feature, index) => {
          return (
            <span key={`feature-${index}`} className="m-5">
              <img src={feature.imageUrl} alt={feature.name} />
              <span>{feature.qty} {feature.name}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
