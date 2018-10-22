import styled from 'styled-components';

export const MainContainer = styled.div`
  border: 1px solid black;
  width: 15%;
  height: 100%;
  padding-bottom: 5%;
  border-color: rgb(236, 237, 237);
  border-radius: 4%;
  margin-left: 10%;
`;

export const TopPortion = styled.div`
  border-bottom: 1px solid black;
  margin: 10px;
  padding-bottom: 10px;
  border-color: rgb(236, 237, 237);
`;

export const MiddlePortion = styled.div`
  border-bottom: 1px solid black;
  margin: 10px;
  padding-bottom: 10px;
  border-color: rgb(236, 237, 237);
`;

export const BottomPortion = styled.div`
  margin: 10px;
  padding-bottom: 10px;
`;


export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const EstimatedTotal = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StyledPTag = styled.p`
  margin-bottom: 10px;
  width: 150px;
`;

export const LineThroughPTag = styled.p`
  margin-bottom: 10px;
  text-decoration: line-through;
`;

export const StyledImageTag = styled.img`
  height: 50px;
  width: 50px;
`;

export const StyledATag = styled.a`
  color: black;
  text-decoration:none;

`