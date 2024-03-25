import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skil/Skill';

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>Skills</SectionTitle>
			<FlexWrapper wrap='wrap' gap={'120px'} justify='center'>
				<Skill iconId={'javascript'} title={'javascript'} />
				<Skill iconId={'typescript'} title={'typescript'} />
				<Skill iconId={'mongodb'} title={'mongo db'} />
				<Skill iconId={'postgrest'} title={'PostgreSQL'} />
				<Skill iconId={'jest'} title={'jest'} />
				<Skill iconId={'express'} title={'Express JS'} />
				<Skill iconId={'nest'} title={'Nest JS'} />
				<Skill iconId={'docker'} title={'Docker'} />
				<Skill iconId={'react'} title={'react js'} />
				<Skill iconId={'react-native'} title={'react native'} />
				<Skill iconId={'styled'} title={'Styled Components'} />
				<Skill iconId={'redux'} title={'Redux'} />
				<Skill iconId={'git'} title={'git'} />
			</FlexWrapper>
		</StyledSkills>
	);
};

const StyledSkills = styled.section`
	min-height: 100vh;
`;
