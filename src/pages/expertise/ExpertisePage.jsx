import React from "react";
import ExpertisePageHero from "./ExpertisePageHero";
import ExpertisePageContent from "./ExpertisePageContent";
import ExpertisePageCourses from "./ExpertisePageCourses";

const ExpertisePage = () => {
  return (
    <main id="expertisepage">
      <ExpertisePageHero />
      <ExpertisePageContent />
      <ExpertisePageCourses />
    </main>
  );
};

export default ExpertisePage;
