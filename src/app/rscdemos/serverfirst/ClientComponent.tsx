'use client';

import {useEffect, useState} from 'react';

export default function ClientComponent() {
  const [data, setData] = useState<string>('not loaded yet');
  useEffect(() => {
    setTimeout(() => {
      setData('Async data set');
    })
  }, [])

  return (
    <>
      <p>Data returned: <span>{data}</span></p>
    </>
  );
}
