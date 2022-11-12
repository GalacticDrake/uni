import { Link } from "react-router-dom";

import "@styles/slideComponents.scss";

const CaptionInner = (props: any) => {
  const { caption, bigtitle, title, subtitle, date, button } = props || {};

  return (
    <>
      <div className={"text-block"}>
        <div className={"subtitle-2"}>{caption}</div>
        <div className={"heading-h2"}>{bigtitle}</div>
        <div className={"heading-h3"}>{title}</div>
        <div className={"body"}>{subtitle}</div>
        <div className={"subtitle-1"}>{date}</div>
      </div>
      <div className={"btn-group"}>
        {button.map((item: any) => {
          return (
            <Link key={item.id} to={item.link} className={"btn body"}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

const CaptionBlock = (props: any) => {
  const { img, isCover } = props || {};

  return (
    <>
      {isCover ? (
        <div
          className={"caption-block"}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img}) center`,
          }}
        >
          <CaptionInner {...props} />
        </div>
      ) : (
        <div className={"caption-block"}>
          <CaptionInner {...props} />
        </div>
      )}
    </>
  );
};

export default CaptionBlock;
