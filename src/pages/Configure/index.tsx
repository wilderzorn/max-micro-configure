import Guide from '@/components/Guide';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { Button, Row } from 'antd';
import TREmpty from '#/components/TREmpty';

const Configure: React.FC = () => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return (
    <div className={styles.container}>
      <Guide name={'子应用'} />
      <Row>
        <Button
          type="primary"
          onClick={() => {
            masterProps?.toMasterLink('/table');
          }}
        >
          子应用条跳转
        </Button>
      </Row>
      <TREmpty />
    </div>
  );
};

export default Configure;
