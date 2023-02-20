import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { Form, SearchBtn, Input } from './SearchForm.styled';
import { FormEvent } from 'react';

interface IProps {
  onSubmit: (query: string) => void;
}

export const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement & { query: HTMLInputElement }>
  ) => {
    event.preventDefault();
    if (event.currentTarget.query.value === '') {
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
    onSubmit(event.currentTarget.query.value);
    event.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <SearchBtn type="submit">
          <BsSearch size="24" />
        </SearchBtn>
      </Form>
    </>
  );
};
