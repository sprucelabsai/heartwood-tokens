import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import tokensAndroid from "../../../build/js/tokens-android";

const AndroidPage = (): React.ReactElement => <TokensLayout title="Global Tokens" platform="android" tokens={tokensAndroid} />;

export default AndroidPage
