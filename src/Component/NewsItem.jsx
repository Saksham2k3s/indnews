import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function NewsItem(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

   // Define a custom style for the checkbox
   const checkboxStyle = {
    color: "red", // Change the color to red
  };
  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <div className="card h-100"  style={{ width: "18rem", backgroundColor: `${props.mode === 'dark' ? 'black' : 'transparent'}`, border:`${props.mode === 'light' ? ' 2px solid black' : '2px solid #4efc73'}` }} >
          <img
            className="card-img-top"
            src={
              props.image === null
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s"
                : props.image
            }
            alt="Card imagecap"
          />
          <div className="card-body" style={{backgroundColor: 'transparent'}}>
            <h5 className="card-title">
              {props.title === null
                ? "Title Not Found"
                : props.title.slice(0, 45)}
              ....
            </h5>
            <p className="card-text">
              {props.description === null
                ? "Description Not Found"
                : props.description.slice(0, 80)}
              .....
            </p>

            <div className="d-flex justify-content-between">
              <Link
                to={props.source}
                target="_blank"
                className="btn"
              >
                Read M
              </Link>

              <Checkbox
                {...label}
                icon={<FavoriteBorder  style={checkboxStyle}/>}
                checkedIcon={<Favorite style={checkboxStyle} />}
              
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
