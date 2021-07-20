/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:00:27
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 13:58:30
 */
import { useDocumentTitle } from "hooks/useDocumentTitle";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import { Layout, Menu, Breadcrumb, Image, PageHeader } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from 'assets/logo.png'
import { Navigate, Route, Routes } from "react-router";
import { GuildPage } from "./guild-page";
import { LivePage } from "./live-page";
import { Link } from "react-router-dom";
import { SwitchLanguage } from "components/switch-language";
import { DefaultValue, useRecoilState } from "recoil";
import { userState } from "context/userAtom";
import { user } from "types/user";
import { OpenAPI } from "apis";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const HomeLogoImage = styled(Image)`
 margin-top: .425rem;
 width: 3rem;
 height: 3rem;
 border-radius: 50%;
`;


const HomeHeadSpan = styled.span`
    color: #fff;
    position: relative;
    top: -10px;
    left: 10px;
`;


const HomeHeadRight = styled.div`
  position: absolute;
  right: 10%;
  top: .325rem;
`;
const HomeHeadLogout = styled.span`
 color:#fff;
 cursor: pointer;
 margin-left:20px;
`;


export const HomePage = () => {
  const { t, i18n } = useTranslation();
  useDocumentTitle(t('homePage.title'));
  const [_user, setUser] = useRecoilState<user>(userState);

  return (
    <Layout>
      <Header className="header">
        <HomeLogoImage src={logo} preview={false}></HomeLogoImage>
        <HomeHeadSpan>{t('homePage.cloudGuildText')}</HomeHeadSpan>
        <HomeHeadRight>
          <SwitchLanguage fontColor={'#fff'} style={{ color: '#fff', bottom: '10px' }}></SwitchLanguage>
          <HomeHeadLogout onClick={() => {
            setUser({} as user);
            OpenAPI.HEADERS = undefined;
            window.location.href = "http://localhost:3000";
          }}>{t('homePage.exitLogin')}</HomeHeadLogout>
        </HomeHeadRight>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '86vh' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title={t('homePage.inspections')}>
                <Menu.Item key="1">
                  <Link to={"guild"}>{t('homePage.guildManage')}</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to={"live"}>{t('homePage.liveManage')}</Link>
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