import GridLayout from "@components/gridComponents/GridLayout";

const EachCampusLife = () => {
  return <div className={"body"}>To be updated.</div>;
};

const AllCampusLife = (props: any) => {
  return <GridLayout {...props}></GridLayout>;
};

const CampusLifeController = (props: any) => {
  const { isSpecific, isGridItem, main } = props || {};

  return (
    <>
      {!isSpecific ? (
        <AllCampusLife content={main} isGridItem={isGridItem} />
      ) : (
        <EachCampusLife {...props} />
      )}
    </>
  );
};

export default CampusLifeController;
