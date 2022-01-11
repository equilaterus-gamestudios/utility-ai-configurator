import { dialog } from '@electron/remote';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadProject } from '../actions/projectActions';
import { loadRuntime, cleanTemp } from '../actions/runtimeActions';
import { TEMP_FILE } from '../common/Global';

export function usePrivateActions() {  
  const dispatch = useDispatch();

  /**
   * Load runtime
   */
  const onLoadRuntimeDialog = async () => {
    const runtimeDialogCallback = async (runtime) => {
      // Pending changes?
      if (runtime.changesNotSaved) {
        const choice = await dialog.showMessageBox(
          {
            type: 'question',
            buttons: ['Recover', 'Discard'],
            title: 'Confirmation',
            message: 'You have unsaved changes from the last session, do you want to recover them?'
          }
        );
        if (choice.response === 1) {
          dispatch(cleanTemp());
          return;
        }
          
        // Restore
        dispatch(loadProject(TEMP_FILE))
        dialog.showMessageBox(
          {
            type: 'info',
            buttons: ['Ok'],
            title: 'Recovery',
            message: 'Recovery file has been open. Pleas, use the SAVE AS function to make a copy of this project, the current opened project is a temporal file and will be cleaned up.' 
          }
        );
      }
    }

    // Load runtime
    dispatch(loadRuntime(runtimeDialogCallback));
  }

  return { onLoadRuntimeDialog: useCallback(onLoadRuntimeDialog, []) }
}

