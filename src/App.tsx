import { Routes as Rs, Route as R } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Pages
import { Erro404 as E404 } from './pages/Erro404'
import { Login } from './pages/Login';

library.add(far, fas);

const App = () => {
  return (
    <>
      <Rs>

        <R path='/login' element={<Login />} />

        <R path='/*' element={<E404 />} />

      </Rs>
    </>
  );
}

export default App;