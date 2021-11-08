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
                <div className="three columns header-col">
                    <h1>
                        <span className="option_span">Skills</span>
                    </h1>
                </div>


                <div className="nine columns main-col skills-list">
                    {skills ? skills.map(skill => {
                        return (
                            <div key={skill.name} className="skill-item">
                                <img alt={skill.name} className="skill-image" src={skill.image}></img>
                                <em className="skill_name">{skill.name}</em>
                                <div className="bar-expand-container">
                                    <p title={skill.level} style={{ width: skill.level }} className={"bar-expand " + skill.name.toLowerCase()}></p>
                                </div>

                            </div>);
                    }) : ""}

                </div>

            </div>
        </>


    )
}
