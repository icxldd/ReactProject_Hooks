/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 15:47:32
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-19 20:10:48
 */
import styled from "@emotion/styled";
import { Button, Card, Col, Form, Image, Input, message, Row } from "antd";
import React from "react";
import logo from 'assets/logo.png'
import Password from "antd/lib/input/Password";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { SwitchLanguage } from "components/switch-language";
import { useTranslation } from "react-i18next";
import { AccountService, LoginAccountByMobile, OpenAPI } from "apis";
import { useRecoilState } from "recoil";
import { user } from "types/user";
import { userState } from "context/userAtom";
type Headers = Record<string, string>;
const CenterPage = styled.div`
  height: 100vh;
  position: absolute;
  top: 35%;
  left: 40%;
  overflow: hidden;
`;
const LongButton = styled(Button)`
width: 100%;
`;


const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;


export const LoginScreen = () => {
  const { t, i18n } = useTranslation();
  const [_user, setUser] = useRecoilState<user>(userState);
  useDocumentTitle(t('loginPage.title'));

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    AccountService.loginAccountByMobileauthmobilePost('application/json', values.username, values.password).then(async x => {
      let heads: Headers = {
        "X-ss-pid": x.sessionId as string, "X-ss-opt": 'perm'
      };
      OpenAPI.HEADERS = heads;
      let self = await AccountService.showAccountshowGet('application/json');
      setUser({ id: (x.userId as number).toString(), token: x.sessionId as string, userName: self.account?.displayName ,avatarUrl:self.account?.avatarUrl} as user);
      console.log(self);
    }).catch(x => {
      message.error(x?.body?.responseStatus?.message);
    });
  };

  return (
    <Container>
      <ShadowCard>
        <Image src={logo} preview={false} />
        <Form onFinish={handleSubmit}>
          <Form.Item
            name={"username"}
            rules={[{ required: true, message: t('loginPage.userName') }]}
          >
            <Input placeholder={t('loginPage.userName')} type="text" id={"username"} />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: t('loginPage.checkNumber') }]}
          >
            <Input placeholder={t('loginPage.checkNumber')} type="password" id={"password"} />
          </Form.Item>
          <Form.Item>
            <LongButton htmlType={"submit"} type={"primary"}>
              {t('loginPage.login')}
            </LongButton>
          </Form.Item>
          <Form.Item>
            <SwitchLanguage style={{ marginLeft: '100px' }}></SwitchLanguage>
          </Form.Item>
        </Form>

      </ShadowCard>
    </Container>);
};

