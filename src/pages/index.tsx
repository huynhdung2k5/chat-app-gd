// next
import Head from 'next/head';
import { useRouter } from 'next/router';
// react
import { useEffect } from 'react';
// route
import { PATH_CHAT } from '../routes/paths';

export default function HomePage() {
  const { pathname, replace } = useRouter(); // router

  useEffect(() => {
    replace(PATH_CHAT.root);
  }, [pathname]); // chuyển đến trang dashboard

  return (
    <Head>
      <title> GD Việt Nam</title>
    </Head>
  );
}
