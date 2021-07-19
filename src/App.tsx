import React, { useEffect } from 'react';
import './App.css';
import './i18n'
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { userState } from './context/userAtom';
import { useRecoilState } from 'recoil';
import { user } from './types/user';
import { LoginScreen } from './pages/unauthenticated-app/login';



const App = () => {
  const [_user, setUser] = useRecoilState<user>(userState);
  useEffect(() => {
  }, [])
  let isHasUser: boolean = !!_user.id;

  return (
    isHasUser ? <h1>{_user.id}</h1> : <LoginScreen></LoginScreen>
  );
}
// App.whyDidYouRender = true;


// function App() {
//   const { t, i18n } = useTranslation();
//   return (
//     <div className="App">
//       <h1>
//         {t('test')}
//       </h1>
//       <Button onClick={() => i18n.changeLanguage('zh')}>
//         {t('switchChina')}
//       </Button>
//       <Button onClick={() => i18n.changeLanguage('en')}>
//         {t('switchEnglish')}
//       </Button>
//     </div>
//   );
// }

export default App;
