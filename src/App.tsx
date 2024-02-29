// External css
import 'bootstrap-icons/font/bootstrap-icons.css';
// Components
import Title from './Title/Title';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
import Songs from './Playlist/Songs'

function App() {

  return (
    <>
      <Title />
      <div className='container'>
        <SearchBar />
        <div className='row gx-4'>
          <Results />
          <Songs />
        </div>
      </div>
    </>
  )
}

export default App
