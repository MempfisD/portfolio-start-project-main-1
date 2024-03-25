import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
	iconId: string;
	title: string;
};

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId} />
			<SkillTitle>{props.title}</SkillTitle>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
	text-align: center;
`;

const SkillTitle = styled.h3`
	margin-top: 20px;
`;
