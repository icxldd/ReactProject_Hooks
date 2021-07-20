/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:51:30
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 12:46:40
 */
import { Button, Col, Image, Input, PageHeader, Pagination, Row, Table, Tag } from 'antd';
import { GuildAdminDto, SpaadminService } from 'apis';
import dayjs from 'dayjs';
import { cleanObject, useDebounce, useDocumentTitle } from 'hooks/useDocumentTitle';
import { useGuildParam, useGuilds } from 'hooks/useHttpApi';
import react, { useRef } from 'react'
import { useState } from 'react';
import { QueryClient } from 'react-query';
import { HomeLogoImage } from './home';


export const GuildPage = () => {
  const queryClient = new QueryClient();

  useDocumentTitle("教会管理");

  const inputRef = useRef<any>();
  const [useGuildParam, setUseGuildParam] = useState({} as useGuildParam);

  const { isLoading, error, data: list } = useGuilds(useGuildParam);

  const handleTableChange = (page: number, pageSize?: number | undefined) => {
    setUseGuildParam({ first: (page - 1) * (pageSize as number), rows: pageSize, data: inputRef.current.input.value } as useGuildParam);
  };

  return (<div>
    <PageHeader
      className="site-page-header"
      title="教会管理"
      extra={[
        <Input placeholder="Basic usage" ref={inputRef} style={{ width: '150px' }} />,
        <Button key="1" type="primary" onClick={x => setUseGuildParam({ first: 0, rows: 10, data: inputRef.current.input.value } as useGuildParam)}>
          查询
        </Button>,
      ]}
    />

    <Table
      rowKey={"guildId"}
      pagination={false}
      dataSource={list?.guilds}
      loading={isLoading}
      columns={[
        {
          title: "教会ID",
          dataIndex: "guildId",
          key: "guildId"
        },
        {
          title: "教会名称",
          dataIndex: "displayName",
          key: "displayName"
        },
        {
          title: "教会头像",
          key: "avatarUrl",
          render(value, guild: GuildAdminDto) {
            return <HomeLogoImage src={guild.avatarUrl}></HomeLogoImage>;
          },
        },
        {
          title: "成员人数",
          dataIndex: "membersCount",
          key: "membersCount"
        },
        {
          title: "审核方式",
          render(value, guild: GuildAdminDto) {
            return guild.guildAuditMode == 3 ? <Tag color="#87d068">需要审核</Tag> : <Tag color="#f50">不需要审核</Tag>;
          },
          key: "guildAuditMode"
        },

        {
          title: "创建时间",
          key: "createdDate",
          render(value, guild) {
            return (
              <span>
                {guild.createdDate
                  ? dayjs(guild.createdDate).add(8, 'hour').format("YYYY-MM-DD hh:mm:ss")
                  : "无"}
              </span>
            );
          },

        }
      ]}
    />

    <Pagination defaultCurrent={1} showQuickJumper={true} total={list?.totalRecords} onChange={handleTableChange} style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }} />



  </div>);
}