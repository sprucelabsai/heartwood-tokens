import React from "react";
import TokensLayout from "../layouts/TokensLayout/TokensLayout";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import tokensScss from "../../build/js/tokens-scss";
import './tokens.scss'

const TokensPage = (): React.ReactElement => (
  <TokensLayout title="Global Tokens" platform="scss" tokens={tokensScss}>
    <div className="tokens-usage">
      <h2 className="h3 tokens-usage__title">Usage</h2>
      <p className="tokens-usage__instruction">
        <strong className="tokens-usage__label">Install: </strong>{" "}
        <CodeSnippet text="yarn add @sprucelabs/heartwood-tokens" />
      </p>
      <p className="tokens-usage__instruction">
        <strong className="tokens-usage__label">Import: </strong>{" "}
        <CodeSnippet text={`@import '@sprucelabs/heartwood-tokens/build/scss/tokens';`} />
      </p>
    </div>
  </TokensLayout>
);

export default TokensPage;
