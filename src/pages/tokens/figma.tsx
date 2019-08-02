import React from "react";
import TokensLayout from "../../layouts/TokensLayout/TokensLayout";
import Card from "../../components/Card/Card";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import tokensFigma from "../../../build/js/tokens-figma";
import figmaIcon from "../../icons/figma-icon.svg";
import "./figma.scss";

const FigmaPage = (): React.ReactElement => (
  <TokensLayout title="Global Tokens" platform="figma" tokens={tokensFigma}>
    <>
      <h2 className="figma-tokens__resources-headline">Resources</h2>
      <ResourceCard
        href="https://www.figma.com/file/ByFnA60kWEES79qherfepN/Heartwood-Tokens?node-id=0%3A1"
        target="_blank"
        className="figma-tokens__card"
        icon={{ src: figmaIcon, width: 24, alt: "Figma Logo" }}
      >
        <>
          <p className="fw-bold">Heartwood Tokens</p>
          <p>Open the latest Heartwood Tokens file in Figma</p>
        </>
      </ResourceCard>
    </>
  </TokensLayout>
);

export default FigmaPage;
