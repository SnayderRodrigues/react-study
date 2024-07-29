import React from "react";
import CoursesPageHero from "./CoursesPageHero";
import CoursesPageContent from "./CoursesPageContent";
import CoursesPageCourses from "./CoursesPageCourses";

const CoursesPage = () => {
  return (
    <main id="coursespage">
      <CoursesPageHero />
      <CoursesPageContent />
      <CoursesPageCourses />
    </main>
  );
};

export default CoursesPage;
