import { useCallback, useState } from 'react';

export default <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const clearInput = useCallback(() => setValue(initialValue), []);
  return [value, onChange, clearInput, setValue] as const;
};
