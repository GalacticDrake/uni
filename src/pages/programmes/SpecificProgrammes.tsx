import ThreeColumnLayout from "@layouts/ThreeColumnLayout";

const Left = (props: any) => {
  const { duration } = props || {};

  return (
    <div className={"course-column"}>
      <div className={"header-info-title"}>Duration</div>
      <div className={"header-info-body"}>{duration} years</div>
    </div>
  );
};

const Middle = (props: any) => {
  const { intake } = props || {};

  return (
    <div className={"course-column"}>
      <div className={"header-info-title"}>Intake</div>
      <div className={"header-info-body"}>{intake}</div>
    </div>
  );
};

const Right = (props: any) => {
  const { fees } = props || {};

  return (
    <div className={"course-column"}>
      <div className={"header-info-title"}>Fees</div>
      <div className={"header-info-body"}>{fees} per year</div>
    </div>
  );
};

const SpecificProgrammes = (props: any) => {
  const { main } = props || {};

  const { course_details, title, img } = main || {};
  const { info } = course_details || {};

  return (
    <div className={"course-container body"}>
      <div className={"course-header"}>
        <div className={"heading-h3 course-title"}>{title}</div>
        <div
          className={"course-image"}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <ThreeColumnLayout
          gap={"g-8"}
          left={<Left {...course_details} />}
          middle={<Middle {...course_details} />}
          right={<Right {...course_details} />}
        />
      </div>
      <div className={"course-body"}>
        {info?.map((item: any, index: number) => {
          return (
            <div key={index} className={"course-body-inner"}>
              <div>{item?.info_title}</div>
              <div className={"darkgrey-text"}>{item?.info_body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificProgrammes;
