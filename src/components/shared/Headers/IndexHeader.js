
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import './indexHeader.scss'

// core components

function IndexHeader() {
  return (
      <div
        className="page-header section-dark"
        // style={{
        //   backgroundImage: "https://demos.creative-tim.com/paper-kit-react/static/media/antoine-barres.bc3299c2.jpg"
        // }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Paper Kit React</h1>
            
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:""
            
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src=""
            />
          </a>
        </h6>
      </div>
  );
}

export default IndexHeader;
