import React from "react";
import "./blog.css";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Look at these various Blogs!</h1>
      <div className="blog__container">
        <div className="blog__wrapper">
          <ul className="blog__items">
            <BlogItem
              src="images/img1.jpg"
              text="Keeping Fit is healthy"
              label="Fitness"
              path="/services"
            />
            <BlogItem
              src="images/img2.jpg"
              text="Exercise is a good healer to both the soul and body"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="blog__items">
            <BlogItem
              src="images/img8.jpg"
              text="Set Standard to self by eating healthy"
              label="Mystery"
              path="/services"
            />

            <BlogItem
              src="images/img6.jpg"
              text="Ride through to getting fitted with loved ones "
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
          <div className="text">
            <p>
              "The pain you feel today will be the strength you feel tomorrow"
              Regular exercide increase the overall hapiness in our life which
              keeps us mentally happy and peaceful too. It relieves the symptoms
              of depression, stress, anxiety and other mental disorders. We can
              get something good to our life,if we maintain our health and
              fitness.--from "Adebisi".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
