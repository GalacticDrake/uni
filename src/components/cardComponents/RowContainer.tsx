import CardFaculty from "@components/facultyComponents/CardFaculty";
import CardProgrammes from "@components/programmesComponents/CardProgrammes";

const RowContainer = (props: any) => {
  const { type } = props || {};

  const checkContent = () => {
    switch (type) {
      case "Faculties":
        return <CardFaculty {...props} />;
      case "Programmes":
        return <CardProgrammes {...props} />;
      default:
        return <div className={"body"}>No content found.</div>;
    }
  };

  return <div className={"row-outer"}>{checkContent()}</div>;
};

export default RowContainer;
