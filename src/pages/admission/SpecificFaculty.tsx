import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { useParams } from "react-router-dom";
import { fetchFacultyDetails } from "@services/mockapi";

const SpecificFaculty = () => {
  const { facultyId }: any = useParams();

  const result = fetchFacultyDetails(facultyId);

  return (
    <TwoColumnLayout
      main={result[0]}
      quicklinks={result[0]?.content}
      type={"Faculties"}
      isSpecific={true}
      setNavigation={false}
    />
  );
};

export default SpecificFaculty;
