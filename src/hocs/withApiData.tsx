import React from 'react';

import { Alert } from '@mui/material';

import useApi from '../hooks/useApi';

const withApiData = (Component: any) => {
  const ApiDataHOC = (props: any) => {
    const { getTasks, getColumns, error } = useApi();

    React.useLayoutEffect(() => {
      (async () => {
        // Fetch tasks and columns and add its to the React context.
        await getTasks();
        await getColumns();
      })();
    }, []);

    if (error) {
      return <Alert severity="error">{error}</Alert>;
    }

    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    ApiDataHOC.getInitialProps = Component.getInitialProps;
  }

  return ApiDataHOC;
};

export default withApiData;
