import './App.css';
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
// Import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar />
        <div className='row gx-5'>
          <Results />
          <Results />
        </div>
      </div>
    </>
  )
}

export default App
