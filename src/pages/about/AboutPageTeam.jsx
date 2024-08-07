import React from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

const TeamMemberCard = ({ name, role, description, image }) => {
  return (
    <div className="aboutPage-team__card">
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{role}</span>
      <span>{description}</span>
    </div>
  );
};

const AboutPageTeam = () => {
  const teamMembers = [
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
    {
      name: "Nome e Sobrenome",
      role: "Cargo ou Função",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: Cat,
    },
  ];

  return (
    <section className="aboutPage-team">
      <div className="wrapper aboutPage-team__wrapper">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default AboutPageTeam;
