import { Oval } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Oval
        height={60}
        width={60}
        color="#008080"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#a6d3d3"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </LoaderWrap>
  );
};
