import React from 'react'
import cx from 'classnames'
import './PlatformSwitch.scss'

interface PlatformSwitchProps {
    platform: Platform,
    onClick: ({platform}: {platform: Platform}) => void
}

const PlatformSwitch = (props: PlatformSwitchProps): React.ReactElement => {
    const { platform, onClick } = props
    return (
        <div className="platform-switch">
            <p className="platform-switch__title">Platform</p>
            <button onClick={() => onClick({platform: 'web'})} className={cx("platform-switch__btn", {
                "platform-switch__btn--current": platform === 'web'
            })}>Web</button>
            <button onClick={() => onClick({platform: 'ios'})} className={cx("platform-switch__btn", {
                "platform-switch__btn--current": platform === 'ios'
            })}>iOS</button>
            <button onClick={() => onClick({platform: 'android'})} className={cx("platform-switch__btn", {
                "platform-switch__btn--current": platform === 'android'
            })}>Android</button>
        </div>
    )
}

export default PlatformSwitch