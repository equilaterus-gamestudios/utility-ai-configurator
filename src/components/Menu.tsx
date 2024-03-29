import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as ElectronMenu, MenuItem } from '@electron/remote';
import { useActions } from '../hooks/useActions';
import { titlebar } from '../App';
import { useIsDev } from '../hooks/useIsDev';
import LinkButton from './LinkButton';

const Menu = () => {
  const { 
    onLoadProjectDialog, 
    onCreateProjectDialog, 
    onExportProjectDialog, 
    onSaveAsProjectDialog,
    onSaveProject, 
    runtime 
  } = useActions();

  const isDev = useIsDev();

  useEffect(() => {
    const menu = new ElectronMenu();
    menu.append(new MenuItem({
      label: 'File',
      submenu: [
        {
          label: 'New project',
          click: onCreateProjectDialog,
          accelerator: 'Ctrl+N'
        },
        {
          label: 'Open',
          click: onLoadProjectDialog,
          accelerator: 'Ctrl+O'
        },
        {
          label: 'Save',
          click: onSaveProject,
          accelerator: 'Ctrl+S'
        },
        {
          label: 'Save as',
          click: onSaveAsProjectDialog,
          accelerator: 'Ctrl+Shift+S'
        },
        {
          label: 'Export',
          click: onExportProjectDialog,
          accelerator: 'Ctrl+E'
        },
        {
          type: 'separator'
        },
        {
          label: 'Close',
          role: 'close'
        }
      ]
    }));

    if (isDev) {      
      menu.append(new MenuItem({
        label: 'Dev',
        submenu: [
          {
            label: 'Inspector',
            role: 'toggleDevTools'
          },
          {
            label: 'Reload',
            role: 'reload'
          },
          {
            label: 'Force reload',
            role: 'forceReload'
          },
      ]
      }));
    }

    titlebar.updateMenu(menu);
    ElectronMenu.setApplicationMenu(menu);

    // Only re-apply when isDev changes
    // eslint-disable-next-line
  }, [isDev])

  const isProjectLoaded = () => (runtime.projectPath && runtime.projectPath.length > 0);

  return (
  <div className="col left-col">
    <div className="left-menu">
      <Link to="/" className="nes-btn">
        <img src={process.env.PUBLIC_URL + '/new.png'} alt="New" />
      </Link>
      <LinkButton className="nes-btn"
        onClick={onLoadProjectDialog}>
          <img src={process.env.PUBLIC_URL + '/open.png'} alt="Open" />
      </LinkButton>
      <LinkButton className={`nes-btn ${isProjectLoaded() ? '' : 'is-disabled'}`}
        onClick={onSaveProject}
        style={{pointerEvents: isProjectLoaded() ? 'auto' : 'none'}}>
          <img src={process.env.PUBLIC_URL + '/save.png'} alt="Save"/> 
          {runtime.changesNotSaved ? '[*]' : ''}
      </LinkButton>
      <LinkButton className="nes-btn"
        onClick={onSaveAsProjectDialog}>
          <img src={process.env.PUBLIC_URL + '/save-as.png'} alt="SaveAs" />
      </LinkButton>
      <Link to="/ConditionEvaluators" className="nes-btn is-primary big">
          <img src={process.env.PUBLIC_URL + '/Conditions.png'} alt="Conditions" />
      </Link>
    
      <Link to="/Decisions" className='nes-btn is-success big'>
        <img src={process.env.PUBLIC_URL + '/Decisions.png'} alt="Decisions" />
      </Link>
    
      <Link to="/Archetypes" className='nes-btn is-warning big'>
        <img src={process.env.PUBLIC_URL + '/Archetypes.png'} alt="Archetypes" />         
      </Link>

      <LinkButton className={`nes-btn is-error big ${isProjectLoaded() ? '' : 'is-disabled'}`}        
        onClick={onExportProjectDialog} 
        style={{pointerEvents: isProjectLoaded() ? 'auto' : 'none'}}>
          <img src={process.env.PUBLIC_URL + '/export.png'} alt="Export" />
      </LinkButton>
      </div>
  </div>
  );
}

export default Menu;
