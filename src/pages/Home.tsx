import SlideTwoLayout from "@components/slideComponents/SlideTwoLayout";
import SlideSingleLayout from "@components/slideComponents/SlideSingleLayout";
import SinglePageLayout from "@layouts/SinglePageLayout";
import GridLayout from "@components/gridComponents/GridLayout";

// for demo only
import imgbanner1 from "@assets/bannerimg1.png";
import landing from "@assets/landing.jpg";
import { newsSection, buttonLinks, eventSection } from "@data/homedata";

const Home = () => {
  return (
    <SinglePageLayout>
      {
        <>
          <SlideTwoLayout
            caption={"news"}
            title={"Meet our new faculty members"}
            subtitle={"Dr. Koh Chong Wah unearths history from folklore."}
            link={"/"}
            button={[
              {
                id: 1,
                link: "/page-not-found",
                label: "Read the story",
              },
            ]}
            img={imgbanner1}
            imgAlt={"image"}
            isCover={false}
          />
          <GridLayout
            headline={"News"}
            content={newsSection}
            isLinksAvailable={true}
            isHeadingAvailable={true}
            link={"/page-not-found"}
          />
          <SlideSingleLayout
            bigtitle={"Enroll in Xiamen"}
            title={"Begin your first step towards academic excellence"}
            button={buttonLinks}
            img={landing}
            imgAlt={"image"}
            isCover={true}
          />
          <GridLayout
            headline={"Events"}
            content={eventSection}
            isLinksAvailable={true}
            isHeadingAvailable={true}
            link={"/page-not-found"}
          />
        </>
      }
    </SinglePageLayout>
  );
};

export default Home;
