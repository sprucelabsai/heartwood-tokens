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
    let strProp = `${prefix}${prop.name}: ${prop.attributes.category === 'asset' ? `"${prop.value}` : prop.value} !default;`
    if (prop.comment) {
      strProp = strProp.concat(' /* ' + prop.comment + ' */');
    }
    return strProp;
    }).filter(function(strVal) { return !!strVal }).join('\n');

const sassMultiMap = ({mapPrefix, properties}) => {
  const categories = _.groupBy(properties, property => property.attributes.category)
  const fileComment = `/**
* Do not edit directly
* Generated on ${new Date().toUTCString()}
*/

`
  const defaults = properties.map(prop => {
    return `$${prop.name}: ${prop.value} !default;`
  })

  return fileComment + defaults.join('\n') + '\n\n' + Object.keys(categories).map(key => {
    const type = categories[key];
    // console.log(key)
    const groupedItems = _.groupBy(type, item => item.attributes.state)
    const items = type;
    const mapName = `$${mapPrefix || 'tokens'}-${key}`;
    
    return `${mapName}: (${items.map(item => {
      const { attributes } = item;
      let name = attributes.type;
      if (typeof attributes.item !== 'undefined') {
        if (attributes.item === 'base') {
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

      return `
  '${name}': $${item.name}`
  })}
);`
  }).join('\n\n')
}

const scssIndex = categories => {
  let str = ''
  categories.forEach(category => {
    if (category !== 'size') {
      str += `@import '_${category}';\n`;
    }
  })
  str += `
/**
* Uncomment to pull in theme overrides
*/
// @import '_theme';
 `
  return str
}

module.exports = {
    fileHeader,
    variablesWithPrefix,
    scssIndex,
    sassMultiMap
}