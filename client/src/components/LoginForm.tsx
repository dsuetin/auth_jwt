import React, { FC, useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { store } = useContext(Context);
    console.log('LoginForm email', email)
    console.log('LoginForm password', password)
    console.log('LoginForm store', store)

    return (
        <div>
            <input
                onChange={ e => setEmail(e.target.value) }
                value={ email }
                type="text"
                placeholder="Email"
            />
            <input
                onChange={ e => setPassword(e.target.value) }
                value={ password }
                type="text"
                placeholder="Passowrd"
            />
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.registration(email, password)}>Register</button>
            {/* <button onClick={() => store.logout()}>Logout</button> */}


        </div>
    );
};

export default observer(LoginForm);