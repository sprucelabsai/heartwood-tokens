const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const _ = require('lodash')
const tinycolor = require('tinycolor2')

const { fileHeader, variablesWithPrefix, sassMultiMap, sassVarName } = require('./formatters')

/**
 * Transforms
 */
StyleDictionary.registerTransform({
  name: 'name/bem',
  type: 'name',
  transformer: (prop, options) => {
    // Get the properties
    const { attributes } = prop;
    const category = typeof attributes.category !== 'undefined' ? attributes.category : null
    const type = typeof attributes.type !== 'undefined' ? attributes.type : null
    const item = typeof attributes.item !== 'undefined' ? attributes.item : null
    const subitem = typeof attributes.subitem !== 'undefined' ? attributes.subitem : null
    const state = typeof attributes.state !== 'undefined' ? attributes.state : null

    // Map categories to prefixes
    const catPrefixes = {
      color: 'c',
      'background-color': 'bg',
      // 'text-color': 'tc',
      layer: 'layer',
      'font-weight': 'fw',
      'font-size': 'fs',
      // 'font-style': 'fstyle',
      'breakpoint': 'bp',
      'line-height': 'lh',
      border: 'border',
      'border-radius': 'br',
      dimension: 'dim',
      size: 'size',
      layout: 'l',
      margin: 'm',
      padding: 'p'
    }

    // Reformat the category name to be shorter
    const newCat = catPrefixes[category] || category

    // Build the name
    let newName = newCat;

    if (type && type !== 'base') {
      newName += `__${type}`
    }

    if (item && item !== 'base') {
      newName += `-${item}`
    }

    if (subitem && subitem) {
      newName += `_${subitem}`
    }

    if (state) {
      newName += `--${state}`
    }

    return newName
  }
})

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: prop =>
    prop.attributes.category === 'size' ||
    prop.attributes.category === 'layout' ||
    prop.attributes.category === 'font-size' ||
    prop.attributes.category === 'line-height' ||
    prop.attributes.category === 'spacing' ||
    prop.attributes.category === 'border-radius',
  transformer: prop => {
    if (prop.original.value === 0) {
      return "0"
    }

    return (parseInt(prop.original.value) / 16).toString() + 'rem'
  }
})

StyleDictionary.registerTransform({
  name: 'font/family/css',
  type: 'value',
  matcher: prop => prop.attributes.category === 'font-family' || (prop.attributes.category === 'font' && prop.attributes.type === 'family'),
  transformer: prop => prop.original.fallback ? prop.original.value + ', ' + prop.original.fallback : prop.original.value
})

/**
 * Transform Groups
 */
StyleDictionary.registerTransformGroup({
  name: 'heartwood/scss',
  transforms: [
    'attribute/cti', 'name/bem', 'time/seconds', 'content/icon', 'size/pxToRem', 'font/family/css', 'color/css'
  ]
})

StyleDictionary.registerTransformGroup({
  name: 'heartwood/js-scss',
  transforms: ['attribute/cti', 'name/bem', 'size/px', 'color/hex']
})

/**
 * Formats
 */
StyleDictionary.registerFormat({
  name: 'scss/defaults',
  formatter: function (dictionary) {
    return fileHeader(this.options) + variablesWithPrefix('$', dictionary.allProperties);
  }
})

StyleDictionary.registerFormat({
  name: 'scss/map-multi',
  formatter: function (dictionary) {
    return sassMultiMap({ mapPrefix: this.mapPrefix || '', properties: dictionary.allProperties });
  }
})

StyleDictionary.registerFormat({
  name: 'scss/theme',
  formatter: dictionary => `
/**
 * Edit values to override the base theme
 */

${dictionary.allProperties.map(prop => `$${prop.name}: ${prop.value};`).join('\n')}
`
})

StyleDictionary.registerFormat({
  name: 'json/flat-dash',
  formatter: function (dictionary) {
    return '{\n' + _.map(dictionary.allProperties, function (prop) {
      return `  "${prop.path.join('-')}": ${JSON.stringify(prop.value)}`;
    }).join(',\n') + '\n}';
  }
})

StyleDictionary.registerFormat({
  name: 'figma/color',
  formatter: function (dictionary) {
    return '{\n' + _.map(dictionary.allProperties, function (prop) {
      const color = tinycolor(prop.value)
      const colorRgb = color.toRgb();
      const { r, g, b, a } = colorRgb
      const figmaPaint = {
        opacity: a,
        color: {
          r: r / 255,
          g: g / 255,
          b: b / 255
        }
      }
      const figmaPaintStyle = {
        paints: [
          {
            type: 'SOLID',
            visible: true,
            ...figmaPaint
          }
        ]
      }
      if (color.isValid()) {
        return `  "${prop.path.join(' / ')}": ${JSON.stringify(figmaPaintStyle)}`;
      }
    }).join(',\n') + '\n}';
  }
})

/**
 * Filters
 */
StyleDictionary.registerFilter({
  name: 'omit',
  matcher: prop => prop.attributes.category !== 'size'
})

/**
 * Build command
 */
StyleDictionary.buildAllPlatforms()