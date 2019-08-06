import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import tokensJs from "../../../build/js/tokens";

const JavascriptPage = (): React.ReactElement => <TokensLayout title="Global Tokens" platform="javascript" tokens={tokensJs} />;

export default JavascriptPage
