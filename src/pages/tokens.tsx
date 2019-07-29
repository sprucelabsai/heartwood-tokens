import * as React from 'react'
import Layout from '../layouts/Layout/Layout'
import PlatformSwitch from "../components/PlatformSwitch/PlatformSwitch";
import Token from '../components/Token/Token'
import tokensScss from '../../build/js/tokens-scss'
import './tokens.scss'

interface TokensPageProps {
	platform?: Platform
}
interface TokensPageState {
  platform: Platform;
}

const platformFiles = {
	web: tokensScss
}

export default class TokensPage extends React.Component<TokensPageProps, TokensPageState> {
	public static defaultProps = {
		platform: 'web'
	}

	public state = {
		platform: 'web'
	}

	public onClickPlatform = ({ platform }: { platform: Platform }) => {
	  this.setState({
		platform
	  });
	};

	public render() {
		const { platform } = this.state;
		const tokens = platformFiles[platform];

		return (
			<Layout>
				<div className="container">
				<PlatformSwitch platform={platform} onClick={this.onClickPlatform} />
					{tokens && Object.keys(tokens).map(cat => (
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
												return <Token key={item} token={tokens[cat][type][item]} platform={platform}/>})
											}
										</section>
									)
								}
								return <Token key={type} token={tokens[cat][type]} platform={platform}/>
							})}
						</section>
					))}
				</div>
			</Layout>
		)
	}
}
