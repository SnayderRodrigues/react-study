import React from "react";
import BlogPageHero from "./BlogPageHero"
import BlogPageFeatured from "./BlogPageFeatured";

const BlogPage = () => {
  return (
    <main id="blogPage">
      <BlogPageHero />
      <BlogPageFeatured />
    </main>
  );
};

export default BlogPage;
