const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const _  = require('lodash')
const tinycolor = require('tinycolor2')

  

StyleDictionary.registerFormat({
    name: 'scss/defaults',
    formatter: function(dictionary) {
        function fileHeader(options) {
            // for backward compatibility we need to have the user explicitly hide them
            var showFileHeader = (options) ? options.showFileHeader : true;
            var to_ret = '';
            if (showFileHeader) {
              to_ret += '/**\n';
              to_ret += ' * Do not edit directly\n';
              to_ret += ' * Generated on ' + new Date().toUTCString() + '\n';
              to_ret += ' */\n\n';
            }
          
            return to_ret;
          }
        
        function variablesWithPrefix(prefix, properties) {
            return _.map(properties, function(prop) {
                var to_ret_prop = prefix + prop.name + ': ' + (prop.attributes.category==='asset' ? '"'+prop.value+'"' : prop.value) + ' !default;';
          
                if (prop.comment)
                  to_ret_prop = to_ret_prop.concat(' /* ' + prop.comment + ' */');
                return to_ret_prop;
              })
              .filter(function(strVal) { return !!strVal })
              .join('\n');
          }
        return fileHeader(this.options) + variablesWithPrefix('$', dictionary.allProperties);
    }
})

StyleDictionary.registerFormat({
  name: 'json/flat-dash',
  formatter: function(dictionary) {
    return '{\n' + _.map(dictionary.allProperties, function(prop) {
      return `  "${prop.path.join('-')}": ${JSON.stringify(prop.value)}`;
    }).join(',\n') + '\n}';
  }
})

StyleDictionary.registerFormat({
  name: 'figma/color',
  formatter: function(dictionary) {
    return '{\n' + _.map(dictionary.allProperties, function(prop) {
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
      if (color.isValid()) {
        console.log(color.toRgb())
        return `  "${prop.path.join('-')}": ${JSON.stringify(figmaPaint)}`;
      }
    }).join(',\n') + '\n}';
  }
})

StyleDictionary.registerFilter({
  name: 'isColor',
  matcher: function(prop) {
    return prop.attributes.category === 'c'
  }
})

StyleDictionary.buildAllPlatforms()