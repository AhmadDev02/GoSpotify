import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import SearchForm from './SearchForm';

const myName = 'Ahmad FFFFF';

beforeEach(() => {
  render(
    <Provider store={store}>
      <SearchForm setView="test" />
    </Provider>,
  );
});

test('clear search input form', () => {
  const searchInput = screen.getByPlaceholderText('Type anything...');
  userEvent.clear(searchInput);
  expect(searchInput).toBeInTheDocument('');
});

test('type my name in search input form', () => {
  const searchInput = screen.getByPlaceholderText('Type anything...');
  userEvent.clear(searchInput);
  userEvent.type(searchInput, myName);
  expect(searchInput).toBeInTheDocument(myName);
});
