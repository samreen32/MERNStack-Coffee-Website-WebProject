import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "./Footer";
import home from "../assets/images/home1.jpg";
import slider1 from "../assets/images/slider1.jpeg";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Review() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "floralwhite",
  };

  return (
    <>
      <div style={myStyle}>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/5874730/pexels-photo-5874730.jpeg?auto=compress&cs=tinysrgb&w=400"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/6612688/pexels-photo-6612688.jpeg?auto=compress&cs=tinysrgb&w=400"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.pexels.com/photos/6612740/pexels-photo-6612740.jpeg?auto=compress&cs=tinysrgb&w=400"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div style={styles.container}>
          <h2 style={{ marginLeft: -20 }}> Reviews </h2>
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
          <textarea
            placeholder="What's your experience?"
            style={styles.textarea}
          />
          <button
            onClick={() => alert("Submitted Successfully!!!")}
            style={styles.button}
          >
            Submit
          </button>
        </div>
        <div style={{ marginTop: "20%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    backgroundImage: "url(image5.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    marginTop: -10,
    width: 300,
    padding: 10,
    height: 60,
  },
};

export default Review;
