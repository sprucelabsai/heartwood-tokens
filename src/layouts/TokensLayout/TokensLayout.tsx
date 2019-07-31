import React, { Component } from "react";
import { Location } from "@reach/router";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import Clipboard from "react-clipboard.js";
import ReactTooltip from "react-tooltip";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import PlatformSwitch from "../../components/PlatformSwitch/PlatformSwitch";
import SizeUnits from "../../components/SizeUnits/SizeUnits";
import Token from "../../components/Token/Token";
import linkIcon from "../../icons/link-icon.svg";
import "../../stylesheets/import-once.scss";
import "./TokensLayout.scss";

interface ITokensLayoutProps {
  platform: Platform;
  tokens: any;
  hasLeftSidebar?: boolean;
}

interface ITokensLayoutState {
  sizeUnit: SizeUnit;
}

export default class TokensLayout extends Component<
  ITokensLayoutProps,
  ITokensLayoutState
> {
  public state = {
    sizeUnit: "rem"
  };

  public onClickSizeUnit = (unit: SizeUnit) => {
    this.setState({
      sizeUnit: unit
    });
  };

  public render(): React.ReactElement {
    const { sizeUnit } = this.state;
    const { platform, tokens } = this.props;
    let host = "";
    if (typeof window !== "undefined") {
      host = window.location.href;
    }

    return (
      <div className="tokens-layout-wrapper">
        <div className="tokens-layout">
          <SidebarNav>
            <>
              <div className="sidebar-nav__section">
                <PlatformSwitch platform={platform} onClick={() => null} />
              </div>
              {platform === "scss" && (
                <div className="sidebar-nav__section">
                  <SizeUnits
                    current={sizeUnit}
                    onClick={this.onClickSizeUnit}
                  />
                </div>
              )}
              <div className="sidebar-nav__section">
                <label className="sidebar-nav__subtitle">Tokens</label>
              </div>
              <ul className="sidebar-nav__list">
                {Object.keys(tokens).map(cat => (
                  <li key={cat} className="sidebar-nav__item">
                    <Link
                      to={cat}
                      className="sidebar-nav__link"
                      activeClass="sidebar-nav__link--active"
                      smooth
                      spy
                      hashSpy
                      duration={200}
                    >
                      {cat.split("-").join(" ")}
                    </Link>
                    {/* TODO: If there are sub nav items, show them here while this one is current */}
                  </li>
                ))}
              </ul>
            </>
          </SidebarNav>
          <main className="tokens-container">
            {tokens &&
              Object.keys(tokens).map(cat => (
                <section className="token-category-section" key={cat} id={cat}>
                  <Clipboard
                    className="tokens-section-link"
                    data-clipboard-text={
                      platform === "scss"
                        ? `${host}/tokens#${cat}`
                        : `${host}/tokens/${platform}#${cat}`
                    }
                  >
                    <h2 className="title-sm tokens-category__title">
                      <img
                        className="heading__link-icon"
                        src={linkIcon}
                        width={24}
                        height={24}
                        alt="click to copy"
                      />
                      <span>{cat.split("-").join(" ")}</span>
                    </h2>
                  </Clipboard>
                  {Object.keys(tokens[cat]).map(type => {
                    if (!tokens[cat][type].value) {
                      return (
                        <section
                          className="token-type-section"
                          key={type}
                          id={`${cat}_${type}`}
                        >
                          <h3 className="tokens-type__title h4">{type}</h3>
                          {Object.keys(tokens[cat][type]).map(item => {
                            if (!tokens[cat][type][item].value) {
                              return (
                                <section
                                  className="token-item-section"
                                  key={item}
                                  id={`${cat}_${type}_${item}`}
                                >
                                  <h4 className="tokens-item__title">{item}</h4>
                                  {Object.keys(tokens[cat][type][item]).map(
                                    subitem => (
                                      <div key={subitem}>
                                        <p>{subitem}</p>
                                      </div>
                                    )
                                  )}
                                </section>
                              );
                            }
                            return (
                              <Token
                                key={item}
                                token={tokens[cat][type][item]}
                                platform={platform}
                                sizeUnit={sizeUnit}
                              />
                            );
                          })}
                        </section>
                      );
                    }
                    return (
                      <Token
                        key={type}
                        token={tokens[cat][type]}
                        platform={platform}
                        sizeUnit={sizeUnit}
                      />
                    );
                  })}
                </section>
              ))}
          </main>
          <ReactTooltip className="tokens-layout__tooltip" />
        </div>
      </div>
    );
  }
}
