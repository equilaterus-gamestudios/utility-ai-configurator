import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as ElectronMenu, MenuItem } from '@electron/remote';
import { useActions } from '../hooks/useActions';
import { titlebar } from '../App';

const Header = () => {
  const { onLoadProjectDialog, onCreateProjectDialog, onExportProjectDialog, onSaveAsProjectDialog, onSaveProject } = useActions();

  const [collapsed, setCollapsed] = useState('collapse');
  const [style, setStyle] = useState('message-bot');
  const onCollapse = () => {
    setCollapsed(collapsed === '' ? 'collapse' : '')
  }

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

    titlebar.updateMenu(menu);
    ElectronMenu.setApplicationMenu(menu);
  })
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

    return <></>
}

export default Header;
