import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 8px;
`;

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Autor = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const NotFound = styled.p`
  font-size: 24px;
  color: brown;
`;
