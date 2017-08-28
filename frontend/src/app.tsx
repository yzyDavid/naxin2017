import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Button, message } from 'antd';

import Sheet from './sheet';
import LoginPanel from './login';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <div>
                            <h1 style={{ color: "#aaf" }}>浙江大学 微软学生俱乐部 2017纳新网站</h1>
                        </div>
                    </Header>
                    <Content>
                        <Sheet studentName="testName" studentId="testId" />
                        <LoginPanel />
                    </Content>
                    <Footer>
                        <h4>MSC@ZJU 2017</h4>
                    </Footer>
                </Layout>
            </div>
        );
    }
};

export default App;
