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
  const types = _.groupBy(properties, property => property.attributes.type)
  const fileComment = `/**
* Do not edit directly
* Generated on ${new Date().toUTCString()}
*/

`
  const defaults = properties.map(prop => {
    return `$${prop.name}: ${prop.value} !default;`
  })

  return fileComment + defaults.join('\n') + '\n\n' + Object.keys(types).map(key => {
    const type = types[key];
    const groupedItems = _.groupBy(type, item => item.attributes.state)


    return Object.keys(groupedItems).map(groupKey => {
      const group = groupedItems[groupKey];
      let mapName = `$${mapPrefix || 'tokens'}-${key}`;
      if (groupKey !== 'undefined') {
        mapName += `-${groupKey}`
      }
      
      return `${mapName}: (${group.map(val => {
          let key = val.attributes.item;
          if (val.attributes.subitem) {
            key += `-${val.attributes.subitem}`
          }
          return `
  '${key}': $${val.name}`}).join(',')}
);`

      
    }).join('\n\n')
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