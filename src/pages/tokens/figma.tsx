import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import tokensFigma from "../../../build/js/tokens-figma";

const FigmaPage = (): React.ReactElement => <TokensLayout title="Global Tokens" platform="figma" tokens={tokensFigma} />;

export default FigmaPage
