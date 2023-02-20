import styled from 'styled-components';
// import { space, layout, flexbox } from 'styled-system';
import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

interface BoxProps extends SpaceProps, LayoutProps, FlexboxProps {}

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${flexbox}
`;
