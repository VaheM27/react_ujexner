import { useState } from "react";
import { Button, CourseBox, SectionHeader } from "../Main";
import { courses } from "../../constants/data";

import "./CourseSection.scss";

const CourseSection = ({ courseSec, courseSection }) => {
  const [selectedWrapper, setSelectedWrapper] = useState("first");

  const filteredCourses = courses.filter(
    (course) => course.wrapper === selectedWrapper
  );

  const renderButton = (label, wrapperName) => (
    <Button
      className={selectedWrapper === wrapperName ? "marked" : ""}
      func={() => setSelectedWrapper(wrapperName)}>
      {label}
    </Button>
  );

  return (
    <section className={courseSection}>
      <div className="container">
        <SectionHeader
          className="sectionHeaderL"
          heading2="Ծրագրավորման"
          bold=" դասընթացներ"
          text="Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար"
        />
        <div className={courseSec}>
          {courseSec === "courseContainer" ? (
            courses.map((course) => (
              <CourseBox
                key={course.id}
                src={course.src}
                alt={course.title}
                title={course.title}
                duration={course.duration}
                price={course.price}
              />
            ))
          ) : (
            <div className="courseWrapper">
              <div className="wrapper">
                <div className="filteredBox">
                  {filteredCourses.map((course) => (
                    <CourseBox
                      key={course.id}
                      src={course.src}
                      alt={course.title}
                      title={course.title}
                      duration={course.duration}
                      price={course.price}
                    />
                  ))}
                </div>
                <div className="buttonBox">
                  {renderButton("First", "first")}
                  {renderButton("Second", "second")}
                  {renderButton("Third", "third")}
                  {renderButton("Fourth", "fourth")}
                </div>
              </div>
              <div className="imgBox">
                <img
                  src="https://smartcode.am/public/image/per4.svg"
                  alt="section-image"
                />
              </div>
            </div>
          )}
        </div>
        <div className="btn">
          <Button
            social={false}
            content="Սկսե՛լ ուսումը"
            type="button"
            className="orangeBtn"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
