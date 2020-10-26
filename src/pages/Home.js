import React from "react";
import "./Home.css";

import Data from "../data/HomeData";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="Home">
        <div
          className="Home_header"
          style={{
            backgroundImage: `url(${Data.header.background.image.src})`
          }}
        ></div>
        <h5>Đây là chiến mã của gia đình mình</h5>
      </div>
    </Layout>
  );
}
