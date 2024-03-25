import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
	title: string;
	text: string;
	src: string;
};

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<Image src={props.src} alt='' />
			<Title>{props.title}</Title>
			<Link href={'#'}>Javascript</Link>
			<Link href={'#'}>PostgreSQL</Link>
			<Link href={'#'}>React</Link>
			<Link href={'#'}>redux</Link>
			<Text>{props.text}</Text>
		</StyledWork>
	);
};

const StyledWork = styled.div`
	max-width: 522px;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: 388px;
	object-fit: cover;
`;

const Title = styled.h2``;
const Text = styled.p``;
const Link = styled.a``;
