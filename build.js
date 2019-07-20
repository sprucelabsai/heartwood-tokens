const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const _ = require('lodash')
const tinycolor = require('tinycolor2')

const { fileHeader, variablesWithPrefix, scssIndex } = require('./helpers')

/**
 * Transforms
 */
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: prop => prop.attributes.category === 'size' || (prop.attributes.category === 'font' && prop.attributes.type === 'size') || prop.attributes.category === 'dimension' || (prop.attributes.category === 'border' && prop.attributes.type === 'radius'),
  transformer: prop => (parseInt(prop.original.value) / 16).toString() + 'rem'
})

StyleDictionary.registerTransform({
  name: 'font/family/css',
  type: 'value',
  matcher: prop => prop.attributes.category === 'font' && prop.attributes.type === 'family',
  transformer: prop => prop.original.fallback ? prop.original.value + ', ' + prop.original.fallback : prop.original.value
})

/**
 * Transform Groups
 */
StyleDictionary.registerTransformGroup({
  name: 'heartwood/scss',
  transforms: [
    'attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/pxToRem', 'font/family/css', 'color/css'
  ]
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
  name: 'scss/index',
  formatter: dictionary => scssIndex(Object.keys(dictionary.properties))
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
 * Build command
 */
StyleDictionary.buildAllPlatforms()