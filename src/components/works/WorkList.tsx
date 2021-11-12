import PropTypes from 'prop-types';
import './WorkList.scss';

WorkList.defaultProps = {
    works: []
}

WorkList.propTypes = {
    works: PropTypes.array
};

export default function WorkList({ works }) {

    if (works) {
        var rWorks = works.map((work, index) => {
            return (
                <div key={index}>
                    <a target="_blank" rel="noreferrer" href={work.url}>
                        <img alt={work.company} className="work_logo" src={work.logo} />
                    </a>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p className="description">{work.description}</p>
                </div>
            );
        });
    }

    return (
        <div className="row work">
            <div className="three columns">
                <h1>
                    <span className="option_span">Work</span>
                </h1>
            </div>

            <div className="nine columns main-col works">{rWorks}</div>
        </div>
    )
}
