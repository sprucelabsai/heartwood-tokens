import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import Asset from "../../components/Asset/Asset";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import assets from "../../../build/js/assets-base64.js";
import "./AssetsLayout.scss";

const AssetsLayout = (): React.ReactElement => {
  return (
    <div className="sidebar-nav-layout">
      <Helmet titleTemplate="%s | Heartwood Tokens">
        <title>Assets</title>
      </Helmet>
      <SidebarNav>
        <ul className="sidebar-nav__list">
          {Object.keys(assets.asset).map(type => (
            <li key={type} className="tokens-nav__item">
              <Link
                to={type}
                className="sidebar-nav__link"
                activeClass="sidebar-nav__link--active"
                smooth
                spy
                hashSpy
                duration={200}
              >
                {type.split("-").join(" ")}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarNav>
      <main className="assets-container">
        <div className="assets-section">
          <h1 className="title-lg assets-section__inner">Assets</h1>
        </div>
        {Object.keys(assets.asset).map(typeKey => {
          const type = assets.asset[typeKey];
          return (
            <section key={typeKey} className="assets-section" id={typeKey}>
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
      </main>
    </div>
  );
};

export default AssetsLayout;
