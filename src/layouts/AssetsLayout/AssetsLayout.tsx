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
      {Object.keys(assets.asset).map(typeKey => {
        const type = assets.asset[typeKey];
        return (
          <section key={typeKey} className="assets-section">
            <div className="assets-section__inner">
              <h2 className="asset-group-title title-sm">{typeKey}</h2>
              {Object.keys(type).map(itemKey => {
                const item = type[itemKey];
                const itemName = itemKey.split("-").join(" ");
                if (item.value) {
                  return (
                    <Asset key={itemKey} name={itemName} src={item.value} />
                  );
                }
                return (
                  <div key={itemKey}>
                    <h3>{itemKey}</h3>
                    {Object.keys(item).map(subitemKey => {
                      const subitem = item[subitemKey];
                      const subitemName = subitemKey.split("-").join(" ");

                      return (
                        <Asset
                          key={subitemKey}
                          name={subitemName}
                          src={subitem.value}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AssetsLayout;
