const StyleDictionary = require("style-dictionary").extend(
  __dirname + "/config.json"
);
const _ = require("lodash");
const tinycolor = require("tinycolor2");

const {
  fileHeader,
  variablesWithPrefix,
  sassMultiMap,
  sassVarName
} = require("./formatters");

/**
 * Transforms
 */
StyleDictionary.registerTransform({
  name: "name/bem",
  type: "name",
  transformer: (prop, options) => {
    // Get the properties
    const { attributes } = prop;
    const category =
      typeof attributes.category !== "undefined" ? attributes.category : null;
    const type =
      typeof attributes.type !== "undefined" ? attributes.type : null;
    const item =
      typeof attributes.item !== "undefined" ? attributes.item : null;
    const subitem =
      typeof attributes.subitem !== "undefined" ? attributes.subitem : null;
    const state =
      typeof attributes.state !== "undefined" ? attributes.state : null;

    // Map categories to prefixes
    const catPrefixes = {
      color: "c",
      "background-color": "bg",
      // 'text-color': 'tc',
      layer: "layer",
      "font-weight": "fw",
      "font-size": "fs",
      // 'font-style': 'fstyle',
      breakpoint: "bp",
      "line-height": "lh",
      border: "border",
      "border-radius": "br",
      dimension: "dim",
      size: "size",
      layout: "l",
      margin: "m",
      padding: "p"
    };

    // Reformat the category name to be shorter
    const newCat = catPrefixes[category] || category;

    // Build the name
    let newName = newCat;

    if (type && type !== "base") {
      newName += `__${type}`;
    }

    if (item && item !== "base") {
      newName += `-${item}`;
    }

    if (subitem && subitem) {
      newName += `_${subitem}`;
    }

    if (state) {
      newName += `--${state}`;
    }

    return newName;
  }
});

StyleDictionary.registerTransform({
  name: "size/pxToRem",
  type: "value",
  matcher: prop =>
    prop.attributes.category === "size" ||
    prop.attributes.category === "layout" ||
    prop.attributes.category === "font-size" ||
    prop.attributes.category === "line-height" ||
    prop.attributes.category === "spacing" ||
    prop.attributes.category === "border-radius" ||
    (prop.attributes.category === "components" &&
      prop.attributes.item === "border-radius") ||
    (prop.attributes.category === "components" &&
      prop.attributes.item === "width"),
  transformer: prop => {
    if (prop.original.value === 0) {
      return "0";
    }

    return (parseInt(prop.original.value) / 16).toString() + "rem";
  }
});

StyleDictionary.registerTransform({
  name: "font/family/css",
  type: "value",
  matcher: prop =>
    prop.attributes.category === "font-family" ||
    (prop.attributes.category === "font" && prop.attributes.type === "family"),
  transformer: prop =>
    prop.original.fallback
      ? prop.original.value + ", " + prop.original.fallback
      : prop.original.value
});

StyleDictionary.registerTransform({
  name: "name/figma",
  type: "name",
  transformer: prop => {
    let name = prop.path;
    let newName = name
      .map(word => {
        return word
          .split("-")
          .map(str => {
            return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
          })
          .join(" ");
      })
      .join(" / ");
    return newName;
  }
});

StyleDictionary.registerTransform({
  name: "color/figma",
  type: "value",
  matcher: prop => {
    const matches = ["color", "text-color", "background-color", "border-color"];
    return matches.indexOf(prop.attributes.category) > -1;
  },
  transformer: prop => {
    const color = tinycolor(prop.value);
    const colorRgb = color.toRgb();
    const { r, g, b, a } = colorRgb;
    const figmaPaint = {
      opacity: a,
      color: {
        r: r / 255,
        g: g / 255,
        b: b / 255
      }
    };
    const figmaPaintStyle = {
      paints: [
        {
          type: "SOLID",
          visible: true,
          ...figmaPaint
        }
      ]
    };
    return figmaPaintStyle;
  }
});

StyleDictionary.registerTransform({
  name: "font-style/figma",
  type: "value",
  matcher: prop => {
    const matches = ["font-family", "font-size", "line-height", "font-weight"];
    return matches.indexOf(prop.attributes.category) > -1;
  },
  transformer: prop => {
    const value = prop.value;
    return value;
  }
});

/**
 * Transform Groups
 */
StyleDictionary.registerTransformGroup({
  name: "heartwood/scss",
  transforms: [
    "attribute/cti",
    "name/bem",
    "time/seconds",
    "content/icon",
    "size/pxToRem",
    "font/family/css",
    "color/css",
    "asset/base64"
  ]
});

StyleDictionary.registerTransformGroup({
  name: "heartwood/js-scss",
  transforms: ["attribute/cti", "name/bem", "size/px", "color/hex"]
});

StyleDictionary.registerTransformGroup({
  name: "figma",
  transforms: ["attribute/cti", "size/px", "name/figma", "color/figma", "font-style/figma"]
});

/**
 * Formats
 */
StyleDictionary.registerFormat({
  name: "scss/defaults",
  formatter: function(dictionary) {
    return (
      fileHeader(this.options) +
      variablesWithPrefix("$", dictionary.allProperties)
    );
  }
});

StyleDictionary.registerFormat({
  name: "scss/map-multi",
  formatter: function(dictionary) {
    return sassMultiMap({
      mapPrefix: this.mapPrefix || "",
      properties: dictionary.allProperties
    });
  }
});

StyleDictionary.registerFormat({
  name: "scss/theme",
  formatter: dictionary => `
/**
 * Edit values to override the base theme
 */

${dictionary.allProperties
  .map(prop => `$${prop.name}: ${prop.value};`)
  .join("\n")}
`
});

StyleDictionary.registerFormat({
  name: "json/flat-dash",
  formatter: function(dictionary) {
    return (
      "{\n" +
      _.map(dictionary.allProperties, function(prop) {
        return `  "${prop.path.join("-")}": ${JSON.stringify(prop.value)}`;
      }).join(",\n") +
      "\n}"
    );
  }
});

StyleDictionary.registerFormat({
  name: "figma/color",
  formatter: dictionary => {
    return `
{
  ${dictionary.allProperties.map(
    prop => `"${prop.name}": ${JSON.stringify(prop.value, null, 2)}`
  )}
}
`;
  }
});

StyleDictionary.registerFormat({
  name: 'figma/font-style',
  formatter: dictionary => {
    let styles = dictionary.properties['platform']['figma']['font-style'];
    let figmaStyles = {}
    const buildStyle = ({baseStyle, dest, styleKey, fontStyle, nest = true}) => {
      const key = nest ? `${styleKey} / ${fontStyle}` : styleKey
      dest[key] = {
        fontName: {
          family: baseStyle.family.value.replace("'", ""),
          style: fontStyle
        },
        fontSize: baseStyle['font-size'].value,
        lineHeight: {
          value: baseStyle['line-height'].value,
          unit: baseStyle['line-height'].unit || 'PIXELS'
        },
        textDecoration: baseStyle.textDecoration ? baseStyle.textDecoration.value : '',
        letterSpacing: {
          value: baseStyle.letterSpacing ? baseStyle.letterSpacing.value : 0,
          unit: baseStyle.letterSpacing ? baseStyle.letterSpacing.unit.toUpperCase() : 'PIXELS'
        },
        paragraphIndent: baseStyle.paragraphIndent ? baseStyle.paragraphIndent.value : 0,
        paragraphSpacing: baseStyle.paragraphSpacing ? baseStyle.paragraphSpacing.value : 0,
        textCase: baseStyle.textCase ? baseStyle.textCase.value.toUpperCase() : 'ORIGINAL'
      }
    }
    
    Object.keys(styles).forEach(styleKey => {
      const baseStyle = styles[styleKey]
      const fontStyles = styles[styleKey].styles.value;
      if (fontStyles.length > 1) {
        fontStyles.forEach(fontStyle => {
          buildStyle({dest: figmaStyles, baseStyle, styleKey, fontStyle})
        })
      } else {
        buildStyle({dest: figmaStyles, baseStyle, styleKey, fontStyle: baseStyle.styles.value[0], nest: false})
      }
    })
    return JSON.stringify(figmaStyles, null, 2)
  }
})

/**
 * Filters
 */
StyleDictionary.registerFilter({
  name: "omit",
  matcher: prop => prop.attributes.category !== "size"
});

StyleDictionary.registerFilter({
  name: "tokens",
  matcher: prop =>
    prop.attributes.category !== "components" &&
    prop.attributes.category !== "asset" &&
    prop.attributes.category !== "platform"
});

StyleDictionary.registerFilter({
  name: "tokens/android",
  matcher: prop =>
    prop.attributes.category === "color" ||
    (prop.attributes.category === "size" && prop.attributes.type === "font") &&
    prop.attributes.category !== "platform"
});

StyleDictionary.registerFilter({
  name: "tokens/ios",
  matcher: prop =>
    prop.attributes.category === "color" ||
    (prop.attributes.category === "size" && prop.attributes.type === "font") &&
    prop.attributes.category !== "platform"
});

StyleDictionary.registerFilter({
  name: "components",
  matcher: prop => prop.attributes.category === "components"
});

StyleDictionary.registerFilter({
  name: "figma/color-styles",
  matcher: prop => {
    const matches = ["color", "text-color", "background-color", "border-color"];
    return matches.indexOf(prop.attributes.category) > -1;
  }
});

StyleDictionary.registerFilter({
  name: "figma/font-styles",
  matcher: prop => {
    const match = prop.attributes.category === 'platform' && prop.attributes.type === 'figma' && prop.attributes.item === 'font-style';
    return match;
  }
});

StyleDictionary.registerFilter({
  name: 'figma/shared-styles',
  matcher: prop => {
    const matches = ["color", "text-color", "background-color", "border-color"];
    const match = prop.attributes.category === 'platform' && prop.attributes.type === 'figma' && prop.attributes.item === 'font-style';
    return matches.indexOf(prop.attributes.category) > -1 || match
  }
})

/**
 * Build command
 */
StyleDictionary.buildAllPlatforms();
