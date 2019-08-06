import { graphql, Link } from "gatsby";
import * as React from "react";
import ReactMarkdown from 'react-markdown'
import Layout from "../layouts/Layout/Layout";
import readme from '../../README.md'
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
        <div>
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
            <div className="index-section__inner--narrow">
              <ReactMarkdown source={readme} className="index__md" />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
