import "@styles/layout.scss";

const SinglePageLayout = (props: any) => {
  return (
    <div className="layout">
      <div className="layout-inner">{props.children}</div>
    </div>
  );
};

export default SinglePageLayout;
