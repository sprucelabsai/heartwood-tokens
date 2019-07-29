import * as React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import Layout from '../layouts/Layout/Layout'
import PlatformSwitch from "../components/PlatformSwitch/PlatformSwitch";
import Token from '../components/Token/Token'
import tokensScss from '../../build/js/tokens-scss'
import tokensIOS from '../../build/js/tokens-ios-swift'
import tokensAndroid from '../../build/js/tokens-android'
import './tokens.scss'

interface TokensPageProps {}
interface TokensPageState {
	platform: Platform;
}

const platformFiles = {
	scss: tokensScss,
	ios: tokensIOS,
	android: tokensAndroid
}

export default class TokensPage extends React.Component<TokensPageProps, TokensPageState> {
	public state = {
		platform: 'scss'
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
			<Layout hasLeftSidebar>
				<aside className="tokens-nav">
					<h1 className="title-sm tokens-nav__title">Heartwood Tokens</h1>
					<PlatformSwitch platform={platform} onClick={this.onClickPlatform} />
					<p className="tokens-nav__subtitle">Tokens</p>
					<ul className="tokens-nav__list">
						{Object.keys(tokens).map(cat => (
							<li key={cat} className="tokens-nav__item">
								<Link
									to={cat}
									className="tokens-nav__link"
									activeClass="tokens-nav__link--active"
									smooth
									spy
									duration={200}
								>
									{cat.split('-').join(' ')}
								</Link>
							</li>
						))}
					</ul>
				</aside>
				<main className="tokens-container">
					{tokens && Object.keys(tokens).map(cat => (
						<section className="token-category-section" key={cat} id={cat}>
							<h2 className="title-sm tokens-category__title">{cat.split('-').join(' ')}</h2>
							{Object.keys(tokens[cat]).map(type => {
								if (!tokens[cat][type].value) {
									return (
										<section className="token-type-section" key={type} id={`${cat}_${type}`}>
											<h3 className="tokens-type__title h4">{type}</h3>
											{Object.keys(tokens[cat][type]).map(item => {
												if (!tokens[cat][type][item].value) {
													return (
														<section className="token-item-section" key={item} id={`${cat}_${type}_${item}`}>
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
				</main>
			</Layout>
		)
	}
}
