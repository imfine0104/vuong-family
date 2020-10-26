import React from "react";
import "./AboutUs.css";

import Data from "../data/AboutUsData";
import Layout from "../components/Layout";
import Card from "../components/Card/Cards";

export default function AboutUs() {
  return (
    <Layout>
      <div className="AboutUs">
        <div className="about-us-cards">
          {Data.members.map((item, index) => (
            <div key={index} className="about-us-card">
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
