import React from 'react'
import Clipboard from 'react-clipboard.js';
import tinycolor from 'tinycolor2'
import tokensScss from '../../../build/js/tokens-scss'
import './Token.scss'

export interface ITokenProps {
    token: Token,
    platform: Platform
}

const swatchCats = ['color', 'background-color', 'border-color', 'border-radius', 'layer', 'spacing']

const platformName = ({name, platform}: {name: string, platform: Platform}): string => {
    let str = name;
    if (platform === 'web') {
        str = `$${name}`
    }
    return str
}

const Token = (props: ITokenProps): React.ReactElement => {
    const { token, platform } = props;
    const { attributes } = token;
    const { category } = attributes;

    // Get this token from the scss file so that we can format it on web
    let scssToken = tokensScss[category];
    if (typeof attributes.type !== 'undefined') {
        scssToken = tokensScss[category][attributes.type]
        if (typeof attributes.item !== 'undefined') {
            scssToken = tokensScss[category][attributes.type][attributes.item]
            if (typeof attributes.subitem !== 'undefined') {
                scssToken = tokensScss[category][attributes.type][attributes.item][attributes.subitem]
                if (typeof attributes.state !== 'undefined') {
                    scssToken = tokensScss[category][attributes.type][attributes.item][attributes.subitem][attributes.state]
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
        width: null
    };
    const name = platformName({name: token.name, platform})
    if (swatchCats.indexOf(category) > -1 && category !== 'spacing') {
        style = {
            ...style,
            borderRadius:'2px'
        }
    }
    if (category === 'color' || category === 'background-color') {
        style = {
            ...style,
            backgroundColor: scssToken.value
        }

        if (tinycolor.readability(scssToken.value, '#fff') < 2) {
            style = {
                ...style,
                border: `1px solid ${tinycolor(scssToken.value).darken(5)}`
            }
        }
    }
    if (category === 'border-color') {
        style = {
            ...style,
            backgroundColor: tokensScss['background-color'].base.value,
            border: `1px solid ${scssToken.value}`
        }
    }
    if (category === 'layer') {
        style = {
            ...style,
            backgroundColor: '#fff',
            boxShadow: scssToken.value,
            height: '5rem',
            width: '5rem'
        }
    }
    if (category === 'border-radius') {
        style = {
            ...style,
            backgroundColor: '#fff',
            borderRadius: scssToken.value,
            border: `1px solid ${tokensScss['border-color'].base.value}`
        }
    }
    if (category === 'spacing') {
        style = {
            ...style,
            width: '20rem',
            height: scssToken.value === '0' ? '1px' : scssToken.value
        }
    }
    return (
        <div className="token">
            <span className="token__description">
                <Clipboard className="token__clipboard" data-clipboard-text={name}>
                    <code className="token__name">{name}</code>
                </Clipboard>
                <Clipboard className="token__clipboard" data-clipboard-text={token.value}>
                    <code className="token__value">{token.value}</code>
                </Clipboard>
            </span>
            <span className="token__sample">
                {swatchCats.indexOf(category) > -1 &&
                    <div className="token__swatch" style={style} />
                }
            </span>
        </div>
    )
}

export default Token