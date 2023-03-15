import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

import { AppContext } from '../context/AppContext';

const StyledContainer = styled(Container)({
  '&.MuiContainer-root': {
    width: '100vw',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Heading = styled(Typography)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const Message = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 16px;
  text-align: center;
`;

function NotFoundPage(): JSX.Element {
  const { setPageTitle } = useContext(AppContext);

  React.useEffect(() => {
    // Setup a page title.
    setPageTitle('Not found');
  }, []);

  return (
    <StyledContainer>
      <Heading variant="h2">Oops! Page not found.</Heading>
      <Message variant="body1">
        The page you are looking for does not exist. Please check the URL or go
        back to the <Link to="/">home page</Link>.
      </Message>
    </StyledContainer>
  );
}

export default NotFoundPage;
