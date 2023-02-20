import styled from 'styled-components';

export const MovieCard = styled.li`
  width: calc((1248px - 32px) / 3);
  border-radius: 4px;
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px 4px #198d8d;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 574px;
  border-radius: 4px;
  margin-bottom: 6px;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 3px;
`;
