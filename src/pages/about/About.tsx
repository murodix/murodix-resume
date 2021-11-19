import '../about/About.scss';


const About = ({ data }) => {
    if (data) {
        var profilepic = data.image;
        var bio = data.bio;
        var name = data.name;
        var city = data.address.city;
        var state = data.address.state;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={profilepic}
                        alt="Munoz's Profile Pic"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About me</h2>

                    <p className="about_bio" >{bio}</p>

                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="adress">
                                <span>{name}</span>
                                <br />
                                <span>
                                    {city}, {state}.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
