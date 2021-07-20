import React, { useEffect } from 'react';
import './App.css';
import './i18n'
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { userState } from './context/userAtom';
import { useRecoilState } from 'recoil';
import { user } from './types/user';
import { LoginScreen } from './unauthenticated-app/login';
import { HomePage } from 'pages/home';
import { useState } from 'react';



const App =  () => {

  const [_user, setUser] =useRecoilState<user>(userState);

  return (
    _user.id ? <HomePage></HomePage> : <LoginScreen></LoginScreen>
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
