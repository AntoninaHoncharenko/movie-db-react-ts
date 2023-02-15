import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { Form, SearchBtn, Input } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (event.currentTarget.elements.query.value === '') {
      toast.warn('Enter a film name!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    onSubmit(event.currentTarget.elements.query.value);
    event.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={event => handleSubmit(event)}>
        <Input type="text" name="query" />
        <SearchBtn type="submit">
          <BsSearch size="24" />
        </SearchBtn>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
