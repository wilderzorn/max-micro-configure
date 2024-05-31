import ModalHoc from '@/components/ModalHoc/index';
import { Form, Input, Select } from 'antd';
import { useTRState } from '#/utils/trHooks.jsx';

const business = ({ onPress }) => {
  const [form] = Form.useForm();
  const [state, setState] = useTRState({
    open: true,
  });

  const onClose = (obj: any = { index: 0 }) => {
    onPress({ ...obj });
    setState({ open: false });
  };

  const onOk = async () => {
    const values = await form.validateFields();
    onClose({ index: 1, values });
  };
  return (
    <ModalHoc
      title="公告"
      width={600}
      onCancel={onClose}
      onOk={onOk}
      centered={true}
      destroyOnClose={true}
      open={state.open}
      okText="确认"
      cancelText="取消"
    >
      <div>
        <Form form={form}>
          <Form.Item
            label="收件人"
            name="recipient"
            rules={[
              {
                required: true,
                message: '请输入收件人!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="公告标题"
            name="placardTitle"
            rules={[
              {
                required: true,
                message: '请输入公告标题!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="公告类型"
            name="placardType"
            rules={[
              {
                required: true,
                message: '请选择公告类型!',
              },
            ]}
          >
            <Select>
              <Select.Option value="通知公告">通知公告</Select.Option>
              <Select.Option value="重要公告">重要公告</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
    </ModalHoc>
  );
};
export default business;
