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
            backgroundColor: token.value
        }

        if (tinycolor.readability(token.value, '#fff') < 2) {
            style = {
                ...style,
                border: `1px solid ${tinycolor(token.value).darken(5)}`
            }
        }
    }
    if (category === 'border-color') {
        style = {
            ...style,
            backgroundColor: tokensScss['background-color'].base.value,
            border: `1px solid ${token.value}`
        }
    }
    if (category === 'layer') {
        style = {
            ...style,
            backgroundColor: '#fff',
            boxShadow: token.value,
            height: '5rem',
            width: '5rem'
        }
    }
    if (category === 'border-radius') {
        style = {
            ...style,
            backgroundColor: '#fff',
            borderRadius: token.value,
            border: `1px solid ${tokensScss['border-color'].base.value}`
        }
    }
    if (category === 'spacing') {
        style = {
            ...style,
            width: '20rem',
            height: token.value === '0' ? '1px' : token.value
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