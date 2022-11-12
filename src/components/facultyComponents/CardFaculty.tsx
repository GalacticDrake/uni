import { Link } from "react-router-dom";

const CourseOffered = (props: any) => {
  const { courses } = props || {};

  return courses.map((item: any, index: number) => {
    return (
      <span key={index}>
        {item?.title}
        {index < courses.length - 1 && ", "}
      </span>
    );
  });
};

const CardSpecific = (props: any) => {
  const { main } = props || {};

  return main.map((item: any) => {
    return (
      <Link to={item?.link} key={item?.id} className={"rowlink"}>
        <div className={"row-card"}>
          <div className={"body"}>{item?.label}</div>
          <div className={"subtitle-1 darkgrey-text"}>
            Courses offered: <CourseOffered courses={item?.courses} />
          </div>
        </div>
      </Link>
    );
  });
};

const CardFaculty = (props: any) => {
  const { main } = props || {};

  return (
    <>
      <div className={"subtitle-2"}>
        {main.length} {main.length >= 2 ? "results" : "result"} found.
      </div>
      <div className={"row-container"}>
        <CardSpecific {...props} />
      </div>
    </>
  );
};

export default CardFaculty;
