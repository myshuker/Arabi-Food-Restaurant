import React from "react";

import reem1 from "../../assets/images/Reem1.jpeg";
import reem2 from "../../assets/images/Reem2.jpeg";
import reem3 from "../../assets/images/Reem3.jpeg";
// import reem4 from "../../assets/images/Reem4.jpeg";
import reem5 from "../../assets/images/Reem5.jpeg";
import reem6 from "../../assets/images/Reem6.jpeg";
import reem7 from "../../assets/images/Reem7.jpg";
import reemRestaurant1 from "../../assets/images/ReemRestaurant1.jpg";
import reemRestaurant2 from "../../assets/images/ReemRestaurant2.jpg";
import reemRestaurant3 from "../../assets/images/ReemRestaurant3.jpg";
import food1 from "../../assets/images/food1.jpg";
import food2 from "../../assets/images/food2.jpg";
import food3 from "../../assets/images/food3.jpg";
import food4 from "../../assets/images/food4.jpg";
import food5 from "../../assets/images/food5.jpg";
import food6 from "../../assets/images/food6.jpg";
import food7 from "../../assets/images/food7.jpg";
import food8 from "../../assets/images/food8.jpg";
import food9 from "../../assets/images/food9.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import lovedamas from "../../assets/images/lovedamas.jpg";
import tapas from "../../assets/images/tapas.png";

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <p>
        totam aliquid quisquam excepturi deleniti enim quasi fuga eius mollitia
        dolorum earum a aspernatur sint et voluptatum, ipsa voluptatibus!
      </p>{" "}
      <div className="gallery-container">
        <div className="gallery-group ">
          <img src={`${reem1}`} alt="" />
          <img src={`${reem2}`} alt="" />
          <img src={`${reem3}`} alt="" />
          <img src={`${reem5}`} alt="" />
          <img src={`${reem6}`} alt="" />
          <img src={`${reem7}`} alt="" />
          <img src={`${food1}`} alt="" />
          <img src={`${food2}`} alt="" />
          <img src={`${food3}`} alt="" />
          <img src={`${food4}`} alt="" />
          <img src={`${food5}`} alt="" />
          <img src={`${food6}`} alt="" />
          <img src={`${food7}`} alt="" />
          <img src={`${food8}`} alt="" />
          <img src={`${food9}`} alt="" />
          <img src={`${kitchen}`} alt="" />

          <img src={`${lovedamas}`} alt="" />
          <img src={`${reemRestaurant1}`} alt="" />
          <img src={`${reemRestaurant2}`} alt="" />
          <img src={`${reemRestaurant3}`} alt="" />

          <img src={`${tapas}`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;