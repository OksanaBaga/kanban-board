import React, { useContext } from 'react';

import { Container } from '@mui/material';
import { faker } from '@faker-js/faker';

import EditTask from '../components/EditTask/EditTask';
import { AppContext } from '../context/AppContext';
import withApiData from '../hocs/withApiData';

function CreateTaskPage(): JSX.Element {
  const { setSelectedTask, setPageTitle } = useContext(AppContext);

  const addNewTask = () => {
    const newTask = {
      id: faker.mersenne.rand(), // generate random ID
      title: '',
      description: '',
      labels: [],
      assignee: [],
    };

    // Add an empty data to the React context.
    setSelectedTask(newTask);
  };

  React.useEffect(() => {
    // Add new task object on page load.
    addNewTask();
    // Setup a page title.
    setPageTitle('Create a task');
  }, []);

  return (
    <Container maxWidth="md">
      <EditTask />
    </Container>
  );
}

export default withApiData(CreateTaskPage);
