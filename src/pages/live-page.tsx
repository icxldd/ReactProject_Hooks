/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: icxl
 * @Date: 2021-07-19 20:52:26
 * @LastEditors: icxl
 * @LastEditTime: 2021-07-20 14:22:32
 */
import { Button, Input, Modal, PageHeader, Pagination, Space, Table, Tag } from 'antd';
import { LivecastAdminDto } from 'apis';
import dayjs from 'dayjs';
import { useDocumentTitle, useUrlQueryParam } from 'hooks/useDocumentTitle';
import { useLivecastParam, useLivecasts } from 'hooks/useHttpApi';
import react, { useRef, useState } from 'react'
import DPlayer from "dplayer";

export const LivePage = () => {
  useDocumentTitle("直播管理");


  const inputRef = useRef<any>();
  const [useLivecastParam, setUseGuildParam] = useUrlQueryParam([
    "first",
    "rows",
    "data"
  ]);
  const { isLoading, error, data: list } = useLivecasts(useLivecastParam as unknown as useLivecastParam);

  const handleTableChange = (page: number, pageSize?: number | undefined) => {
    setUseGuildParam({ first: (page - 1) * (pageSize as number), rows: pageSize, data: inputRef.current.input.value } as useLivecastParam);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);


  const [palyer, setPlyaer] = useState<any>();


  const handleOk = () => {
    palyer.pause();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    palyer.pause();
    setIsModalVisible(false);
  };
  return (<div>
    <Modal title="视频播放" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div id="video" style={{ width: '450px', height: '300px' }}></div>
    </Modal>
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
          render(value, livecast: LivecastAdminDto) {
            return (
              <span>
                {livecast.description?.substring(0, 20) + '...'}
              </span>
            );
          },
        },
        {
          title: "状态",
          key: "status",
          render(value, livecast: LivecastAdminDto) {
            return (
              livecast.status == 0 ? <Tag color="#87d068">直播中</Tag> : <Tag color="#108ee9">已结束</Tag>
            );
          },
        },
        {
          title: "创建时间",
          key: "createdDate",
          render(value, livecast: LivecastAdminDto) {
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
          render: (text, livecast: LivecastAdminDto) => (
            <Space size="middle">
              <Button disabled={livecast.recordUrl == null} onClick={x => {
                setIsModalVisible(true);
                setTimeout(x => {
                  setPlyaer(new DPlayer({
                    autoplay: true,
                    container: document.getElementById('video'),
                    video: {
                      url: livecast.recordUrl as string,
                      type: 'auto',
                    },
                  }));

                }, 500);
              }}>视频播放</Button>
            </Space>
          ),
        },
      ]}
    />

    <Pagination showQuickJumper={true} total={list?.totalRecords} onChange={handleTableChange} style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }} />


  </div>);
}