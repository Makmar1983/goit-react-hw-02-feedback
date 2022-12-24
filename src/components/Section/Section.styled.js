import styled from 'styled-components';

export const SectionBox = styled.section`
  display: block;
  margin: 0 auto;
  padding: 20px 60px;
  width: 300px;
  background: linear-gradient(to right, #0066cc, #ffcc00);

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
`;
