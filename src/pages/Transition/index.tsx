import styles from './index.less';
import { Button } from 'antd';
import useNotice from '#/hooks/useNotice';
import Business from './business';

function Transition() {
  const [notice, NoticeContext] = useNotice();
  const onShow = async () => {
    notice.open(Business);
  };

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={onShow}>
        弹窗
      </Button>
      {NoticeContext}
    </div>
  );
}

export default Transition;
