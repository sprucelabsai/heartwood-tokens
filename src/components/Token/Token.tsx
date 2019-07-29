import React from 'react'
import './Token.scss'

export interface ITokenProps {
    token: Token,
    platform: Platform
}

const platformName = ({name, platform}: {name: string, platform: Platform}): string => {
    let str = name;
    if (platform === 'web') {
        str = `$${name}`
    }
    return str
}

const Token = (props: ITokenProps): React.ReactElement => {
    const { token, platform } = props;
    const name = platformName({name: token.name, platform})
    return (
        <div className="token">
            <p>{name}</p>
            <p>{token.value}</p>
        </div>
    )
}

export default Token