import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchAdmissions, fetchQuickLinks } from "@services/mockapi";
import { useParams } from "react-router-dom";

const Admissions = () => {
  const { admissionId }: any = useParams();
  const quicklinks = fetchQuickLinks("admissions");
  let result = fetchAdmissions(admissionId);

  return (
    <TwoColumnLayout
      main={result}
      quicklinks={quicklinks}
      type={"Admissions"}
      isSpecific={true}
      setNavigation={false}
    />
  );
};

export default Admissions;
