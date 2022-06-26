import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { selectRuntime } from '../selectors/RuntimeSelector';


const RecentFiles = () => {
  const { onLoadProject } = useActions();
  const { latestOpenedProjects } = useSelector(selectRuntime);
  if (latestOpenedProjects.length === 0) {
    return null;
  }
  return (
    <>
      <p>Recent files</p>
      <ul>
        {latestOpenedProjects.map(file => (
          <li key={file}><button className="link recent-link" onClick={() => onLoadProject(file)}>{file}</button></li>
        ))}        
      </ul>
    </>
  );
}

export default RecentFiles;
