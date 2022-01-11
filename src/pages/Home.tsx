
import StartActions from '../components/StartActions';
import RecentFiles from '../components/RecentFiles';

const Home = () => {
  return  (
    <>
      <div className="editor">
          <div className="default-col container-fluid">
            <div className="row">
              <div className="col-4">
                <StartActions />
              </div>
            </div>
            <RecentFiles />
          </div>
        </div>
    </>
  );
  
}
export default Home;
