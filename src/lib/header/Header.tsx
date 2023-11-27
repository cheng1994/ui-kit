import React from 'react';

import { Button } from '../button/Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  children: {
    logo?: React.ReactNode
    nav?: React.ReactNode
  };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, children, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="border-slate-100 border-b-2 bg-slate-50 flex content-center items-center px-5 py-3">
      {children.logo ? (
        <div className="w-fit">{children.logo}</div>
      ): null }
      <div className="grow">
        {children.nav}
      </div>
      <div className="self-end">
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="base" primary onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="base" onClick={onLogin} label="Log in" />
            <Button primary size="base" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
