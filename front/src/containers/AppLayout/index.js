import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import StoreIcon from '../../components/StoreIcon';

const { Header, Content, Footer, Sider } = Layout;



export default function AppLayout({children}) {
  // NAVIGATION 
  const navigate = useNavigate();
  const handlerRoute = (route) => {
    navigate(route);
  };
  const [ collapsed, setCollapsed ] = useState(false);
  const onCollapse = close => {
    setCollapsed(close);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Header className="site-layout-background" style={{ padding: 0 }} >
         HELL(O)
         <StoreIcon />
       </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <span onClick={() => handlerRoute('/')}>Actions</span>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <NavLink to='/products'> Products </NavLink>
              </Menu.Item>

              <Menu.Item key="3">
                <span onClick={() => handlerRoute('/categories')}>Categories</span>
              </Menu.Item>
              <Menu.Item key="9" icon={<FileOutlined />}>
                <span onClick={() => handlerRoute('/store')}>Store</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
{/* CONTENT */}
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
  )
}


