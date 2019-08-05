import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout/Layout";
import logo from "../images/spruce-logo.svg";
import globalTokensImage from "../images/global-tokens.png";
import assetsImage from "../images/assets.png";
import "./index.scss";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <div className="debhug">
          <section className="index-intro index-section">
            <div className="index-section__inner">
              <img src={logo} width={80} alt="spruce logo" />
              <h1 className="index-title title-lg">{name}</h1>
            </div>
          </section>
          <section className="index-section index-section--centered">
            <div className="index-section__inner">
              <label className="index-section__label">
                WTF are Design Tokens?
              </label>
              <blockquote className="index-section-quote">
                Design tokens are the smallest pieces of the Heartwood design
                system — basically anything that can be described using letters
                and numbers.
              </blockquote>
              <div className="index-page-link-wrapper flex-parent">
                <Link className="index-page-link flex-child" to="/tokens">
                  <img
                    src={globalTokensImage}
                    width={430}
                    alt="global tokens"
                  />
                  <p className="index-page-link__title">Global Tokens</p>
                  <p className="index-page-link__subtitle">
                    Colors, sizes, spacing, typography, layers, and layouts
                  </p>
                </Link>
                <Link className="index-page-link flex-child" to="/assets">
                  <img src={assetsImage} width={430} alt="assets" />
                  <p className="index-page-link__title">Assets</p>
                  <p className="index-page-link__subtitle">
                    Icons, logos, and wordmarks.
                  </p>
                </Link>
              </div>
            </div>
          </section>
          <section className="index-section index-section">
            <div className="index-section__inner">
              <h2 className="title-sm">Usage</h2>
                <h3>Sass</h3>
                <h4>Install via yarn or npm</h4>
                <p>
                  <code>yarn install @sprucelabs/heartwood-tokens</code> or{" "}
                  <code>npm install @sprucelabs/heartwood-tokens</code>
                </p>

                <h4>Import _tokens.scss</h4>
                <p>
                  The easiest way to consume Heartwood Tokens is to import them
                  into a <code>.scss</code> file and use the variables generated
                  by Style Dictionary.
                </p>
                <p>
                  <code>
                    @import "~@sprucelabs/heartwood-tokens/build/scss/tokens";
                  </code>
                </p>
                <p>
                  <strong>Note: </strong>depending on how you want to build your
                  styles, it may be necessary to update your{" "}
                  <code>webpack.config.js</code>, <code>gulpfile.js</code>, or
                  whatever other build tool you're using.
                </p>

                <h4>Import _components.scss</h4>
                <p>
                  Once global tokens are imported, you can also use component
                  tokens.
                </p>
                <p>
                  <code>
                    @import
                    "~@sprucelabs/heartwood-tokens/build/scss/components";
                  </code>
                </p>

                <h4>Theming</h4>
                <p>
                  All of the variables generated in Heartwood Tokens use a{" "}
                  <code>!default</code> flag to make theming easy. The best way
                  to override variables is to import your overrides first, and
                  then import tokens:
                </p>
                <p>
                  <code>@import "my-theme.scss"</code>
                </p>
                <p>
                  <code>
                    @import "~@sprucelabs/heartwood-tokens/build/scss/tokens";
                  </code>
                </p>
                <p>
                  <code>
                    @import
                    "~@sprucelabs/heartwood-tokens/build/scss/components";
                  </code>
                </p>
                <p>
                  In <code>my-theme.scss</code>, you could for example change
                  the primary color by adding:
                </p>
                <p>
                  <code>$c__primary: #4c3cff;</code>
                </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
