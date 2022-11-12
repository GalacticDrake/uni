import { Link } from "react-router-dom";

const Sidebar = (props: any) => {
  const { links } = props || {};

  return (
    <div className={"sidebar"}>
      <div className={"heading-h6"}>Quick Links</div>
      <div className={"sidebar-links"}>
        {links &&
          links.map((item: any) => {
            return (
              <Link
                key={item.id}
                to={`${item.link}`}
                className={"navlink body"}
              >
                {item.label}
              </Link>
            );
          })}
        {!links && <span className={"body grey-text"}>No links available</span>}
      </div>
    </div>
  );
};

export default Sidebar;
