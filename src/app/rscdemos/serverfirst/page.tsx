import ClientComponent from '@/app/rscdemos/serverfirst/ClientComponent';
import dynamic from 'next/dynamic';

export default function ServerFirst() {
  const ClientComponent = dynamic(() => import('./ClientComponent'), { ssr: false});
  return (
    <>
      <p>I am a server component. Might I present to you  the Client component?</p>
       <ClientComponent />
    </>
  );
}
