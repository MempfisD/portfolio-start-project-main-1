import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './Work';
import projImg1 from '../../../assets/images/proj-1.webp';
import projImg2 from '../../../assets/images/proj-2.webp';

export const Works = () => {
	return (
		<StyledWorks>
			<SectionTitle>Projects</SectionTitle>
			<FlexWrapper wrap='wrap' gap='30px'>
				<Work
					src={projImg1}
					title={'TITLE PROJECT'}
					text={
						'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
					}
				/>
				<Work
					src={projImg2}
					title={'instagram'}
					text={
						'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
					}
				/>
				<Work
					src={projImg2}
					title={'TITLE PROJECT'}
					text={
						'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
					}
				/>
				<Work
					src={projImg2}
					title={'instagram'}
					text={
						'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
					}
				/>
			</FlexWrapper>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
	min-height: 100vh;
`;
