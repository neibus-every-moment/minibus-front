import { useCallback, useState } from 'react';

export default <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange] as const;
};
