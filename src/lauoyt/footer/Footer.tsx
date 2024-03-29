import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper
				direction={'column'}
				align={'center'}
			>
				<SocialList>
					<SocialItem>
						<SocialLink>
							<Icon
								width={'38px'}
								height={'38px'}
								viewBox={'0 0 38px 38px'}
								iconId='gmail'
							/>
						</SocialLink>
					</SocialItem>

					<SocialItem>
						<SocialLink>
							<Icon
								width={'38px'}
								height={'38px'}
								viewBox={'0 0 38px 38px'}
								iconId='linkeid'
							/>
						</SocialLink>
					</SocialItem>

					<SocialItem>
						<SocialLink>
							<Icon
								width={'38px'}
								height={'38px'}
								viewBox={'0 0 38px 38px'}
								iconId='github'
							/>
						</SocialLink>
					</SocialItem>
				</SocialList>
				<Name>DMITRY NAUMOV</Name>
			</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	min-height: 20vh;
`
const Name = styled.p``
const SocialList = styled.ul`
	display: flex;
	gap: 100px;
`
const SocialItem = styled.li``
const SocialLink = styled.a``
