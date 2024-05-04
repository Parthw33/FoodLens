import React from "react";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Vector1 from "../assets/Vector/1.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Product = () => {

  const { state } = useLocation();
  const { productData } = state;

  const {
    image_front_url,
    categories_hierarchy,
    generic_name,
    _id,
    ingredients_hierarchy,
    product_name,
    nutrient_data // Additional nutrient data
  } = productData;

  return (
    <>
      <section id="home">
        <Link
          style={{
            textAlign: "left",
            fontSize: "1.5rem",
            marginLeft: "10rem",
          }}
          to="/"
        >
          <ArrowBackIcon />
          Go Back
        </Link>

        <img src={Vector1} alt="Vector1" className="Vector1" />
        <div className="container-fluid px-0">
          <div className="container d-flex justify-content-center align-item-center">
            <div className="container">
              <div
                className="heading d-flex justify-content-center align-item-center mt-3"
                style={{
                  fontSize: "50px",
                }}
              >
                Nutritional Information
              </div>
              <div className="newContainer">
                <div className="first-container">
                  <div className="first-right ImgWrap">
                    <div className="d-flex justify-content-center align-item-center mt-3">
                      <div>
                        <img src={image_front_url} alt="front_photo" width={200} style={{ borderRadius: "0.5rem" }} />
                        <br />
                        <span className="d-flex justify-content-center align-item-center">{product_name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="first-left">
                    <h1 className="para-heading">{generic_name}</h1>

                    <table className="custom-table">
                      <tbody>
                        <tr>
                          <th>Key</th>
                          <th>Value</th>
                        </tr>
                        <tr>
                          <td><b>Barcode:</b></td>
                          <td>{_id} (EAN_13 format)</td>
                        </tr>
                        {ingredients_hierarchy && ingredients_hierarchy.length > 0 && (
                          <tr>
                            <td><b>Categories:</b></td>
                            <td>
                              {categories_hierarchy
                                .map((category) =>
                                  category.replace(/^en:/, "").replace(/-/g, " ")
                                )
                                .join(", ")}
                            </td>
                          </tr>
                        )}
                        {ingredients_hierarchy && ingredients_hierarchy.length > 0 && (
                          <tr>
                            <td><b>Ingredients:</b></td>
                            <td>
                              {ingredients_hierarchy
                                .map((ingredient) =>
                                  ingredient.replace(/^en:/, "").replace(/-/g, " ")
                                )
                                .join(", ")}
                            </td>
                          </tr>
                        )}
                        {nutrient_data && nutrient_data.length > 0 && (
                          nutrient_data.map((nutrient) => (
                            <tr key={nutrient.name}>
                              <td><b>{nutrient.name}:</b></td>
                              <td>{nutrient.value} {nutrient.unit}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>

                    {/* <Link to="/upload">
                <Button label="Start" c="main-btn" type="start" />
              </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
