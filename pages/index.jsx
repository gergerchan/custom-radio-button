import Radio from 'components/radio';
import Head from 'next/head';
import { Form } from 'reactstrap';

const radioButton = [
  { value: 'Data A', label: 'This is Data A', key: 'a' },
  { value: 'Data b', label: 'This is Data b', key: 'b' },
  {
    value: 'Data c',
    sub: [
      { type: 'date', value: 'Sub A', label: 'this is Sub A', key: 'suba' },
      { value: 'Sub b', label: 'This is Sub b', key: 'subb' },
    ],
    key: 'c',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gerry radio</title>
        <meta name='description' content='Custom Radio Input' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <h1>Custom radio button props</h1>
        <Form>
          <Radio radioData={radioButton} radioTitle='Custom prop radio' />
        </Form>
      </main>
    </div>
  );
}
