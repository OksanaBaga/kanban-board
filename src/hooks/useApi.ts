import React, { useContext } from 'react';

import { fetchColumnList, updateColumn } from '../APIs/column.api';
import { deleteTask, fetchTaskById, fetchTaskList } from '../APIs/task.api';
import { AppContext } from '../context/AppContext';

export default function useApi() {
  const { context, setColumns, setTasks, setSelectedTask } =
    useContext(AppContext);

  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const getColumns = async () => {
    setLoading(true);

    try {
      const columns = await fetchColumnList();

      // Save data to the React context.
      setColumns(columns);
    } catch (err: any) {
      console.error(err);
      setError(`Failed to fetch columns: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getTasks = async () => {
    setLoading(true);

    try {
      const tasks = await fetchTaskList();

      // Save data to the React context.
      setTasks(tasks);
    } catch (err: any) {
      console.error(err);
      setError(`Failed to fetch tasks: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchTask = async (taskId: number) => {
    setLoading(true);

    try {
      const result = await fetchTaskById(taskId);

      // Set a selected task to the React context.
      setSelectedTask(result);
    } catch (err: any) {
      console.error(err);
      setError(
        `Failed to fetch the task by id: ${taskId}. Error: ${err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const findTaskAndRemoveFromColumn = async (taskId: number) => {
    const prevColumn = context.columns.find(({ tasks }) =>
      tasks.includes(+taskId)
    );

    // Clear task from the previous column.
    if (prevColumn) {
      const taskIndex = prevColumn.tasks.indexOf(taskId);

      // Just to be sure that item exists.
      if (taskIndex !== -1) {
        prevColumn.tasks.splice(taskIndex, 1);
      }

      try {
        // Update column in the DB.
        await updateColumn(prevColumn.id, prevColumn);
      } catch (err: any) {
        console.error(`Failed to update a previous column: ${err}`);
      }
    }
  };

  const setTaskColumn = async (taskId: number, columnId: string) => {
    const newColumns = [...context.columns];
    const column = newColumns.find(({ id }) => id === columnId);

    // Do nothing if there is no column.
    if (!column) {
      console.warn(`There is no column with id: ${columnId}`);
      return;
    }

    // Remove task from the previous column before updating.
    await findTaskAndRemoveFromColumn(taskId);

    // Add the task to the column.
    column.tasks.push(taskId);

    try {
      await updateColumn(column.id, column);
    } catch (err: any) {
      console.error(`Failed to update a new column: ${err}`);
    }

    // Update context with updated columns.
    setColumns(newColumns);
  };

  const removeTask = async (taskId: number) => {
    setLoading(true);

    try {
      await deleteTask(taskId);

      const updatedTasks = context.tasks.filter(({ id }) => id !== taskId);
      // Remove task from the React context.
      setTasks(updatedTasks);

      await findTaskAndRemoveFromColumn(taskId);
    } catch (err: any) {
      console.error(err);
      setError(
        `Failed to fetch the task by id: ${taskId}. Error: ${err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    getTasks,
    getColumns,
    fetchTask,
    setTaskColumn,
    removeTask,
    error,
    loading,
  };
}
