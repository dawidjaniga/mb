import React from 'react'
import './App.css'
import { Layout } from 'antd'

import styled from 'styled-components'

import Editor from 'pages/editor'
import { Inner } from './components/Inner'
const { Header, Content, Footer } = Layout

const Logo = styled.div`
  color: #fff;
  font-size: 1.5em;
`

function App () {
  return (
    <Layout className='layout'>
      <Header>
        <Logo>Wikipedia Streams</Logo>
      </Header>
      <Content>
        <Inner>
          <Editor />
        </Inner>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2020 Created by <a href='http://github.com/dawidjaniga/'>Janigowski</a>
      </Footer>
    </Layout>
  )
}

export default App
