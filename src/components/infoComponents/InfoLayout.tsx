import RowContainer from "@components/cardComponents/RowContainer";
import SpecificCampusLife from "@pages/campuslife/CampusLifeController";
import SpecificProgrammes from "@pages/programmes/SpecificProgrammes";
import "@styles/infoComponents.scss";

import { Link } from "react-router-dom";

const Dropdown = (props: any) => {
  const { content, active, isSubcategory } = props || {};
  let temp_active = null;

  if (isSubcategory && active === null) temp_active = "Show all";
  else temp_active = active;

  console.log(temp_active);

  return (
    <div className={"navlink dropdown breadcrumb-navlink"}>
      <div className={"dropdown-label blue-text"}>
        {temp_active}
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      <div className={"dropdown-content"}>
        {isSubcategory && active !== null && (
          <Link to={""} relative="path" className={"sublink"}>
            {"Show all"}
          </Link>
        )}
        {content.map((item: any, index: number) => {
          return (
            <>
              <Link
                key={index}
                to={
                  isSubcategory ? `./?category=${item.link}` : `../${item.link}`
                }
                relative="path"
                className={"sublink"}
              >
                {item.label}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

const InnerNavigation = (props: any) => {
  const { programmes, allProgrammes, category, subcategory } = props || {};

  return (
    <div className={"breadcrumb-nav body"}>
      <Dropdown content={programmes} active={category} />
      <Dropdown
        content={allProgrammes}
        active={subcategory}
        isSubcategory={true}
      />
    </div>
  );
};

const Breadcrumb = (props: any) => {
  const { main, type, isSpecific, allowBackToParent } = props || {};

  return (
    <div className={"breadcrumb body-bold"}>
      {main && isSpecific && allowBackToParent ? (
        <Link to={".."} relative="path" className={"navlink navlink-hover"}>
          {type}
        </Link>
      ) : (
        type
      )}
      {main && isSpecific && (
        <>
          <span className={"material-symbols-outlined navlink"}>
            chevron_right
          </span>
          <span className={"static"}>{main?.title}</span>
        </>
      )}
    </div>
  );
};

Breadcrumb.defaultProps = {
  allowBackToParent: true,
};

const InfoLayout = (props: any) => {
  const { main, isSpecific, setNavigation } = props || {};
  const { showCourse, isGridItem } = props || false;

  try {
    return (
      <div className={"info-main"}>
        {/* print breadcrumb or navigation */}
        {setNavigation ? (
          <InnerNavigation {...props} />
        ) : (
          <Breadcrumb {...props} />
        )}
        <div className={"divider"}></div>
        {/* start of contents */}
        {!isGridItem && !isSpecific && <RowContainer {...props} />}

        {/* for informative contents */}
        {main.info && isSpecific && (
          <>
            {main.date && (
              <div className={"body date-container"}>
                Published date: {main?.date}
              </div>
            )}
            <div className={"info-body body"}>
              {main.info.map((item: any) => {
                return (
                  <div key={item?.id} className={"info-container"}>
                    <div>{item?.info_title}</div>
                    <div className={"darkgrey-text"}>{item?.info_body}</div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {showCourse && <SpecificProgrammes {...props} />}

        {/* facility */}
        {isGridItem && <SpecificCampusLife {...props} />}
      </div>
    );
  } catch (e) {
    return (
      <div className={"body"}>
        Are you at the right page? Return to <Link to="/">Homepage</Link>
      </div>
    );
  }
};

export default InfoLayout;
