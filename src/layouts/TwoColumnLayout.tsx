import InfoLayout from "@components/infoComponents/InfoLayout";
import Sidebar from "@components/nav/Sidebar";

const TwoColumnLayout = (props: any) => {
  const { main, quicklinks, label } = props || {};

  return (
    <div className={"layout"}>
      <div className={"layout-inner layout-two-column"}>
        <Sidebar links={quicklinks} />
        {main !== null ? <InfoLayout {...props} /> : props.children}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
