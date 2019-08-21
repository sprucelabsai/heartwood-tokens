import React from "react";
import Clipboard from "react-clipboard.js";
import tinycolor from "tinycolor2";
import ReactTooltip from "react-tooltip";
import copyIcon from "../../icons/copy-icon.svg";
import tokensScss from "../../../build/js/tokens-scss";
import "./Token.scss";

// TODO: Animate the click-to-copy

export interface ITokenProps {
  token: Token;
  platform: Platform;
  sizeUnit: SizeUnit;
}

const swatchCats = [
  "color",
  "background-color",
  "border-color",
  "border-radius",
  "layer",
  "spacing"
];

const textCats = [
  "font-family",
  "font-size",
  "line-height",
  "font-weight",
  "text-color"
];

const platformName = ({
  name,
  platform
}: {
  name: string;
  platform: Platform;
}): string => {
  let str = name;
  if (platform === "scss") {
    str = `$${name}`;
  }
  return str;
};

const getOriginalValue = (originalValue: string): string =>
  originalValue.replace(".value", "");

const Token = (props: ITokenProps): React.ReactElement => {
  const { token, platform, sizeUnit } = props;
  const { attributes, original } = token;
  const { category } = attributes;
  let textSample = "Hello human!";
  let value = token.value;
  if (typeof value !== "string") {
    value = null;
  }

  // Get this token from the scss file so that we can format it on web
  const scssTokens = tokensScss;
  let scssToken = scssTokens[category];

  // Escape if the scssToken doesn't exist
  if (typeof scssToken === "undefined") {
    return null;
  }

  // Find the exact scssToken for styling
  if (typeof attributes.type !== "undefined") {
    scssToken = scssTokens[category][attributes.type];
    if (typeof attributes.item !== "undefined") {
      scssToken = scssTokens[category][attributes.type][attributes.item];
      if (typeof attributes.subitem !== "undefined") {
        scssToken =
          scssTokens[category][attributes.type][attributes.item][
            attributes.subitem
          ];
        if (typeof attributes.state !== "undefined") {
          scssToken =
            scssTokens[category][attributes.type][attributes.item][
              attributes.subitem
            ][attributes.state];
        }
      }
    }
  }

  let style = {
    backgroundColor: null,
    borderRadius: null,
    border: null,
    boxShadow: null,
    height: null,
    width: null,
    color: null,
    fontFamily: null,
    fontSize: null,
    fontWeight: null,
    lineHeight: null,
    padding: null
  };
  const name = platformName({ name: token.name, platform });
  if (swatchCats.indexOf(category) > -1 && category !== "spacing") {
    style = {
      ...style,
      borderRadius: "2px"
    };
  }
  if (attributes.type === "color" || attributes.type === "background-color") {
    style = {
      ...style,
      backgroundColor: scssToken.value
    };

    if (tinycolor.readability(scssToken.value, "#fff") < 2) {
      style = {
        ...style,
        border: `1px solid ${tinycolor(scssToken.value).darken(5)}`
      };
    }
  }
  if (attributes.type === "text-color") {
    style = {
      ...style,
      color: scssToken.value
    };

    if (attributes.item && attributes.item === "code") {
      style = {
        ...style,
        fontFamily: tokensScss["font-family"].code.value,
        backgroundColor: tokensScss[category]['background-color'].dark.value,
        padding: "0.5rem 1rem"
      };

      textSample = "<hello human>";
    }
  }
  if (attributes.type === "border-color") {
    style = {
      ...style,
      backgroundColor: tokensScss.day["background-color"].base.value,
      border: `1px solid ${scssToken.value}`
    };
  }
  if (category === "layer") {
    style = {
      ...style,
      backgroundColor: "#fff",
      boxShadow: scssToken.value,
      height: "5rem",
      width: "5rem"
    };
  }
  if (category === "border-radius") {
    style = {
      ...style,
      backgroundColor: "#fff",
      borderRadius: scssToken.value,
      border: `1px solid ${tokensScss["border-color"].base.value}`
    };
  }
  if (category === "spacing") {
    style = {
      ...style,
      width: "20rem",
      height: scssToken.value === "0" ? "1px" : scssToken.value
    };
  }
  if (category === "font-size") {
    style = {
      ...style,
      fontSize: scssToken.value
    };
  }
  if (category === "font-family") {
    style = {
      ...style,
      fontFamily: scssToken.value
    };
  }
  if (category === "line-height") {
    style = {
      ...style,
      lineHeight: scssToken.value,
      backgroundColor: tinycolor(
        tokensScss.day["color"].primary.base.value
      ).setAlpha(0.3),
      padding: "0 1rem"
    };
  }
  if (category === "font-weight") {
    style = {
      ...style,
      fontWeight: scssToken.value
    };
  }

  // Formatting units
  if (
    typeof value === "string" &&
    value.indexOf("rem") > -1 &&
    sizeUnit === "px"
  ) {
    value = `${parseFloat(value) * 16}px`;
  }

  return (
    <>
      <div className="token">
        <span className="token__description">
          {value ? (
            <>
              <Clipboard
                className="token__clipboard"
                data-clipboard-text={name}
                data-tip="Copied to clipboard!"
                data-event="click"
                data-effect="solid"
                data-place="right"
                onSuccess={() => setTimeout(() => ReactTooltip.hide(), 1500)}
              >
                <img
                  className="token__clipboard-icon"
                  src={copyIcon}
                  width={16}
                  height={16}
                  role="presentation"
                />
                <code className="token__name">{name}</code>
              </Clipboard>
                <code className="token__value">{value}</code>
            </>
          ) : (
            <code className="token__name token__name--plain">{name}</code>
          )}
        </span>

        <span className="token__sample">
          {attributes.type && swatchCats.indexOf(attributes.type) > -1 && (
            <div className="token__swatch" style={style} />
          )}
          {(textCats.indexOf(category) > -1 || (attributes.type && textCats.indexOf(attributes.type) > -1)) && (
            <p className="token__text-sample" style={style}>
              {textSample}
            </p>
          )}
        </span>
      </div>
      {original.comment && (
        <p className="py-4 pt-0 tc-copy-lighter">{original.comment}</p>
      )}
    </>
  );
};

export default Token;
