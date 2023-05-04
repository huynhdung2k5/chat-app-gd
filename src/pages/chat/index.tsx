// next
import Head from 'next/head';
// sections
import { Chat } from '../../sections/chat';

// ----------------------------------------------------------------------

export default function ChatPage() {
  return (
    <>
      <Head>
        <title> Chat | Minimal UI</title>
      </Head>

      <Chat />
    </>
  );
}
