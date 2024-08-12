import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Cat from "../../img/IMG_20200407_163224926_HDR-01.jpeg";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    initial: "A",
    name: "Ana Paula",
    text: "A Talkative transformou minha experiência de aprendizado. As aulas são dinâmicas e os professores são extremamente dedicados. Hoje, me sinto muito mais confiante para conversar em inglês!",
    imgSrc: Cat,
  },
  {
    initial: "L",
    name: "Lucas",
    text: "A flexibilidade de horários e a qualidade dos professores da Talkative são incríveis. Consigo estudar no meu próprio ritmo, o que tem sido essencial para o meu desenvolvimento. Melhor decisão que já tomei!",
    imgSrc: Cat,
  },
  {
    initial: "R",
    name: "Ricardo",
    text: "A metodologia da Talkative é inovadora e envolvente. Sinto que meu inglês evoluiu muito mais rápido do que em outros cursos que já fiz. As aulas online são práticas e adaptadas às minhas necessidades. Estou muito satisfeito com os resultados!",
    imgSrc: Cat,
  },
  {
    initial: "M",
    name: "Mariana",
    text: "Graças à Talkative, consegui uma promoção no trabalho que exigia fluência em inglês. As aulas são práticas e focadas em situações reais do dia a dia. Estou muito satisfeita com meu progresso!",
    imgSrc: Cat,
  },
  {
    initial: "A",
    name: "Alexandre",
    text: "Nunca pensei que aprender inglês poderia ser tão divertido e eficiente. As aulas são personalizadas para o meu ritmo e nível de conhecimento. Recomendo a Talkative para todos que querem realmente aprender.",
    imgSrc: Cat,
  },
];

const TestimonialCard = ({ initial, name, text, imgSrc }) => (
  <article className="testimonials__card">
    <div className="testimonials__card-header">
      <span>{initial}</span>
      <img src={imgSrc} alt={name} />
    </div>
    <div className="testimonials__card-text">
      <span>{name}</span>
      <p>{text}</p>
    </div>
  </article>
);

const Testimonials = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".testimonials__card");
      gsap.to(panels, {
        xPercent: -80 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className="testimonials" ref={component}>
      <div className="wrapper testimonials__wrapper">
        <div className="testimonials__container">
          <h2>Depoimentos</h2>
          <div className="testimonials__card-wrapper" ref={slider}>
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={testimonial.initial}
                name={testimonial.name}
                text={testimonial.text}
                imgSrc={testimonial.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
