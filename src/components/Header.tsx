import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as ElectronMenu, MenuItem } from '@electron/remote';
import { useActions } from '../hooks/useActions';
import { titlebar } from '../App';
import { useIsDev } from '../hooks/useIsDev';

const Header = () => {
  const { onLoadProjectDialog, onCreateProjectDialog, onExportProjectDialog, onSaveAsProjectDialog, onSaveProject, runtime } = useActions();

  const isDev = useIsDev();

  const RedirectToHome = 

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
  }, [isDev])
/*
    menu.append(new MenuItem({
      label: 'Edit',
      submenu: [
        {
          label: 'Find',
          click: toggleFind,
          accelerator: 'Ctrl+F'
        },
        {
          label: 'Preview',
          click: togglePreview
        },
        {
          label: 'Mode',
          click: toggleMode
        },
        {
          label: 'Compile',
          click: onCompile,
          accelerator: 'F5'
        },
        {
          label: 'Setup',
          click: onPreferences
        },
        {
          label: 'Fullscreen',
          click: onFullscreen,
          accelerator: 'F11'
        }
      ]
    }));*/

    const isProjectLoaded = () => (runtime.projectPath && runtime.projectPath.length > 0);

    return (
    <div className="col left-col">
      <div className="left-menu">
        <Link to="/" className="nes-btn">
          <img src={process.env.PUBLIC_URL + '/new.png'} alt="New" />
        </Link>
        <a className="nes-btn"
          onClick={onLoadProjectDialog}>
            <img src={process.env.PUBLIC_URL + '/open.png'} alt="Open" />
        </a>
        <a className={`nes-btn ${isProjectLoaded() ? '' : 'is-disabled'}`}
          onClick={onSaveProject}
          style={{pointerEvents: isProjectLoaded() ? 'auto' : 'none'}}>
            <img src={process.env.PUBLIC_URL + '/save.png'} alt="Save"/> 
            {runtime.changesNotSaved ? '[*]' : ''}
        </a>
        <a className="nes-btn"
          onClick={onSaveAsProjectDialog}>
            <img src={process.env.PUBLIC_URL + '/save-as.png'} alt="SaveAs" />
        </a>
        <Link to="/ConditionEvaluators" className="nes-btn is-primary big">
            <img src={process.env.PUBLIC_URL + '/Conditions.png'} alt="Conditions" />
        </Link>
      
        <Link to="/Decisions" className='nes-btn is-success big'>
          <img src={process.env.PUBLIC_URL + '/Decisions.png'} alt="Decisions" />
        </Link>
      
        <Link to="/DecisionSets" className='nes-btn is-warning big'>
          <img src={process.env.PUBLIC_URL + '/Archetypes.png'} alt="Archetypes" />         
        </Link>

        <a className={`nes-btn is-error big ${isProjectLoaded() ? '' : 'is-disabled'}`}        
          onClick={onExportProjectDialog} 
          style={{pointerEvents: isProjectLoaded() ? 'auto' : 'none'}}>
            <img src={process.env.PUBLIC_URL + '/export.png'} alt="Export" />
        </a>
        </div>
    </div>
    );
}

export default Header;
