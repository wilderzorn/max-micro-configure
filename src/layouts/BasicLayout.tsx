import { Outlet, useModel } from '@umijs/max';
import { ThemeProvider } from 'antd-style';
import { theme } from 'antd';

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');

  return (
    <ThemeProvider
      appearance={masterProps.globalState.theme}
      theme={(appearance) => {
        return {
          token: {
            colorPrimary: masterProps.globalState?.themeColor ?? '#1677ff',
          },
          algorithm: appearance === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
        };
      }}
    >
      <Outlet />
    </ThemeProvider>
  );
};
