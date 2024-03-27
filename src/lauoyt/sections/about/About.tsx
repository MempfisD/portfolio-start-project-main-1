import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';

export const About = () => {
	return (
		<StyledAbout>
			<SectionTitle>About me</SectionTitle>
			<Text>
				The long barrow was built on land previously inhabited in the Mesolithic
				period. It consisted of a sub-rectangular earthen tumulus, estimated to
				have been 15 metres (50 feet) in length, with a chamber built from
				sarsen megaliths on its eastern end. Both inhumed and cremated human
				remains were placed within this chamber during the Neolithic period,
				representing at least nine or ten individuals.
			</Text>
		</StyledAbout>
	);
};

const StyledAbout = styled.section`
	min-height: 50vh;
`;

const Text = styled.p`
	max-width: 850px;
`;
