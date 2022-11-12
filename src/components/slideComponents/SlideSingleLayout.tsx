import CaptionBlock from "./CaptionBlock";

import "@styles/slideComponents.scss";

const SlideSingleLayout = (props: any) => {
  return (
    <div className={"slider-container"}>
      <CaptionBlock {...props} />
    </div>
  );
};

export default SlideSingleLayout;
