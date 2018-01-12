import { Component } from 'react';
import Layout from '../components/Layout';

class Index extends Component {
  state = { poem: '...' };
  render() {
    return (
      <Layout title={'Haiku'}>
        {this.state.poem.split('\n').map((line, i) => <p key={i}>{line}</p>)}
      </Layout>
    );
  }

  async componentDidMount() {
    const poems = await fetch('/static/db.json').then(res => res.json());
    this.setState({ poem: poems[(Math.random() * poems.length) | 0] });
  }
}

export default Index;
