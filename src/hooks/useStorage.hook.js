import { useEffect, useState } from 'react';

export function useStorage(key) {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(key)) ?? []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}
