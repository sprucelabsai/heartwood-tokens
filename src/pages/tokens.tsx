import React from "react";
import TokensLayout from "../layouts/TokensLayout/TokensLayout";
import tokensScss from "../../build/js/tokens-scss";
import "./tokens.scss";

const TokensPage = (): React.ReactElement => <TokensLayout platform="scss" tokens={tokensScss} />;

export default TokensPage
