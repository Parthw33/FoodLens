
import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import Image1 from "../assets/Image1.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                    FoodLens: Your Instant Nutrition Assistant. Scan, Access, Decide. Making Healthy Choices Easy.
              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
              >
                Tired of endless ingredient searches? DiscoverEat revolutionizes your food exploration. Seamlessly navigate through detailed product profiles, uncovering nutritional insights effortlessly. Say goodbye to endless searches and hello to informed eating. With DiscoverEat, every ingredient is just a scan away. Explore the convenience and satisfaction of making healthier choices with FoodLens.
              </h3>
              <Link to="/upload">
                <Button label="Start" c="main-btn" type="start" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src={Image1}
                alt="Graphical-1"
                height="500px"
                style={{borderRadius: '1rem'}}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />

        </div>
      </div>
    </section>
  );
}
