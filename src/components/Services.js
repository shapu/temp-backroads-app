import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </section>
  );
};
