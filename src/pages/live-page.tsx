/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:52:26
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 13:07:42
 */
import { Button, Input, PageHeader, Pagination, Space, Table, Tag } from 'antd';
import { LivecastAdminDto } from 'apis';
import dayjs from 'dayjs';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useLivecastParam, useLivecasts } from 'hooks/useHttpApi';
import react, { useRef, useState } from 'react'


export const LivePage=()=>{
  useDocumentTitle("直播管理");


  const inputRef = useRef<any>();
  const [useLivecastParam, setUseGuildParam] = useState({} as useLivecastParam);
  const { isLoading, error, data: list } = useLivecasts(useLivecastParam);
  
  const handleTableChange = (page: number, pageSize?: number | undefined) => {
    setUseGuildParam({ first: (page - 1) * (pageSize as number), rows: pageSize, data: inputRef.current.input.value } as useLivecastParam);
  };

  return (<div>
    <PageHeader
      className="site-page-header"
      title="直播管理"
      extra={[
        <Input placeholder="Basic usage" ref={inputRef} style={{ width: '150px' }} />,
        <Button key="1" type="primary" onClick={x => setUseGuildParam({ first: 0, rows: 10, data: inputRef.current.input.value } as useLivecastParam)}>
          查询
        </Button>,
      ]}
    />

    <Table
      rowKey={"livecastId"}
      pagination={false}
      dataSource={list?.livecasts}
      loading={isLoading}
      columns={[
        {
          title: "直播ID",
          dataIndex: "livecastId",
          key: "livecastId"
        },
        {
          title: "教会ID",
          dataIndex: "guildId",
          key: "guildId"
        },
        {
          title: "标题",
          dataIndex: "title",
          key: "title"
        },
        {
          title: "描述",
          key: "description",
          render(value, livecast:LivecastAdminDto) {
            return (
              <span>
               {livecast.description?.substring(0,20)+'...'}
              </span>
            );
          },
        },
        {
          title: "状态",
          key: "status",
          render(value, livecast:LivecastAdminDto) {
            return (
              livecast.status==0?<Tag color="#87d068">直播中</Tag>:<Tag color="#108ee9">已结束</Tag>
            );
          },
        },
        {
          title: "创建时间",
          key: "createdDate",
          render(value, livecast:LivecastAdminDto) {
            return (
              <span>
                {livecast.createdDate
                  ? dayjs(livecast.createdDate).add(8, 'hour').format("YYYY-MM-DD hh:mm:ss")
                  : "无"}
              </span>
            );
          },

        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>视频播放</a>
            </Space>
          ),
        },
      ]}
    />

    <Pagination showQuickJumper={true} total={list?.totalRecords} onChange={handleTableChange} style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }} />


  </div>);
}