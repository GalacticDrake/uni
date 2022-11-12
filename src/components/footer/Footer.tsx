import ThreeColumnLayout from "@layouts/ThreeColumnLayout";

const Left = () => {
  return (
    <div className={"footer-column"}>
      <div className={"body not-focused-light"}>
        <div>Copyright 2022.</div>
        <div>Xiamen University Malaysia</div>
      </div>
      <div className={"body"}>MOE Registration Certificate No.: DULN009(B)</div>
    </div>
  );
};

const Middle = () => {
  return (
    <div className={"footer-column"}>
      <div className={"body not-focused-light"}>
        <div>Jalan Sunsuria, </div>
        <div>Bandar Sunsuria,</div>
        <div>43900 Sepang,</div>
        <div>Selangor Darul Ehsan, Malaysia</div>
      </div>
      <div className={"body"}>+03 7610 2079</div>
    </div>
  );
};

const Right = () => {
  return <div className={"footer-column"}>social</div>;
};

const Footer = () => {
  return (
    <div className={"footer"}>
      <ThreeColumnLayout
        gap={"g-32"}
        left={<Left />}
        middle={<Middle />}
        right={<Right />}
      />
    </div>
  );
};

export default Footer;
