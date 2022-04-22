import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import Track from './TrackItem';

const imageUrl = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png';
const trackTitle = 'Sweet Home';
const artistName = 'Taylor Swift';
const albumName = 'Home Stay';
const duration = 230000;
const data = 'test';
const setView = 'test';
const selectMode = 'test';
const highlightTracks = [''];
const setHighlightTracks = 'test';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Track
        imageUrl={imageUrl}
        trackTitle={trackTitle}
        artistName={artistName}
        albumName={albumName}
        duration={duration}
        data={data}
        setView={setView}
        selectMode={selectMode}
        highlightTracks={highlightTracks}
        setHighlightTracks={setHighlightTracks}
      />
    </Provider>,
  );
});

test('check if album image rendered', () => {
  const imgElement = screen.getByAltText(albumName);
  expect(imgElement).toBeInTheDocument();
});

test('check if album image source is right', () => {
  const imgElement = screen.getByAltText(albumName);
  expect(imgElement.getAttribute('src')).toBe(imageUrl);
});

test('check if track title rendered', () => {
  const trackTitleElement = screen.getByText(trackTitle);
  expect(trackTitleElement).toBeInTheDocument();
});

test('check if artist name rendered', () => {
  const artistNameElement = screen.getByText(artistName);
  expect(artistNameElement).toBeInTheDocument();
});

test('check if album name rendered', () => {
  const albumNameElement = screen.getByText(albumName);
  expect(albumNameElement).toBeInTheDocument();
});
