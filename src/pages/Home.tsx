
import RecentFiles from '../components/RecentFiles';
import StartActions from '../components/StartActions';
import withLayout from '../wrappers/withLayout';

const Home = () => {
  return  (
    <>
      <StartActions />
      <RecentFiles />
    </>
  );
  
}
export default withLayout(Home, "Geppetto");
