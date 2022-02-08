import { useCallback, useState } from 'react';

export default <T>(initialValue: T[]) => {
  const [valueArray, setValueArray] = useState(initialValue);

  const handlerValueArray = useCallback((e:any) => {
    if (!valueArray.includes(e.target.value)) {
      setValueArray([...valueArray, e.target.value]);
    } else {
      setValueArray([...valueArray.filter(value => value !== e.target.value)]);
    }
  }, [valueArray, setValueArray]);
  return [valueArray, handlerValueArray] as const;
};
