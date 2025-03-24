import { Outlet, useModel } from '@umijs/max';
import { ThemeProvider } from 'antd-style';
import applyTheme from '#/resource/applyTheme';

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');

  return (
    <ThemeProvider
      appearance={masterProps.globalState.theme}
      theme={() => applyTheme(masterProps.globalState.themeOptions)}
    >
      <Outlet />
    </ThemeProvider>
  );
};
