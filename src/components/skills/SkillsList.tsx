import PropTypes from 'prop-types';
import './SkillsList.scss';

SkillsList.defaultProps = {
    skills: []
}

SkillsList.propTypes = {
    skills: PropTypes.array.isRequired,
    skillmessage: PropTypes.string
};

export default function SkillsList({ skills, skillmessage }) {

    return (
        <>
            <div className="row skill display-block">
                <div className="three columns">
                    <h1>
                        <span className="option_span">Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col skills-list">
                    {skills ? skills.map((skill, index) => {
                        return (
                            <div key={index} className="skill__item">
                                <img alt={skill.name} className="skill__item__image" src={skill.image}></img>
                                <p className="skill__name">{skill.name}</p>
                                <div className="bar-expand-container">
                                    <p title={skill.level} style={{ width: skill.level }} className={"bar-expand " + skill.name.toLowerCase()}></p>
                                </div>
                                <div className="skill__item__level">
                                    <p>{skill.level}</p>
                                </div>
                            </div>
                        );
                    }) : ""}

                </div>

            </div>
        </>


    )
}
