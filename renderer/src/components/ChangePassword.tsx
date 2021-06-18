import * as React from 'react';
import Error from './Atoms/Error';
import Header from './Atoms/Header';
import StarterWrapper from './Containers/StarterWrapper';

const ChangePassword = () => {
    return (
        <StarterWrapper>
            <Header variant="Large">Login</Header>
            <Input
                type="text"
                value={username}
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
            />
            <Input
                type="text"
                value={password}
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            <Error variant="Small">{error}</Error>
            <Button onClick={isReset ? handleResetCheck : handleLogin}>{isReset ? 'Log In' : 'Validate'}</Button>
            <BlockedLink to="/register/">Register</BlockedLink>
        </StarterWrapper>
    )
}

export default ChangePassword;