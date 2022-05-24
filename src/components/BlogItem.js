import React from "react";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <>
      <li className="blog__item">
        <Link className="blog__item__link" to={props.path}>
          <figure className="blog__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Fitness" className="blog__item__img" />
          </figure>
          <div className="blog__item__info">
            <h5 className="blog__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default BlogItem;
