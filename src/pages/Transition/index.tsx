import styles from './index.less';
import { Button } from 'antd';
import { TRNotification } from '@/utils/trHooks.jsx';
import Business from './business';

function Transition() {
  const [notice, contextHolder] = TRNotification();
  const onShow = async () => {
    notice.open({
      content: <Business onPress={onPress} />,
    });
  };

  const onPress = async (obj) => {
    notice.close();
    if (obj?.index !== 1) return;
  };

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={onShow}>
        弹窗
      </Button>
      {contextHolder}
    </div>
  );
}

export default Transition;
