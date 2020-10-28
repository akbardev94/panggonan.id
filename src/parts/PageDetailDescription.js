import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 className="font-weight-bold">About The Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Fitur Tidak Ada"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                  />{" "}
                  <span className="font-weight-bold">{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-bold">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
