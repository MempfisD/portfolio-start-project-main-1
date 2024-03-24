import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.svg';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper align={'center'} justify={'space-around'}>
				<div>
					<MainTitle>DEVELOPER</MainTitle>
					<Name>Dmitry Naumov</Name>
					<MainText>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt.
					</MainText>
					<button>Contact Me</button>
				</div>
				<Photo src={photo} alt='' />
			</FlexWrapper>
		</StyledMain>
	);
};

const StyledMain = styled.div`
	min-height: 100vh;
`;

const MainTitle = styled.h1``;
const Name = styled.h2``;
const MainText = styled.p``;

const Photo = styled.img``;
