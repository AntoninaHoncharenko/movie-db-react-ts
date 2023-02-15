import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  color: black;
  margin-bottom: 20px;
  transition: color 250ms linear;

  &:hover {
    color: #008080;
  }
`;

export const ImageThumb = styled.div`
  min-width: 350px;
  max-width: 350px;
  margin-right: 30px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
`;

export const Raiting = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  background-color: #198d8d;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  padding: 4px;
  transition: color 250ms linear;

  &:first-child {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: black;
  }

  &.active {
    color: black;
  }
`;
