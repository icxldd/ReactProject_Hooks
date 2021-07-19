/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:00:27
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 20:24:03
 */
import { PageHead } from "components/page-head";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import { Layout } from 'antd';
import styled from "@emotion/styled";

const { Header, Footer, Sider, Content } = Layout;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
export const HomePage = () => {
  const { t, i18n } = useTranslation();
  useDocumentTitle(t('homePage.title'));



  return (
    <Container>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Container>
  );
}