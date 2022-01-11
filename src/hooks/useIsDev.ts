import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';

export const useIsDev = (): boolean => {
  const [isDev, setIsDev] = useState(false); 
  
  useEffect(() => {
    const loadIsDev = async () => { 
      setIsDev(await ipcRenderer.invoke('is-dev') as boolean); 
    };
    loadIsDev();
  }, []);

  return isDev;
}
