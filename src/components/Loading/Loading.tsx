import React from 'react';

import { CircularProgress } from '@mui/material';

import { LoadingWrapper } from './Loading.styles';

function Loading(): JSX.Element {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  );
}

export default Loading;
