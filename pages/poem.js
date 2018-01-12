import poems from '../static/db.json';
import Layout from '../components/Layout';

const Page = ({ poem }) => {
  return (
    <Layout title={'Haiku'}>
      {poem.split('\n').map((line, i) => <p key={i}>{line}</p>)}
    </Layout>
  );
};

Page.getInitialProps = async ({ query }) => {
  const poem = poems[query.id];

  return { poem };
};

export default Page;
