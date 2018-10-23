import styled from 'styled-components';

export const MainContainer = styled.div`
  border: 1px solid black;
  width: 15%;
  height: 100%;
  padding-bottom: 5%;
  border-color: rgb(236, 237, 237);
  border-radius: 4%;
  margin-left: 10%;
  padding-top: 1%;
  @media (max-width: 700px) {
    width: 65%;
  }
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

export const DescriptionText = styled.p`
  width: 150px;
  margin-bottom: -10px;
`;

export const StyledPTag = styled.p`
  width: 150px;
  font-weight: bold;
  margin-bottom: -8px;
`;

export const LineThroughPTag = styled.p`
  margin-bottom: 10px;
  text-decoration: line-through;
`;

export const StyledImageTag = styled.img`
  margin-top: 2px;
  height: 50px;
  width: 50px;
`;

export const StyledATag = styled.a`
  color: black;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  height: 30px;
  border-radius: 25%;
  border: 2px solid black;
  color: black;
  margin-left: 5%;
  font-weight: bold;
  outline: none;
`;

export const ApplyPromoText = styled.p`
  color: black;
  margin-bottom: -1px;
`;
export const StyledInput = styled.input`
  outline: none;
  height: 20px;
  border: 1px solid black;
`;
