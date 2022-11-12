import TwoColumnLayout from "@layouts/TwoColumnLayout";
import { fetchAbout, fetchQuickLinks } from "@services/mockapi";
import { useParams } from "react-router-dom";

const About = () => {
  const { aboutId }: any = useParams();
  const quicklinks = fetchQuickLinks("about");
  let result = null;

  if (aboutId) {
    result = fetchAbout(aboutId);
  } else {
    result = fetchAbout("");
  }

  return (
    <TwoColumnLayout
      main={result}
      quicklinks={quicklinks}
      type={"About"}
      isSpecific={true}
      setNavigation={false}
      allowBackToParent={false}
    />
  );
};

export default About;
