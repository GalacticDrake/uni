import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchQuickLinks } from "@services/mockapi";
import img from "@assets/aid.png";

const CustomScholarship = () => {
  return (
    <div className={"info-main"}>
      <div className={"breadcrumb body-bold"}>Scholarship and Study Grant</div>
      <div className={"divider"}></div>
      <div className={"body date-container"}>Published date: 16/09/2022</div>
      <div className={"info-body body"}>
        <div className={"info-container"}>
          <div>Merit Scholarship</div>
          <div className={"darkgrey-text"}>
            The percentage granted depends on the number of A's received
            &#40;inclusive of A-, A+, A* or equivalent&#41;. If the image below
            does not load, please click{" "}
            <a href={img} download>
              here
            </a>
            .
          </div>
          <div style={{ margin: "32px 0" }}>
            <img src={img} alt="scholarship image" width="80%" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Scholarships = () => {
  const quicklinks = fetchQuickLinks("admissions");

  return (
    <TwoColumnLayout main={null} quicklinks={quicklinks} type={"Scholarships"}>
      <CustomScholarship />
    </TwoColumnLayout>
  );
};

export default Scholarships;
