import './Resume.scss';
import EducationList from "../../components/education/Education";
import SkillsList from "../../components/skills/SkillsList";
import WorkList from "../../components/works/WorkList";
import Testimonials from '../../components/testimonials/Testimonials';

const Resume = ({ data }) => {
  if (data) {
    
    var education = data.education;

    var skillmessage = data.skillmessage;
    var skills = data.skills;
    var works = data.works;
  }

  return (
    <section id="resume" className="resume">
      <EducationList educationList={education}></EducationList>
      <WorkList works={works}></WorkList>
      <SkillsList skills={skills} skillmessage={skillmessage}></SkillsList>
      <Testimonials testimonials={data?.testimonials}/>
    </section>
  );
};

export default Resume;
