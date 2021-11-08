import '../education/Education.scss'
import PropTypes from 'prop-types';

EducationList.defaultProps = {
    educationList: []
}

EducationList.propTypes = {
    educationList: PropTypes.array
};

export default function EducationList({ educationList }) {

    if (educationList) {
        var education = educationList.map(function (education) {
            return (
                <div className ="card" key={education.school}>
                    <h3 className="education_title">{education.school}</h3>
                    <a target="_blank" rel="noreferrer" href={education.url}>
                        <img alt={education.school} className={"education_logo " + education?.className}  src={education.logo} />
                    </a>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });
    }

    return (
        <div className="row education">
            <div className="three columns header-col">
                <h1>
                    <span className="option_span">Education</span>
                </h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">{education}</div>
                </div>
            </div>
        </div>
    )
}
