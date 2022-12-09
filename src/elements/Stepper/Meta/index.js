import React from "react";

export default function Meta({ data, current }) {
  return ( 
    <div className="text-center mb-8">
      <h1 className="text-lg">{data[current] && data[current].title}</h1>
      <p className="text-slate-400">
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
