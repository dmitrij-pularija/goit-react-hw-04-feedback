import styled from 'styled-components';

export const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  @media screen and (min-width: 480px) {
    padding: 10px;
  }

  &:focus,
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  @media screen and (min-width: 480px) {
    gap: 20px;
    margin: 50px auto;
  }
`;

export const Icon = styled.img`
  height: 80px;
  pointer-events: none;
`;
