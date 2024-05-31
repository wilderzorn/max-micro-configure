import { Modal, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const modalHoc = ({ onCancel, onOk, children, ...modalProps }) => {
  return (
    <Modal onCancel={onCancel} onOk={onOk} {...modalProps}>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </Modal>
  );
};

export default modalHoc;
