import React from "react";
import { useParams } from "react-router-dom";

const courses = [
  {
    slug: "talkative-complete",
    title: "Talkative Complete",
  },
  {
    slug: "talkative-kids",
    title: "Talkative Kids",
  },
  {
    slug: "talkative-teens",
    title: "Talkative Teens",
  },
  {
    slug: "talkative-express",
    title: "Talkative Express",
  },
];

const CoursesArticlePage = () => {
  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);


  return (
    <section className="CoursesArticlePage">
      <div >
        <h1>{course.title}</h1>
      </div>
    </section>
  );
};

export default CoursesArticlePage;
