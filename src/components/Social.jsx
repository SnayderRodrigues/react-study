import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const Social = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default Social;
