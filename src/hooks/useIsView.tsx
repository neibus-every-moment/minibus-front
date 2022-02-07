import { useCallback, useState } from 'react';

export default (initialValue = false) => {
  const [isView, setIsView] = useState(initialValue);
  const handleToggleIsView = useCallback(() => {
    setIsView(prev => !prev);
  }, [isView]);

  return [isView, handleToggleIsView];
};
