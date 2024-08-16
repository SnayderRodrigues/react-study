import React from "react";
import CoursesPageHero from "./CoursesPageHero";
import CoursesPageContent from "./CoursesPageContent";
import CoursesPageCta from "./CoursesPageCta";

const CoursesPage = () => {
  return (
    <main id="coursespage">
      <CoursesPageHero />
      <CoursesPageContent />
      <CoursesPageCta />
    </main>
  );
};

export default CoursesPage;
