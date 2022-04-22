import { useState } from 'react';
import './style.css';
import SearchForm from '../Search/SearchForm';
import TrackDetail from '../Track/TrackDetail';

function Home() {
  const [view, setView] = useState('searchform');

  return (
    <>
      {view === 'searchform' && <SearchForm setView={setView} />}
      {view === 'trackdetail' && <TrackDetail />}
    </>
  );
}

export default Home;
