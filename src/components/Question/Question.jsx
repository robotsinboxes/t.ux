import React, { useContext, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import Answer from '../Answer/Answer';
import styled from 'styled-components';
import { Flex, tux_blue, common_shadow } from '../TuxComponents/utilities';
import { SessionContext } from '../../contexts/SessionContext';

const Question = ({ details }) => {
	const { response, disable, setDisable } = useContext(SessionContext);
	const { problemStatement, media, answers } = details.contents;

	useEffect(() => {
		setDisable(true);
	}, []);

	return (
		<>
			<ColorBlock></ColorBlock>
			<FlexBox dangerouslySetInnerHTML={{ __html: problemStatement }}></FlexBox>
			<MediaBox>
				{/* <img src={media} alt="" /> */}
				{/* <BtnBox> */}
				{answers.map((answer, index) => (
					<Answer
						key={index}
						index={index}
						answer={answer}
						response={response}
						disabled={
							!response
								? false
								: response.selectionIndex === index
								? false
								: true
						}
					/>
				))}
				{/* </BtnBox> */}
			</MediaBox>
			{response && <Feedback response={response} />}
		</>
	);
};

export default Question;

const ColorBlock = styled.div`
	height: 10px;
	background: ${tux_blue};
	width: 100%;
`;

const FlexBox = styled.div`
	background-color: var(--true-white);
	//  box-shadow: ${common_shadow};
	border-radius: 10px;
	margin: 30px 60px;
`;

const MediaBox = styled.div`
	${Flex({ jc: 'space-around', ai: 'center' })};
`;

const BtnBox = styled.div`
	${Flex({ fd: 'column', jc: 'center', ai: 'center' })};
`;
