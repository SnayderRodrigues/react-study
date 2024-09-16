import React from "react";
import { useParams } from "react-router-dom";

const CourseOne = () => (
  <div>
    <h2>Curso 01</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseTwo = () => (
  <div>
    <h2>Curso 02</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseThree = () => (
  <div>
    <h2>Curso 03</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const CourseFour = () => (
  <div>
    <h2>Curso 04</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
      laudantium totam minus labore ut, magni vel rerum, ipsam facere vitae
      quidem quia qui illo commodi consequatur sapiente soluta. Rem, voluptatum!
    </p>
  </div>
);

const courses = [
  {
    slug: "talkative-complete",
    title: "Talkative Complete",
    content: CourseOne,
  },
  {
    slug: "talkative-kids",
    title: "Talkative Kids",
    content: CourseTwo,
  },
  {
    slug: "talkative-teens",
    title: "Talkative Teens",
    content: CourseThree,
  },
  {
    slug: "talkative-express",
    title: "Talkative Express",
    content: CourseFour,
  },
];

const CoursesArticlePage = () => {
  const { slug } = useParams();
  const course = courses.find((course) => course.slug === slug);
  
  const CourseContent = course.content;

  return (
    <section className="coursesArticlePage">
      <div className="wrapper coursesArticlePage">
        <h1 className="coursesArticlePage__headline">{course.title}</h1>
        <CourseContent />
      </div>
    </section>
  );
};

export default CoursesArticlePage;
