import React from 'react'
import TokensLayout from '../layouts/TokensLayout/TokensLayout';
import componentsScss from '../../build/js/components-scss'

const ComponentsPage = (): React.ReactElement => (
    <TokensLayout title="Components" platform="scss" kind="component" tokens={componentsScss} />
)

export default ComponentsPage