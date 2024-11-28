import CourseSection from "../../components/CourseSection/CourseSection";
import { PageHeader } from "../../components/Main";

export const Courses = () => {
  return (
    <div className="Courses">
      <PageHeader
        heading="Ծրագրավորման դասընթացներ"
        page="Դասընթացներ"
        path="/courses"
      />
      <CourseSection courseSec="courseContainer" />
    </div>
  );
};
