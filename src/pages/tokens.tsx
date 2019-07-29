import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../layouts/Layout/Layout'
import tokensScss from '../../build/js/tokens-scss'
import './index.scss'

interface TokensPageProps {
	platform?: 'web' | 'ios' | 'android'
}

const platformFiles = {
	web: tokensScss
}

export default class TokensPage extends React.Component<TokensPageProps, {}> {
	public static defaultProps = {
		platform: 'web'
	}

	public render() {
		const { platform } = this.props;
		const tokens = platformFiles[platform];

		return (
			<Layout>
				<div className="container debug">
					{Object.keys(tokens).map(cat => (
						<section key={cat}>
							<h2 className="h1">{cat.split('-').join(' ')}</h2>
							{Object.keys(tokens[cat]).map(type => (
								<section key={type}>
									<h3>{type}</h3>
									{tokens[cat][type].value
									? <p>{tokens[cat][type].value}</p>
									: Object.keys(tokens[cat][type]).map(item => (
										<section key={item}>
											<h4>{item}</h4>
											{tokens[cat][type][item].value
											? <p>{tokens[cat][type][item].value}</p>
											: Object.keys(tokens[cat][type][item]).map(subitem => (
												<div key={subitem}>
													<p>{subitem}</p>
												</div>
											))}
										</section>
									))}
								</section>
							))}
						</section>
					))}
				</div>
			</Layout>
		)
	}
}
