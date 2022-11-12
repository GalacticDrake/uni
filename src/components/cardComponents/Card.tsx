import { Link } from "react-router-dom";
import "@styles/card.scss";

const CardText = (props: any) => {
  const { content, isGridItem } = props || {};

  return (
    <>
      <div
        className={"image-card-block"}
        style={{ backgroundImage: `url(${content.img})` }}
      ></div>
      {isGridItem ? (
        <div className={"body blue-text text-center"}>{content.title}</div>
      ) : (
        <div className={"body blue-text"}>{content.title}</div>
      )}
      <div className={"body"}>{content.body}</div>
      <div className={"subtitle-1 darkgrey-text"}>{content.subtitle}</div>
    </>
  );
};

const CardContent = (props: any) => {
  const { content, isGridItem } = props || {};
  return (
    <>
      {isGridItem ? (
        <Link to={content?.link}>
          <CardText {...props} />
        </Link>
      ) : (
        <CardText {...props} />
      )}
    </>
  );
};

const Card = (props: any) => {
  const { content, isLinksAvailable } = props || {};

  return (
    <div className={"card"}>
      {isLinksAvailable ? (
        <Link to={content?.link}>
          <CardContent {...props} />
        </Link>
      ) : (
        <CardContent {...props} />
      )}
    </div>
  );
};

export default Card;
