import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import StoreIcon from '../../components/StoreIcon';
import style from './appLayout.module.css';
const { Header, Content, Footer, Sider } = Layout;



export default function AppLayout({children}) {
  const [ selectKey, setSelectKey ] = useState(1)
  const navigate = useNavigate();
  const onMenuItem = (link, key) => {
    navigate(`${link}`);
    setSelectKey(key);
  }
  return (
    <Layout style={{ minHeight: '100vh', maxWidth: '80%', textAlign: 'center' }}>
       <Header className={style.header} style={{ padding: 0 }} >
        <div className={style.headerRightPart}>
            <Menu theme="dark" mode="horizontal" style={{marginRight: '30px'}} defaultSelectedKeys={[`${selectKey}`]}>
              <Menu.Item key="1" onClick={() => onMenuItem('/', 1)}>Actions</Menu.Item>
              <Menu.Item key="2" onClick={() => onMenuItem('/products', 2)}>Products</Menu.Item>
              <Menu.Item key="3" onClick={() => onMenuItem('/categories', 3)}>Categories</Menu.Item>
            </Menu>
            <StoreIcon />
        </div>
       </Header>
        <Layout>
      
          <Layout className="site-layout">
{/* CONTENT */}
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360, justifyContent: 'center' }}>
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', marginTop: '300px' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
  )
}


