import styled from 'styled-components';

const PropertyItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: stretch;
	margin: 1rem;
	background: #eee;
	padding: 1.5rem;
	font-size: 1.4rem;
`;

const PropertyDetail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	img {
		width: 250px;
		height: 250px;
	}
`;

const DetailStack = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 200px;
	justify-content: flex-start;

	p {
		display: block;
		margin: 0.4rem;
		border-bottom: 1px solid #555;
	}
`;

const AgentDetail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;



export {
	PropertyItem,
	PropertyDetail,
	DetailStack,
	AgentDetail,
}
