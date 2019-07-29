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
            <button onClick={() => onClick({platform: 'scss'})} className={cx("platform-switch__btn", {
                "platform-switch__btn--current": platform === 'scss'
            })}>Scss</button>
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