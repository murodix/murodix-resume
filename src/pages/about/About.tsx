import "../about/About.scss";

const About = ({ data }) => {
  if (data) {
    var profilepic = data.image;
    var bio = data.bio;
  }

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__picture">
            <img src={profilepic} alt="Munoz's Profile Pic" />
          </div>
          <div className="about__info">
            <p className="about__info__bio">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
