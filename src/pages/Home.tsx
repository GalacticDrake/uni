import SlideTwoLayout from "@components/slideComponents/SlideTwoLayout";
import SlideSingleLayout from "@components/slideComponents/SlideSingleLayout";
import SinglePageLayout from "@layouts/SinglePageLayout";
import GridLayout from "@components/gridComponents/GridLayout";

// import raw, should do it with CDN instead
import imgbanner1 from "@assets/bannerimg1.png";
import landing from "@assets/landing.jpg";

const Home = () => {
  const tempArray = [
    {
      id: 1,
      img: "assets/event.png",
      title: "BEM",
      subtitle: "03 November 2022",
    },
    {
      id: 2,
      img: "assets/event.png",
      title: "BEM",
      subtitle: "03 November 2022",
    },
    {
      id: 3,
      img: "assets/event.png",
      title: "BEM",
      subtitle: "03 November 2022",
    },
    {
      id: 4,
      img: "assets/event.png",
      title: "BEM",
      subtitle: "03 November 2022",
    },
  ];

  const buttonLinks = [
    {
      id: "1",
      link: "./foundation",
      label: "Foundation Studies",
    },
    {
      id: "2",
      link: "./undergraduate",
      label: "Undergraduate Degrees",
    },
    {
      id: "3",
      link: "./postgraduate",
      label: "Postgraduate",
    },
  ];

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
            content={tempArray}
            isLinksAvailable={true}
            isHeadingAvailable={true}
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
            content={tempArray}
            isLinksAvailable={true}
            isHeadingAvailable={true}
          />
        </>
      }
    </SinglePageLayout>
  );
};

export default Home;