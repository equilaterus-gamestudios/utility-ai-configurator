import { dialog } from '@electron/remote';
import { useSelector, useDispatch } from 'react-redux';
import { loadProject, saveProject, exportProject, restoreProject } from '../actions/projectActions';
import { changeProjectPath } from '../actions/runtimeActions';
import { runtimeModel } from '../common/models';

export function useActions() {
  const runtime = useSelector((state) => state.runtime) as runtimeModel
  const dispatch = useDispatch();

  /**
   * Load project
   */
  const onLoadProjectDialog = async () => {
    // Pending changes?
    if (runtime.changesNotSaved) {
      const choice = await dialog.showMessageBox(
        {
          type: 'question',
          buttons: ['No, I want to save my changes before openning a new file.', 'Yes, continue and ignore changes.'],
          title: 'Confirmation',
          message: 'Unsaved changes will be lost.'
        }
      );
      if (choice.response === 0) return;
    }
  
    // Show load dialog
    const result = await dialog.showOpenDialog(
      {
        title:'Open Dialogue',
        properties: ['openFile'],
        filters: [{'extensions': ['aiproj'], 'name': 'AI Project file' } as Electron.FileFilter]
      }
    );
    if (result.filePaths.length === 0) return;
    
    // Load file
    dispatch(loadProject(result.filePaths[0]));
  }
  /** 
   * Load Project
   */
  const onLoadProject = async (filePath : string) => {
    // Pending changes?
    if (runtime.changesNotSaved) {
      const choice = await dialog.showMessageBox(
        {
          type: 'question',
          buttons: ['No, I want to save my changes before openning a new file.', 'Yes, continue and ignore changes.'],
          title: 'Confirmation',
          message: 'Unsaved changes will be lost.'
        }
      );
      if (choice.response === 0) return;
    }    
    // Load file
    dispatch(loadProject(filePath));

  }

  /**
   * Create project
   */
  const onCreateProjectDialog = async () => {
    // Pending changes?
    if (runtime.changesNotSaved) {            
      const choice = await dialog.showMessageBox(
        {
          type: 'question',
          buttons: ['No, I want to save my changes before openning a new file.', 'Yes, continue and ignore changes.'],
          title: 'Confirmation',
          message: 'Unsaved changes will be lost.'
        }
      );
      if (choice.response === 0) return;
    }
  
    // Show create dialog
    const result = await dialog.showSaveDialog(
      {
        title:'Create Dialogue',
        properties: ['createDirectory'],
        filters: [{'extensions': ['aiproj'], 'name': 'AI Project file' } as Electron.FileFilter]
      }
    );    
    if (result.canceled === true) return;
        
    dispatch(changeProjectPath(result.filePath));
    dispatch(restoreProject());
    dispatch(saveProject(false));
  }

  /**
   * Export project
   */
   const onExportProjectDialog = async () => {
    // Pending changes?
    if (runtime.changesNotSaved) {            
      const choice = await dialog.showMessageBox(
        {
          type: 'question',
          buttons: ['Save changes.', 'Discard changes'],
          title: 'Confirmation',
          message: 'Do you want to save your changes?.'
        }
      );
      // Save the in-memory changes into disk
      if (choice.response === 0) dispatch(saveProject(false));
      // Discard in-memory changes an re-load from disk
      else dispatch(loadProject(runtime.projectPath));
    }
  
    // Show load dialog
    const result = await dialog.showSaveDialog(
      {
        title:'Export Dialogue',
        properties: ['createDirectory'],
        filters: [{'extensions': ['aidb'], 'name': 'AI database file' } as Electron.FileFilter]
      }
    );
    if (result.canceled === true) return;
    
    // Export file
    dispatch(exportProject(result.filePath));
    dialog.showMessageBox(
      {
        type: 'info',
        buttons: ['Ok'],
        title: 'Export',
        message: 'Exporting process has been completed' 
      }
    );
  }

  /**
   * Save project
   */
  const onSaveProject = () => {
    dispatch(saveProject(false))
  }

  /**
   * Save As project
   */
  const onSaveAsProjectDialog = async () => {
    // Show save dialog
    const result = await dialog.showSaveDialog(
      {
        title:'Save As Dialogue',
        properties: ['createDirectory'],
        filters: [{'extensions': ['aiproj'], 'name': 'AI Project file' } as Electron.FileFilter]
      }
    );
    if (result.canceled === true) return;
    
    // Save
    dispatch(changeProjectPath(result.filePath));
    dispatch(saveProject(false));
  }

  return { onLoadProjectDialog, onCreateProjectDialog, onExportProjectDialog, onSaveAsProjectDialog, onLoadProject, onSaveProject, runtime }
}

