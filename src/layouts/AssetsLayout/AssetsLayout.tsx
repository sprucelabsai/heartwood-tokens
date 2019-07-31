import React from "react";
import Asset from "../../components/Asset/Asset";
import assets from "../../../build/js/assets-base64.js";
import "./AssetsLayout.scss";

const AssetsLayout = (): React.ReactElement => {
  return (
    <div className="assets-layout">
      <div className=" assets-section">
        <h1 className="title-lg assets-section__inner">Assets</h1>
      </div>
      <section className="assets-section">
        <div className="assets-section__inner">
          {Object.keys(assets.asset.image).map(itemKey => (
            <div key={itemKey}>
              <h2 className="title-sm">{itemKey}</h2>
              {Object.keys(assets.asset.image[itemKey]).map(subitemKey => (
                <Asset
                  key={subitemKey}
                  name={subitemKey}
                  src={assets.asset.image[itemKey][subitemKey].value}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AssetsLayout;
