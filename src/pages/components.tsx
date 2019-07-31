import React from 'react'
import TokensLayout from '../layouts/TokensLayout/TokensLayout';
import componentsScss from '../../build/js/components-scss'

const ComponentsPage = (): React.ReactElement => (
    <TokensLayout platform="scss" kind="components" tokens={componentsScss} />
)

export default ComponentsPage