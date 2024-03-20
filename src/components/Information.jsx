import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Information = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Phone</h3>
          <p>(85)99999-9999</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>photoapp@email.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>Maranguape, CE — Brazil.</p>
        </div>
      </div>
    </section>
  );
};

export default Information;
