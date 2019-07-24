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
    let strProp = prefix + prop.name + ': ' + (prop.attributes.category==='asset' ? '"'+prop.value+'"' : prop.value) + ' !default;';
    if (prop.comment)
      strProp = strProp.concat(' /* ' + prop.comment + ' */');
    return strProp;
    }).filter(function(strVal) { return !!strVal }).join('\n');

const sassMultiMap = ({mapPrefix, properties}) => {
  const types = _.groupBy(properties, property => property.attributes.type)

  return Object.keys(types).map(typeKey => {
    const type = types[typeKey];
    console.log(typeKey)

    return '$' + typeKey + '-' + (mapPrefix || 'tokens') + ': (\n' + type.map(val => {
      console.log(val)
      return `'${val.attributes.item}': ${val.value},`
    }).join('\n') + '\n);'
  }).join('\n\n')

  // return '$' + (mapPrefix || 'tokens') + ': (\n' + properties.map(prop => {
  //   console.log (prop);
  //   return prop.name;
  // }).join('\n') + '\n);'

  return JSON.stringify(types)
}

const scssIndex = categories => {
  let str = ''
  categories.forEach(category => {
    if (category !== 'size') {
      str += `@import '_${category}';\n`;
    }
  })
  return str
}

module.exports = {
    fileHeader,
    variablesWithPrefix,
    scssIndex,
    sassMultiMap
}