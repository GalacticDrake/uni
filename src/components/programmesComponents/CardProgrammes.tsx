import { Link } from "react-router-dom";

const CardSpecific = (props: any) => {
  const { courses } = props || {};

  return courses.map((item: any, index: number) => {
    return (
      <Link to={item?.link} key={index} className={"rowlink"}>
        <div className={"row-card"}>
          <div className={"subtitle-2"}>{item?.code}</div>
          <div className={"body"}>{item?.title}</div>
          <div className={"subtitle-1 darkgrey-text"}>{item?.course_type}</div>
        </div>
      </Link>
    );
  });
};

const CardProgrammes = (props: any) => {
  const { main } = props || {};
  const { total, faculties }: any = main || {};
  return (
    <>
      <div className={"subtitle-2"}>
        {total} {total >= 2 ? "results" : "result"} found.
      </div>
      <div className={"row-container"}>
        {faculties.map((item: any) => {
          return <CardSpecific courses={item?.courses} />;
        })}
      </div>
    </>
  );
};

export default CardProgrammes;
