import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchFaculties, fetchQuickLinks } from "@services/mockapi";

const Faculty = () => {
  const result = fetchFaculties("", false);

  const quicklinks = fetchQuickLinks("admissions");

  return (
    <TwoColumnLayout
      main={result}
      type={"Faculties"}
      quicklinks={quicklinks}
      isSpecific={false}
      setNavigation={false}
    />
  );
};

export default Faculty;
