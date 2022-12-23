import SinglePageLayout from "@layouts/SinglePageLayout";
import { Link } from "react-router-dom";

const ToBeUpdated = () => {
  return (
    <div className={"main-container"}>
      <div className={"body blue-text"}>
        Looks like this page is not found. We could be updating the contents,
        stay tuned.
      </div>
      <hr></hr>
      <div>
        <span className={"body"}>Return to </span>
        <Link to={"/"} className={"body"}>
          home page
        </Link>
        <span>.</span>
      </div>
    </div>
  );
};

const PageNotFound = () => {
  return (
    <div className={"page-height"}>
      <SinglePageLayout>{<ToBeUpdated />}</SinglePageLayout>
    </div>
  );
};

export default PageNotFound;
