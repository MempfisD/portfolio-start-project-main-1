import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contacts = () => {
	return (
		<StyledContacts>
			<SectionTitle>Contacts</SectionTitle>
			<StyledForm>
				<Field placeholder={'Name'} />
				<Field placeholder={'Email'} />
				<Field placeholder={'Message'} as={'textarea'} />
				<Button type={'submit'}>Submit</Button>
			</StyledForm>
		</StyledContacts>
	);
};

const StyledContacts = styled.section`
	min-height: 50vh;
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 532px;
	width: 100%;
	gap: 25px;
	margin: 0 auto;
`;
const Field = styled.input``;
