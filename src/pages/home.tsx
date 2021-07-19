/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:00:27
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 21:07:37
 */
import { useDocumentTitle } from "hooks/useDocumentTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import { Layout, Menu, Breadcrumb, Image, PageHeader } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from 'assets/logo.png'
import { Navigate, Route, Routes } from "react-router";
import { GuildPage } from "./guild-page";
import { LivePage } from "./live-page";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const HomeLogoImage = styled(Image)`
 margin-top: .325rem;
 width: 3.125rem;
 height: 3.125rem;
 border-radius: 50%;
 
`;

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  useDocumentTitle(t('homePage.title'));



  return (
    <Layout>
      <Header className="header">
        <HomeLogoImage src={logo} preview={false}></HomeLogoImage>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '86vh' }}>
        {/* <PageHeader
          className="site-page-header"
          title="Title"
          subTitle="This is a subtitle"
        /> */}
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="人工巡查">
                <Menu.Item key="1">
                  <Link to={"guild"}>教会管理</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to={"live"}>直播管理</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Routes>
              <Route path={"/guild"} element={<GuildPage />} />
              <Route path={"/live"} element={<LivePage />} />
              <Navigate to={"/guild"} />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Icxl</Footer>
    </Layout>
  );
}