import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "@styles/navigation.scss";
import logo from "@assets/logo.png";
import { fetchNavigation } from "@services/mockapi";

const CustomLink = (props: any) => {
  const { to, isMainLink, children, ...prop } = props || {};
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <NavLink
      to={to}
      {...prop}
      className={`navlink body ${isMainLink ? "mainlink" : "sublink"} ${
        isActive ? "active" : ""
      }`}
    >
      {children}
    </NavLink>
  );
};

CustomLink.defaultProps = {
  isMainLink: true,
};

const Dropdown = (props: any) => {
  const { links, label } = props || {};

  return (
    <div className={"navlink body dropdown mainlink"}>
      {label}
      <div className={"dropdown-content bottom-offset"}>
        {links.map((link: any) => {
          return (
            <CustomLink key={link.sublabel} to={link.to} isMainLink={false}>
              {link.sublabel}
            </CustomLink>
          );
        })}
      </div>
    </div>
  );
};

const Navbar = () => {
  const admissions = fetchNavigation("admissions");
  const programmes = fetchNavigation("programmes");
  const campus_life = fetchNavigation("campus_life");
  const about = fetchNavigation("about");

  return (
    <header className={"header"}>
      <div className={"headerInner"}>
        <div className={"logo"}>
          <CustomLink to="/">
            <img src={logo} width="250" alt="logo" />
          </CustomLink>
        </div>
        <nav className={"nav"}>
          <Dropdown label={"About"} links={about} />
          <Dropdown label={"Admissions"} links={admissions} />
          <Dropdown label={"Programmes"} links={programmes} />
          <Dropdown label={"Campus Life"} links={campus_life} />
          <CustomLink to="/e_payment">E-payment</CustomLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
