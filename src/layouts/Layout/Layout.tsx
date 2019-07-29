import React from 'react';
import '../../stylesheets/import-once.scss'

interface ILayoutProps {
    children: any
}

const Layout = (props: ILayoutProps): React.ReactElement => <>{props.children}</>

export default Layout