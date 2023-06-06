import React, { FC, useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import { Context } from './index'
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';
const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
    setUsers([] as IUser[]);
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      console.log('in getUsers', response)
      if(store.user.isActivated) {
        setUsers(response.data);
      } else {
        setUsers([] as IUser[]);
      };
    } catch (e) {
      console.log(e);
    }
  }

  // if (store.isLoading) {
  //   return <div className="loading">Loading...</div>;
  // }
  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />  
        <button onClick={getUsers}>Get Users</button>
      </div>
      
    );
  };
  return (
    <div>
      <h1>{store.isAuth ? `User ${store.user.email} is authorized` : 'Authorizing'}</h1>
      <h1>{store.user.isActivated ? 'Account is confirm via email' : 'Confirm you account'}</h1>
      <button onClick={() => store.logout()}>Logout</button>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      { users.map((user) => <div key={user.email}>{user.email}</div>) }
    </div>
  );
};

export default observer(App);
