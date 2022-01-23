import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuOutlined
} from '@ant-design/icons';
import StoreIcon from '../../components/StoreIcon';
import style from './appLayout.module.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default function AppLayout({children}) {
  const [ selectKey, setSelectKey ] = useState(1)
  const navigate = useNavigate();
  const onMenuItem = (link, key) => {
    navigate(`${link}`);
    setSelectKey(key);
  }
  return (
    <Layout className={style.mainLayout} >
       <Header className={style.header} style={{ padding: 0 }} >
        <div className={style.headerRightPart}>
          <Menu className={style.desktop} theme="dark" mode="horizontal" className={style.menu} defaultSelectedKeys={[`${selectKey}`]}>
            <Menu.Item className={style.desktop} key="1" onClick={() => onMenuItem('/', 1)}>Actions</Menu.Item>
            <Menu.Item className={style.desktop} key="2" onClick={() => onMenuItem('/products', 2)}>Products</Menu.Item>
            <Menu.Item className={style.desktop} key="3" onClick={() => onMenuItem('/categories', 3)}>Categories</Menu.Item>
            <SubMenu className={style.mobile} key="sub1" icon={<MenuOutlined />}>
              <Menu.Item key="1" onClick={() => onMenuItem('/', 1)}>Actions</Menu.Item>
              <Menu.Item key="2" onClick={() => onMenuItem('/products', 2)}>Products</Menu.Item>
              <Menu.Item key="3" onClick={() => onMenuItem('/categories', 3)}>Categories</Menu.Item>
            </SubMenu>
          </Menu>
            <StoreIcon />
            {/* <MenuOutlined className={style.mobile}/> */}
          

        </div>
       </Header>
        <Layout>
      
          <Layout className="site-layout">
{/* CONTENT */}
            <Content style={{ margin: '0 16px' }}>
              <div className={style.contentLayout} >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', marginTop: '300px' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
  )
}


