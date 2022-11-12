const ThreeColumnLayout = (props: any) => {
  const { left, middle, right, gap } = props || {};

  return (
    <div className={"layout"}>
      <div className={`layout-inner layout-inner-horizontal ${gap}`}>
        <div className={"column"}>{left}</div>
        <div className={"column"}>{middle}</div>
        <div className={"column"}>{right}</div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
