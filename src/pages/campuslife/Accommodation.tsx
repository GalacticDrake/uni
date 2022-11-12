import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchAccommodation, fetchQuickLinks } from "@services/mockapi";
import { useParams } from "react-router-dom";

const Facilities = () => {
  const { accommodationId }: any = useParams();
  const quicklinks = fetchQuickLinks("accommodation");
  let result = null;

  if (accommodationId) {
    result = fetchAccommodation(accommodationId);
  } else {
    result = fetchAccommodation("");
  }

  return (
    <TwoColumnLayout
      main={result}
      quicklinks={quicklinks}
      type={"Accommodation"}
      isGridItem={true}
      isSpecific={accommodationId ? true : false}
      setNavigation={false}
    />
  );
};

export default Facilities;
