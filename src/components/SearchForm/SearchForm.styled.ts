import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 3 solid black;
  margin-bottom: 20px;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  background-color: #198d8d;
  color: black;
  opacity: 0.7;
  transition: opacity 250ms linear;
  border: none;
  border-radius: 0px 4px 4px 0px;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 260px;
  height: 40px;
  font-size: 20px;
  border-top: 2px solid #198d8d;
  border-bottom: 2px solid #198d8d;
  border-left: 2px solid #198d8d;
  border-right: none;
  border-radius: 4px 0px 0px 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
