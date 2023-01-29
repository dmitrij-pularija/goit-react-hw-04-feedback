import styled from 'styled-components';

export const Cont = styled.div`
  max-width: 530px;
  margin: 0 auto;
  padding: 15px;
`;

export const Card = styled.div`
  position: relative;
  display: block;
  height: 500px;
  margin-top: 80px;
  padding: 40px 0;
  border-radius: 10px;
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 15px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
`;

export const Icon = styled.img`
height: 50px;
pointer-events: none;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Clear = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  border: 1px solid #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:focus,
  &:hover {
    transform: scale(1.05);
  }
`;

export const IconClear = styled.img`
  pointer-events: none;
`;