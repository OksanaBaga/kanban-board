import React from 'react';

import { Alert } from '@mui/material';

import useApi from '../hooks/useApi';
import Loading from '../components/Loading/Loading';

const withApiData = (Component: any) => {
  const ApiDataHOC = (props: any) => {
    const { getTasks, getColumns, error, loading } = useApi();

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

    if (loading) return <Loading />;

    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    ApiDataHOC.getInitialProps = Component.getInitialProps;
  }

  return ApiDataHOC;
};

export default withApiData;
