import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import ReactTooltip from "react-tooltip";
import Clipboard from "react-clipboard.js";
import SEO from "../../components/SEO/SEO";
import copyIcon from "../../icons/copy-icon.svg";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import componentsJson from "../../../build/js/components-scss.js";
import "./ComponentsLayout.scss";

const ComponentsLayout = (): React.ReactElement => {
  const components = componentsJson.components;
  const componentKeys = Object.keys(components);
  return (
    <div className="sidebar-nav-layout">
      <SEO title="Components" />
      <SidebarNav>
        <ul className="sidebar-nav__list">
          {componentKeys.map(type => (
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
      <main className="components-container">
        <h1 className="components-title title-lg">Components</h1>
        {componentKeys.map(typeKey => {
          const type = components[typeKey];
          const itemKeys = Object.keys(type);
          return (
            <section className="components-section" key={typeKey} id={typeKey}>
              <h2 className="components-subtitle title-sm">{typeKey}</h2>
              {itemKeys.map(itemKey => {
                const item = components[typeKey][itemKey];
                const subitemKeys = Object.keys(item);

                if (item.value) {
                  return (
                    <div className="components-subsection" key={itemKey}>
                      <h3 className="heading-lg components-subsection__title">
                        Base values
                      </h3>
                      <div className="components__token">
                        <Clipboard
                          className="token__clipboard"
                          data-clipboard-text={`$${item.name}`}
                          data-tip="Copied to clipboard!"
                          data-event="click"
                          data-effect="solid"
                          data-place="right"
                          onSuccess={() =>
                            setTimeout(() => ReactTooltip.hide(), 1500)
                          }
                        >
                          <img
                            className="token__clipboard-icon"
                            src={copyIcon}
                            width={16}
                            height={16}
                            role="presentation"
                          />
                          <p className="components__token-name">{`$${
                            item.name
                          }`}</p>
                        </Clipboard>
                        <p className="components__token-value">{item.value}</p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="components-subsection" key={itemKey}>
                    <h3 className="heading-lg components-subsection__title">
                      {itemKey}
                    </h3>
                    {subitemKeys.map(subitemKey => {
                      const subitem = components[typeKey][itemKey][subitemKey];
                      const stateKeys = Object.keys(subitem);

                      if (subitem.value) {
                        return (
                          <div key={subitemKey}>
                            <label className="components-label">
                              Base Values
                            </label>
                            <div className="components__token">
                              <Clipboard
                                className="token__clipboard"
                                data-clipboard-text={`$${subitem.name}`}
                                data-tip="Copied to clipboard!"
                                data-event="click"
                                data-effect="solid"
                                data-place="right"
                                onSuccess={() =>
                                  setTimeout(() => ReactTooltip.hide(), 1500)
                                }
                              >
                                <img
                                  className="token__clipboard-icon"
                                  src={copyIcon}
                                  width={16}
                                  height={16}
                                  role="presentation"
                                />
                                <p className="components__token-name">{`$${
                                  subitem.name
                                }`}</p>
                              </Clipboard>
                              <p className="components__token-value">
                                {subitem.value}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={subitemKey} className="components-subsection">
                          <h4 className="components-subsection__subtitle">
                            {subitemKey.split("-").join(" ")}
                          </h4>
                          <label className="components-label">States</label>
                          {stateKeys.map(stateKey => {
                            const state =
                              components[typeKey][itemKey][subitemKey][
                                stateKey
                              ];

                            return (
                              <div key={stateKey} className="components__token">
                                <Clipboard
                                  className="token__clipboard"
                                  data-clipboard-text={`$${state.name}`}
                                  data-tip="Copied to clipboard!"
                                  data-event="click"
                                  data-effect="solid"
                                  data-place="right"
                                  onSuccess={() =>
                                    setTimeout(() => ReactTooltip.hide(), 1500)
                                  }
                                >
                                  <img
                                    className="token__clipboard-icon"
                                    src={copyIcon}
                                    width={16}
                                    height={16}
                                    role="presentation"
                                  />
                                  <p className="components__token-name">{`$${
                                    state.name
                                  }`}</p>
                                </Clipboard>
                                <p className="components__token-value">
                                  {state.value}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </section>
          );
        })}
      </main>
      <ReactTooltip className="tokens-layout__tooltip" />
    </div>
  );
};

export default ComponentsLayout;
