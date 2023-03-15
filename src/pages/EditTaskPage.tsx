import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { Alert, Container } from '@mui/material';

import { AppContext } from '../context/AppContext';
import NotFoundPage from './NotFoundPage';
import EditTask from '../components/EditTask/EditTask';
import useApi from '../hooks/useApi';
import Loading from '../components/Loading/Loading';
import withApiData from '../hocs/withApiData';

function EditTaskPage(): JSX.Element {
  const { taskId } = useParams();
  const { context, setPageTitle } = useContext(AppContext);
  const { fetchTask, error, loading } = useApi();

  React.useEffect(() => {
    if (taskId) {
      (async () => {
        // Fetch task first to show its content on the page.
        await fetchTask(taskId);
      })();
    }
  }, [taskId]);

  React.useEffect(() => {
    // Setup a page title.
    setPageTitle('Edit a task');
  }, []);

  if (loading) return <Loading />;

  // Return not found page if there is no task found.
  if (!context.selectedTask) return <NotFoundPage />;

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container maxWidth="md">
      <EditTask />
    </Container>
  );
}

export default withApiData(EditTaskPage);
