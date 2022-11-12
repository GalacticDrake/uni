import CaptionBlock from "./CaptionBlock";

import "@styles/slideComponents.scss";

const SlideTwoLayout = (props: any) => {
  const { img } = props || {};

  return (
    <div className={"slider-container min-height"}>
      <CaptionBlock {...props} />
      <div
        className={"image-block"}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default SlideTwoLayout;
