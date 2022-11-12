import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchFacility, fetchQuickLinks } from "@services/mockapi";
import { useParams } from "react-router-dom";

const Facilities = () => {
  const { facilityId }: any = useParams();
  const quicklinks = fetchQuickLinks("facilities");
  let result = null;

  if (facilityId) {
    result = fetchFacility(facilityId);
  } else {
    result = fetchFacility("");
  }

  return (
    <TwoColumnLayout
      main={result}
      quicklinks={quicklinks}
      type={"Facilities"}
      isGridItem={true}
      isSpecific={facilityId ? true : false}
      setNavigation={false}
    />
  );
};

export default Facilities;
