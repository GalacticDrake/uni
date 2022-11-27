import Card from "@components/cardComponents/Card";
import "@styles/gridComponents.scss";
import { Link } from "react-router-dom";

const GridLayout = (props: any) => {
  const { headline, content, link } = props || {};
  const { isHeadingAvailable, isGridItem } = props || false;

  return (
    <div className={"grid-container"}>
      {isHeadingAvailable && (
        <Link to={link} className={"top-link"}>
          <div className={"top-heading"}>
            <div className={"heading-h3"}>{headline}</div>
            <span className={"material-symbols-outlined"}>arrow_forward</span>
          </div>
        </Link>
      )}
      <div className={"card-container"}>
        {content.map((item: any) => {
          return (
            <Card
              {...props}
              key={item.id}
              content={item}
              isGridItem={isGridItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridLayout;
