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
      img: "assets/event1.png",
      link: "event/1",
      title: "Nine Teams of XMUM Students Win Prizes at CUMCM 2022",
      subtitle: "15 November 2022",
    },
    {
      id: 2,
      img: "assets/event2.png",
      link: "event/1",
      title: "NESE Postgraduate Students Win Gold and Silver Medals",
      subtitle: "15 November 2022",
    },
    {
      id: 3,
      img: "assets/event3.png",
      link: "event/1",
      title: "Collaboration between XMU and Dublin Business School",
      subtitle: "14 November 2022",
    },
    {
      id: 4,
      img: "assets/event4.png",
      link: "event/1",
      title: "Student Activities Fill XMUM Campus with Energy",
      subtitle: "11 November 2022",
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
