import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout/Layout";
import logo from "../images/spruce-logo.svg";
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
              <h2 className="index-subtitle">{tagline}</h2>
              <Link className="index-link" to="/tokens">
                Explore Tokens
              </Link>
              <Link className="index-link" to="/assets">
                See Assets
              </Link>
            </div>
          </section>
          <section className="index-section">
            <div className="index-section__inner index-section__inner--flex">
              <h2 className="index-section-heading">WTF are design tokens?</h2>
              <div>
                <blockquote className="index-section-quote">
                  Design tokens are the smallest pieces of the Heartwood design
                  system — basically anything that can be described using
                  letters and numbers.
                </blockquote>
                <p className="index-section-body">
                  Tokens are platform-agnostic. JSON is the source of truth from
                  which we automatically generate values that can be used for
                  web, iOS, Android, Figma (coming soon), Sketch (also coming
                  soon), and any other platforms that we may find useful in the
                  future.
                </p>
                <p className="index-section-body">
                  Heartwood tokens are organized into two main buckets: global
                  tokens and component tokens. The former are the most commonly
                  used and are shared by the latter, which correspond to
                  specific components (e.g. Button, Input, etc…).
                </p>
                <p className="index-section-body">
                  Fun fact: this site is built with Heartwood tokens!
                </p>
              </div>
            </div>
          </section>
          <section className="index-section">
            <div className="index-section__inner index-section__inner--flex">
              <h2 className="index-section-heading">Usage (Coming Soon)</h2>
              <div>
                <p className="index-section-body">
                  To use Heartwood Tokens, install them with yarn or npm:
                </p>
                <code className="index-section__code-block">
                  yarn install @sprucelabs/heartwood-tokens
                </code>
                <code className="index-section__code-block">
                  npm install @sprucelabs/heartwood-tokens
                </code>
                <p className="index-section-body">
                  How you use the tokens depends on the platform. For example,
                  in a web project, you might import token <code>.scss</code>{" "}
                  files and write stylesheets on top of them.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
