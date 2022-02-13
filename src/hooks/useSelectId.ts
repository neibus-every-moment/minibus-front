import { useCallback, useState } from 'react';

export const useSelectIdArray = <T>(initialId: T[]) => {
  const [idArray, setIdArray] = useState(initialId);

  const handlerIdArray = useCallback((e:any) => {
    if (!idArray.includes(e.target.id)) {
      setIdArray([...idArray, e.target.id]);
    } else {
      setIdArray([...idArray.filter(id => id !== e.target.id)]);
    }
  }, [idArray, setIdArray]);
  return [idArray, handlerIdArray] as const;
};

export const useSelectId = <T>(initialId: T) => {
  const [id, setId] = useState(initialId);

  const handler = useCallback((e) => {
    setId(e.target.id);
  }, []);

  return [id, setId, handler] as const;
};
