import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import PlatformSwitch from "../../components/PlatformSwitch/PlatformSwitch";
import Token from "../../components/Token/Token";
import "../../stylesheets/import-once.scss";
import "./TokensLayout.scss";

interface ITokensLayoutProps {
  platform: Platform;
  tokens: any;
  hasLeftSidebar?: boolean;
}

const TokensLayout = (props: ITokensLayoutProps): React.ReactElement => {
  const { platform, tokens } = props;

  return (
    <div
      className="tokens-layout"
    >
      <aside className="tokens-nav">
        <h1 className="title-sm tokens-nav__title">Heartwood Tokens</h1>
        <div className="tokens-nav__section">
         <PlatformSwitch platform={platform} onClick={() => null} />
        </div>
        <div className="tokens-nav__section">
          <label className="tokens-nav__subtitle">Tokens</label>
        </div>
        <ul className="tokens-nav__list">
          {Object.keys(tokens).map(cat => (
            <li key={cat} className="tokens-nav__item">
              <Link
                to={cat}
                className="tokens-nav__link"
                activeClass="tokens-nav__link--active"
                smooth
                spy
                duration={200}
              >
                {cat.split("-").join(" ")}
              </Link>
              {/* TODO: If there are sub nav items, show them here while this one is current */}
            </li>
          ))}
        </ul>
      </aside>
      <main className="tokens-container">
        {tokens &&
          Object.keys(tokens).map(cat => (
            <section className="token-category-section" key={cat} id={cat}>
              <h2 className="title-sm tokens-category__title">
                {cat.split("-").join(" ")}
              </h2>
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
                  />
                );
              })}
            </section>
          ))}
      </main>
    </div>
  );
};

export default TokensLayout;
