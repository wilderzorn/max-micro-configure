// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useTRState } from '#/hooks/trHooks';

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
