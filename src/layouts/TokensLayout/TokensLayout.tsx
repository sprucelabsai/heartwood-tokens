import React, { Component } from "react";
import { Location } from "@reach/router";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import Clipboard from "react-clipboard.js";
import ReactTooltip from "react-tooltip";
import SEO from "../../components/SEO/SEO";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import PlatformSwitch from "../../components/PlatformSwitch/PlatformSwitch";
import SizeUnits from "../../components/SizeUnits/SizeUnits";
import Token from "../../components/Token/Token";
import linkIcon from "../../icons/link-icon.svg";
import "../../stylesheets/import-once.scss";
import "./TokensLayout.scss";

const platNames = {
  scss: "Web",
  ios: "Swift",
  javascript: "Javascript",
  android: "Android",
  figma: "Figma"
};

interface ITokensLayoutProps {
  title: string;
  platform: Platform;
  tokens: any;
  hasLeftSidebar?: boolean;
  children?: React.ReactElement
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
    const { platform, tokens, title, children } = this.props;
    const showSizeUnits = platform === 'scss' || platform === 'javascript';
    let host = "";
    if (typeof window !== "undefined") {
      host = window.location.host;
    }

    return (
      <div className="tokens-layout-wrapper">
        <SEO title={`${title} for ${platNames[platform]}`} />
        <div className="sidebar-nav-layout">
          <SidebarNav>
            <>
              <div className="sidebar-nav__section">
                <PlatformSwitch platform={platform} tokens={platform === 'figma' && tokens} />
              </div>
              {showSizeUnits && (
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
                {Object.keys(tokens).map(cat => {
                  const category = tokens[cat];
                  return (
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
                      {!category[Object.keys(category)[0]].name && (
                        <ul className="sidebar-nav__nested-nav">
                          {Object.keys(category).map(type => (
                            <li key={type} className="sidebar-nav__item">
                              <Link
                                to={`${cat}_${type}`}
                                className="sidebar-nav__link"
                                activeClass="sidebar-nav__link--active"
                                smooth
                                spy
                                hashSpy
                                duration={200}
                              >
                                {type}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          </SidebarNav>
          <main className="tokens-container">
            <h1 className="title-lg assets-section__inner">{title}</h1>
            {children && children}
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
                                    subitem => {
                                      if (
                                        !tokens[cat][type][item][subitem].value
                                      ) {
                                        return (
                                          <section key={subitem}>
                                            <p>{subitem}</p>
                                            {Object.keys(
                                              tokens[cat][type][item][subitem]
                                            ).map(state => (
                                              <Token
                                                key={state}
                                                token={
                                                  tokens[cat][type][item][
                                                    subitem
                                                  ][state]
                                                }
                                                platform={platform}
                                                sizeUnit={sizeUnit}
                                              />
                                            ))}
                                          </section>
                                        );
                                      }

                                      return (
                                        <Token
                                          key={subitem}
                                          token={
                                            tokens[cat][type][item][subitem]
                                          }
                                          platform={platform}
                                          sizeUnit={sizeUnit}
                                        />
                                      );
                                    }
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
