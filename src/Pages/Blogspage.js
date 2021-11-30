import React from "react";
import Allblogs from "../Component/allBlogs";
import Tittle from "../Component/Tittle";

const Blogspage = () => {
  return (
    <div>
      <div className="b-title">
        <Tittle title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="BlogsPage">
        {Allblogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogspage;
