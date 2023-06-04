import React, { FC } from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
            <button>Login</button>
            <button>Registration</button>

        </div>
    );
};

export default LoginForm;