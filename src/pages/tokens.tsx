import * as React from 'react'
import Layout from '../layouts/Layout/Layout'
import Token from '../components/Token/Token'
import tokensScss from '../../build/js/tokens-scss'
import './index.scss'

interface TokensPageProps {
	platform?: Platform
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
									{!tokens[cat][type].value && <h3>{type}</h3>}
									{tokens[cat][type].value
									? <Token token={tokens[cat][type]} platform={platform}/>
									: Object.keys(tokens[cat][type]).map(item => (
										<section key={item}>
											{!tokens[cat][type][item].value && <h4>{item}</h4> }
											{tokens[cat][type][item].value
											? <Token token={tokens[cat][type][item]} platform={platform}/>
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
