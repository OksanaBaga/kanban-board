import React from 'react';

import { LayoutWrapper } from './Layout.styles';
import Header from '../Header/Header';

interface ILayout {
  children: JSX.Element;
}

function Layout(props: ILayout): JSX.Element {
  const { children } = props;

  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
