import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import tokensIOS from "../../../build/js/tokens-ios-swift";

const IOSPage = (): React.ReactElement => <TokensLayout title="Global Tokens" platform="ios" kind="token" tokens={tokensIOS} />;

export default IOSPage
