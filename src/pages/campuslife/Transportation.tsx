import SinglePageLayout from "@layouts/SinglePageLayout";
import image from "@assets/map.jpg";

const Transportation = () => {
  return (
    <SinglePageLayout>
      <div className={"transport-page"}>
        <div className={"heading-h3"}>Maps and Transportation</div>
        <div className={"divider"}></div>
        <div className={"body info-body"}>
          <div className={"info-container"}>
            <div>Map</div>
            <div className={"darkgrey-text"}>
              <div>You can find us at:.</div>
              <div>
                <div>
                  Jalan Sunsuria, Bandar Sunsuria, 43900 Sepang, Selangor Darul
                  Ehsan, Malaysia
                </div>
                <div>Button linked to Gmaps</div>
              </div>
            </div>
          </div>
          <div className={"info-container"}>
            <div>Transportation</div>
            <div className={"darkgrey-text"}>
              Public transportation is available. A map is attached below.
              <table>
                <tr>
                  <th>Method</th>
                  <th>Path</th>
                </tr>
                <tr>
                  <td>ERL</td>
                  <td>KL Sentral - Salak Tinggi</td>
                </tr>
              </table>
            </div>
            <img src={image} alt="map" width="600px" />
          </div>
        </div>
      </div>
    </SinglePageLayout>
  );
};

export default Transportation;
