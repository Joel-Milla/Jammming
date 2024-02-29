// Components
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Songs from '../Playlist/Songs'

function Dashboard() {

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

export default Dashboard;
