import styled from 'styled-components';

export const Feedback = styled.h3`
  margin-top: -35px;
  text-align: center;
  color: #48ae2c;
`;

export const IndikatorGreen = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Vol = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #48ae2c;
`;

export const GoodFeedback = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #48ae2c;
`;

export const NeutralFeedback = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ffd900;
`;

export const BadFeedback = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #f32013;
`;

export const IndikatorYellow = styled.div`
  position: absolute;
  height: 100%;
`;

export const IndikatorRed = styled.div`
  position: absolute;
  height: 100%;
`;