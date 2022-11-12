import TwoColumnLayout from "@layouts/TwoColumnLayout";
import {
  fetchProgrammes,
  fetchFaculties,
  fetchQuickLinks,
  fetchCourse,
  fetchCurrentFaculty,
  fetchFacultiesWithProgramme,
} from "@services/mockapi";
import { useParams, useSearchParams } from "react-router-dom";

const findProgrammes = (location: string) => {
  switch (location) {
    case "foundation":
      return "Foundation Programmes";
    case "undergrad":
      return "Undergraduate Degrees";
    case "postgrad":
      return "Postgraduate Degrees";
  }
};

const Programmes = () => {
  /* for navigation */
  const programmes = fetchProgrammes("all");

  /* foundation, undergrad or postgrad in URL:programmeType */

  const { programmeType, programmeId }: any = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const quicklinks = fetchQuickLinks("programmes");
  const location = findProgrammes(programmeType);

  const allProgrammes = fetchFaculties("", false);

  let result = null;
  let query: string | null = null;
  let subcategory = null;
  let isProgramme = false;

  query = searchParams.get("category");

  /* api fetch */
  const queryProgrammes = (isType: boolean) => {
    if (isType) {
      result = fetchFacultiesWithProgramme(query, programmeType);
      subcategory = fetchCurrentFaculty(query, programmeType);
    } else {
      result = fetchFaculties(programmeType, false);
    }

    isProgramme = true;
  };

  const queryCourse = () => {
    result = fetchCourse(programmeId);
    isProgramme = false;
  };

  if (programmeId) {
    queryCourse && queryCourse();
  } else {
    if (query) queryProgrammes && queryProgrammes(true);
    else queryProgrammes && queryProgrammes(false);
  }

  return (
    <TwoColumnLayout
      main={result}
      quicklinks={quicklinks}
      programmes={isProgramme ? programmes : null}
      allProgrammes={allProgrammes}
      showCourse={!isProgramme}
      type={isProgramme ? "Programmes" : location}
      category={location}
      subcategory={subcategory}
      isSpecific={isProgramme ? false : true}
      setNavigation={isProgramme ? true : false}
    />
  );
};

export default Programmes;
