import { BsBoxArrowLeft } from 'react-icons/bs';
import { BackLink, Text } from './NotFound.styled';
import { Box } from 'Box';

export const NotFound = () => {
  return (
    <Box width="1280px" m="0 auto" p="20px 16px">
      <Text>Page is not found</Text>
      <BackLink to="/">
        <BsBoxArrowLeft size="28" />
        <p>Return to Homepage</p>
      </BackLink>
    </Box>
  );
};
