import React, { useContext } from 'react';

import {
  Button,
  TextField,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { ButtonContainer } from './EditTask.styles';
import { createTask, updateTask } from '../../APIs/task.api';
import useApi from '../../hooks/useApi';
import { ITask } from '../../types';

function EditTask() {
  const { taskId } = useParams();
  const { context, setSelectedTask, handleNavigate } = useContext(AppContext);
  const { setTaskColumn, removeTask } = useApi();

  // Avoid nullable value.
  const selectedTask = React.useMemo(
    () => context.selectedTask || ({} as ITask),
    [context.selectedTask]
  );
  // Copy selected task to the local state to avoid updating not saved data.
  const [values, setValue] = React.useState<ITask>(
    _.cloneDeep(selectedTask) as ITask
  );
  // Define column id of the selected task.
  const [columnId, setColumnId] = React.useState(
    context.columns.find(({ tasks }) => taskId && tasks.includes(+taskId))
      ?.id ||
      context.columns[0]?.id ||
      ''
  );
  const [errors, setError] = React.useState({
    title: false,
  });

  const handleChange = (fieldName: string, value: string) => {
    setValue((prevState: ITask) => ({ ...prevState, [fieldName]: value }));

    // The title is required, that is why it needs to check possible error.
    if (fieldName === 'title') {
      setError((prevState) => ({ ...prevState, title: !value }));
    }
  };

  const handleColumnChange = (id: string) => {
    setColumnId(id);
  };

  const handleSave = async () => {
    try {
      if (taskId) {
        await updateTask(taskId, values);
      } else {
        await createTask(values);
      }
      // Update value inside the React context.
      setTaskColumn(values.id, columnId);
      setSelectedTask(null);

      // Go back to the previous page.
      handleNavigate(-1);
    } catch (error) {
      // TODO: Add notification system.
      console.error(`Failed to ${taskId ? 'update' : 'create'} task:`, error);
    }
  };

  const handleRemove = async () => {
    // Nothing to do without the task ID.
    if (!taskId) return;

    try {
      await removeTask(Number(taskId));

      // Go back to the previous page.
      handleNavigate(-1);
    } catch (err) {
      // TODO: Add notification system.
      console.error(`Failed to remove task:`, err);
    }
  };

  React.useEffect(() => {
    // Re-set the local context if selectedTask is changed.
    setValue(selectedTask);
  }, [selectedTask]);

  // Don't show any content if there is no selected task.
  if (!context.selectedTask) return null;

  return (
    <>
      <Grid
        container
        spacing={2}
        gap={2}
        margin={0}
        justifyContent="space-between"
      >
        <Grid item xs={12} margin={0}>
          <FormControl fullWidth>
            <TextField
              label="Title"
              required
              fullWidth
              error={errors.title}
              value={values.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} margin={0}>
          <FormControl fullWidth>
            <TextField
              label="Description"
              fullWidth
              multiline
              value={values.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3} margin={0}>
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              required
              fullWidth
              label="Status"
              value={columnId}
              onChange={(e) => handleColumnChange(e.target.value)}
            >
              {context.columns.map((column) => (
                <MenuItem key={column.id} value={column.id}>
                  {column.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ButtonContainer>
        {taskId && (
          <Button variant="outlined" onClick={handleRemove}>
            Remove
          </Button>
        )}
        <Button
          variant="contained"
          disabled={!values.title}
          onClick={handleSave}
        >
          Save
        </Button>
      </ButtonContainer>
    </>
  );
}

export default EditTask;
