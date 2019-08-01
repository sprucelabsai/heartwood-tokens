import React from "react";
import TokensLayout from "../layouts/TokensLayout/TokensLayout";
import tokensScss from "../../build/js/tokens-scss";

const TokensPage = (): React.ReactElement => (
  <TokensLayout title="Global Tokens" platform="scss" tokens={tokensScss} />
);

export default TokensPage;
