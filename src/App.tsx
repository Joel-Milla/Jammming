// External css
import 'bootstrap-icons/font/bootstrap-icons.css';
// Components
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
// Own styles
import './App.css';

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
