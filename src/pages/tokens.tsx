import * as React from 'react'
import Layout from '../layouts/Layout/Layout'
import Token from '../components/Token/Token'
import tokensScss from '../../build/js/tokens-scss'
import './tokens.scss'

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
				<div className="container ">
					{Object.keys(tokens).map(cat => (
						<section className="token-category-section" key={cat}>
							<h2 className="title-lg tokens-category__title">{cat.split('-').join(' ')}</h2>
							{Object.keys(tokens[cat]).map(type => {
								if (!tokens[cat][type].value) {
									return (
										<section className="token-type-section" key={type}>
											<h3 className="tokens-type__title title-sm">{type}</h3>
											{Object.keys(tokens[cat][type]).map(item => {
												if (!tokens[cat][type][item].value) {
													return (
														<section className="token-item-section" key={item}>
															<h4 className="tokens-item__title">{item}</h4>
															{Object.keys(tokens[cat][type][item]).map(subitem => (
																<div key={subitem}>
																	<p>{subitem}</p>
																</div>
															))}
														</section>
													)
												}
												return <Token token={tokens[cat][type][item]} platform={platform}/>})
											}
										</section>
									)
								}
								return <Token token={tokens[cat][type]} platform={platform}/>
							})}
						</section>
					))}
				</div>
			</Layout>
		)
	}
}
