import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import tokensIOS from "../../../build/js/tokens-ios-swift";
import "../tokens.scss";

const IOSPage = (): React.ReactElement => <TokensLayout platform="ios" tokens={tokensIOS} />;

export default IOSPage
