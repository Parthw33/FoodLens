
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Vector1 from "../assets/Vector/1.png";
import { toast } from "react-toastify";
import QRCode from "./QRCode";

const Upload = () => {

  const [barcode, setBarcode] = useState("");
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleSearch = () => {
    if (barcode) {
      fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === 0) {
            // Display error toast message
            toast.error("No code or invalid code", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return;
          }
          navigate(`/product/${barcode}`, {
            state: { productData: data.product },
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleInputChange = (event) => {
    setBarcode(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  
  const onNewScanResult = (decodedText, decodedResult) => {
    if(isNaN(decodedText)){
      toast.error("No code or invalid code", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    fetch(`https://world.openfoodfacts.net/api/v2/product/${decodedText}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 0) {
          // Display error toast message
          toast.error("No code or invalid code", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        navigate(`/product/${decodedText}`, {
          state: { productData: data.product },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  let token = localStorage.getItem('token')
  // console.log(token);

  useEffect(() => {
    var token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate('/login');
    }
  }, [])

  return (
    <section id='home'>
      <img src={Vector1} alt="Vector1" className="Vector1" />      
      <div className="container">
        <div className="d-flex justify-content-center">Welcome!</div>
        <h2 className='d-flex justify-content-center'>Enter the barcode of the product to see its Nutritional Value</h2>

        <div className='mt-5'>
          <div
            style={{
              position: "relative",
              height: "50px",
              maxWidth: "380px",
              background: "red",
              margin: "auto",
              boxShadow: "0 5px 10px rgba(0,0,0,0.25)",
              borderRadius: "25px",
            }}
          >
            <input
              type="text"
              placeholder="Enter barcode here"
              value={barcode}
              onChange={handleInputChange}
              onClick={handleMouseEnter}
              onMouseOut={handleMouseLeave}
              onKeyPress={handleKeyPress}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                borderRadius: "25px",
                background: "#fff",
                outline: isHover ? "2px solid rgb(1, 191, 113)" : "none",
                border: "none",
                fontSize: "18px",
                paddingLeft: "20px",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                position: "absolute",
                right: "-22px",
                top: "0",
                width: "50px",
                border: "2px solid rgb(1, 191, 113)",
                background: "rgb(1, 191, 113)",
                height: "100%",
                textAlign: "center",
                lineHeight: "50px",
                color: "#fff",
                fontSize: "20px",
                borderRadius: "0 25px 25px 0",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <h2 className='d-flex justify-content-center align-item-center mt-5 mb-5'>OR</h2>

        <div className="App">
          <QRCode
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
        
      </div>      
    </section>
  );
};

export default Upload;
