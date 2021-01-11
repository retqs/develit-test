import {useState, useCallback} from 'react';

import {IInput} from '../types';

export function useEdit<T>(state: T) {
  const [data, setData] = useState<T>(state);

  const handleChange = useCallback(
    (e: IInput): void => {
      const target = e.target;

      const value = target.type === 'checkbox' ? target.checked : target.value;

      setData({...data, [target.name]: value});
    },
    [data]
  );

  return {
    data,
    handleChange,
  };
}
