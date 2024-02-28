import './App.css';
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
// Import bootstrap files
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar />
        <div className='row'>
          <Results />
          <Results />
        </div>
      </div>
    </>
  )
}

export default App
