import { useActions } from '../hooks/useActions';

const StartActions = () => {
  const { onCreateProjectDialog } = useActions();
  return (
    <>
      <p>Start</p>
      <ul>
        <li><button className="link" onClick={() => onCreateProjectDialog()}>New empty project</button></li>
      </ul>
    </>
  );
}

export default StartActions;
