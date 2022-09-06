import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider width={100} style={{ backgroundColor: 'green' }}>
          Sider
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
