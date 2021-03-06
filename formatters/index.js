const _ = require('lodash')

const fileHeader = options => {
  const showFileHeader = (options) ? options.showFileHeader : true;
  let str = '';
  if (showFileHeader) {
    str += '/**\n';
    str += ' * Do not edit directly\n';
    str += ' * Generated on ' + new Date().toUTCString() + '\n';
    str += ' */\n\n';
  }
  return str;
}

const variablesWithPrefix = (prefix, properties) => properties.map(prop => {
  let strProp = `${prefix}${prop.name}: ${prop.attributes.category === 'asset' ? `"${prop.value}"` : prop.value} !default;`
  if (prop.comment) {
    strProp = strProp.concat(' /* ' + prop.comment + ' */');
  }
  return strProp;
}).filter(function (strVal) { return !!strVal }).join('\n');


/**
 * Formats name for sass
 */
const sassVarName = attributes => {
  let name = attributes.type;

  if (typeof attributes.item !== 'undefined') {
    if (attributes.type === 'base') {
      name = attributes.item;
    } else if (attributes.item === 'base') {
      name = `${attributes.type}`
    } else {
      name += `-${attributes.item}`
    }
  }

  if (typeof attributes.subitem !== 'undefined') {
    name += `__${attributes.subitem}`
  }
  if (typeof attributes.state !== 'undefined') {
    name += `--${attributes.state}`
  }

  return name
}

const formatSassValue = (prop, properties) => {
  const { original, attributes } = prop
  const name = `$${prop.name}`;
  let value = attributes.category === 'asset' ? `"${prop.value}"` : `${prop.value} !default`;
  
  if (original.value && typeof original.value === 'string' && original.value.charAt(0) === '{') {
    // console.log(original.value.split('.'), prop)
    let path = original.value.split('.').map(str => str.replace('{', '').replace('}', ''))
    path.pop();
    properties.forEach(origProp => {
      if (_.isEqual(path, origProp.path) && attributes.category !== 'asset') {
        value = `$${origProp.name} !default`
      }
    })
  }
  return `${name}: ${value};`
}

const sassMultiMap = ({ mapPrefix, properties }) => {
  const categories = _.groupBy(properties, property => property.attributes.category)

  // Filter because we don't need maps for simple properties like margin and padding
  const catArray = Object.keys(categories)
  const fileComment = `/**
* Do not edit directly
* Generated on ${new Date().toUTCString()}
*/

`
  const defaults = properties.map(prop => {
    return formatSassValue(prop, properties)
  })

  // Sort defaults to make sure that variables are defined before they're referenced
  defaults.sort((a,b) => {
    const aProp = a.split(': ')[1]
    const bProp = b.split(': ')[1]
    if (aProp.indexOf('$') > -1 || bProp.indexOf('$') > -1) {
      return 1
    }
    return -1
  });

  return fileComment + defaults.join('\n') + '\n\n' + catArray.map(key => {
    const type = categories[key];
    const items = type;
    const mapName = `$${mapPrefix || 'tokens'}-${key}`;

    return `${mapName}: (${items.map(item => {
      const { attributes } = item;
      const name = sassVarName(attributes)

      return `
  '${name}': $${item.name}`
    })}
);`
  }).join('\n\n')
}


module.exports = {
  fileHeader,
  variablesWithPrefix,
  sassVarName,
  sassMultiMap
}