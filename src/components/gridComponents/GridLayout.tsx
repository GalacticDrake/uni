import Card from "@components/cardComponents/Card";
import "@styles/gridComponents.scss";

const GridLayout = (props: any) => {
  const { headline, content } = props || {};
  const { isHeadingAvailable, isGridItem } = props || false;

  return (
    <div className={"grid-container"}>
      {isHeadingAvailable && (
        <div className={"top-heading"}>
          <div className={"heading-h3"}>{headline}</div>
          <span className={"material-symbols-outlined"}>arrow_forward</span>
        </div>
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
