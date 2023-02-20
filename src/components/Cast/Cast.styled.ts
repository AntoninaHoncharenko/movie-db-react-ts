import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 16px;
`;

export const CastItem = styled.li`
  width: calc((1248px - 96px) / 7);
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 4px;
`;

export const CastName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Character = styled.p`
  font-size: 18px;
`;

export const NotFound = styled.p`
  font-size: 24px;
  color: brown;
`;
