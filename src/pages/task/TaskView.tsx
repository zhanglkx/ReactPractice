/**
 * TASK OA 任务管理系统

 */
import React, { useState, useEffect } from "react";
import "./TaskView.less";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Table,
  Tag,
  message,
} from "antd";
import {
  getTaskList,
  addTask,
  removeTask,
  completeTask,
} from "@/api/index";

/* 对日期处理的方法 */
const zero = function zero(text: string | any[]) {
  text = String(text);
  return text.length < 2 ? "0" + text : text;
};
const formatTime = function formatTime(time: string) {
  let arr = time.match(/\d+/g),
    [, month, day, hours = "00", minutes = "00"] = arr;
  return `${zero(month)}-${zero(day)} ${zero(hours)}:${zero(minutes)}`;
};

function Task() {
  /* 初始组件的状态 */
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  let [formIns] = Form.useForm();

  useEffect(() => {
    queryData();
  }, [selectedIndex]);

  /* 表格列的数据 */
  const columns = [
    {
      title: "编号",
      dataIndex: "id",
      align: "center",
      width: "8%",
    },
    {
      title: "任务描述",
      dataIndex: "task",
      width: "50%",
    },
    {
      title: "状态",
      dataIndex: "state",
      align: "center",
      width: "10%",
      render: (text: string | number) => (+text === 1 ? "未完成" : "已完成"),
    },
    {
      title: "完成时间",
      dataIndex: "time",
      align: "center",
      width: "15%",
      render: (_: any, record: { state: any; time: any; complete: any; }) => {
        let { state, time, complete } = record;
        if (+state === 2) time = complete;
        return formatTime(time);
      },
    },
    {
      title: "操作",
      render: (_: any, record: { id: any; state: any; }) => {
        let { id, state } = record;
        return (
          <>
            <Popconfirm
              title="您确定要删除此任务吗？"
              onConfirm={() => {
                handleRemove(id);
              }}
            >
              <Button type="link">删除</Button>
            </Popconfirm>

            {+state !== 2 ? (
              <Popconfirm
                title="您确把此任务设置为完成吗？"
                onConfirm={() => {
                  handleUpdate(id);
                }}
              >
                <Button type="link">完成</Button>
              </Popconfirm>
            ) : null}
          </>
        );
      },
    },
  ];

  /* 对话框和表单处理 关闭对话框 & 清除表单中的内容*/
  const closeModal = () => {
    setModalVisible(false);
    setConfirmLoading(false);
    formIns.resetFields();
  };

  // 新增任务
  const submit = async () => {
    try {
      // 表单校验
      await formIns.validateFields();
      // 获取Form收集的信息
      let { task, time } = formIns.getFieldsValue();
      time = time.format("YYYY-MM-DD HH:mm:ss");
      // 向服务器发送请求
      setConfirmLoading(true);
      let { code } = await addTask(task, time);
      if (+code !== 0) {
        message.error("很遗憾，当前操作失败，请稍后再试!");
      } else {
        closeModal();
        await queryData();
        message.success("恭喜您，当前操作成功!");
      }
    } catch (_) {
      console.log(_, "表单校验失败");
    }
    setConfirmLoading(false);
  };

  /* 关于TABLE数据的处理 */
  // 从服务器获取指定状态的任务
  const queryData = async () => {
    setTableLoading(true);
    try {
      let { code, list } = await getTaskList(selectedIndex);
      if (+code !== 0) list = [];
      setTableData(list);
    } catch (_) {
      console.log(_);
    }
    setTableLoading(false);
  };

  // 选中状态切换
  const changeIndex = (index: React.SetStateAction<number>) => {
    // 这句代码可以不要，react函数组件本身会优化，因为当前后两个UI没有改变的实际，视图不会更新(类组件需要添加，类组件不会优化)
    // if (selectedIndex === index) return;

    // flushSync(() => {
    setSelectedIndex(index);
    //     console.log('切换状态成功', index)
    // });
    // queryData();
  };

  // 删除
  const handleRemove = async (id: any) => {
    try {
      let { code } = await removeTask(id);
      if (+code !== 0) {
        message.error("很遗憾，操作失败，请稍后再试!");
      } else {
        await queryData();
        message.success("恭喜您，操作成功!");
        console.log("操作删除成功");
      }
    } catch (_) {
      console.log(_);
    }
  };

  // 完成
  const handleUpdate = async (id: any) => {
    try {
      let { code } = await completeTask(id);
      if (+code !== 0) {
        message.error("很遗憾，操作失败，请稍后再试!");
      } else {
        await queryData();
        message.success("恭喜您，操作成功!");
        console.log("操作设置完成成功");
      }
    } catch (_) {
      console.log(_);
    }
  };

  return (
    <div className="task-box">
      {/* 头部 */}
      <div className="header">
        <h2 className="title">TASK OA 任务管理系统</h2>
        <Button
          type="primary"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          新增任务
        </Button>
      </div>

      {/* 标签 */}
      <div className="tag-box">
        {["全部", "未完成", "已完成"].map((item, index) => {
          return (
            <Tag
              key={index}
              color={selectedIndex === index ? "#1677ff" : ""}
              onClick={() => {
                changeIndex(index);
              }}
            >
              {item}
            </Tag>
          );
        })}
      </div>

      {/* 表格 */}
      <Table
        dataSource={tableData}
        columns={columns}
        loading={tableLoading}
        pagination={false}
        rowKey="id"
      />

      {/* 对话框 & 表单 */}
      <Modal
        title="新增任务窗口"
        open={modalVisible}
        confirmLoading={confirmLoading}
        keyboard={false}
        maskClosable={false}
        okText="确认提交"
        onCancel={closeModal}
        onOk={submit}
      >
        <Form
          form={formIns}
          layout="vertical"
          validateTrigger="onBlur"
          initialValues={{ task: "", time: "" }}
        >
          <Form.Item
            label="任务描述"
            name="task"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: "任务描述是必填项" },
              { min: 6, message: "输入的内容至少6位及以上" },
            ]}
          >
            <Input.TextArea rows={4}></Input.TextArea>
          </Form.Item>
          <Form.Item
            label="预期完成时间"
            name="time"
            validateTrigger="onBlur"
            rules={[{ required: true, message: "预期完成时间是必填项" }]}
          >
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Task;
