// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useTRState } from '#/utils/trHooks.jsx';

const Global = () => {
  const [global, setGlobal] = useTRState({
    name: DEFAULT_NAME,
    theme: '',
  });
  return {
    global,
    setGlobal,
  };
};

export default Global;
