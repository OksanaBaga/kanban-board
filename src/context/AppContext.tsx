import React from 'react';

// eslint-disable-next-line import/named
import { To, useNavigate } from 'react-router-dom';

import { IColumn, ITask } from '../types';

interface IDefaultAppContextState {
  pageTitle: string;
  columns: IColumn[];
  tasks: ITask[];
  selectedTask: ITask | null;
}

interface IDefaultContext {
  context: IDefaultAppContextState;
  setColumns: (newColumns: IColumn[]) => void;
  handleNavigate: (newRoute: To) => void;
  setTasks: (tasks: ITask[]) => void;
  setSelectedTask: (task: ITask | null) => void;
  setPageTitle: (title: string) => void;
}

const defaultAppContextState: IDefaultAppContextState = {
  pageTitle: 'Kanban board',
  columns: [],
  tasks: [],
  selectedTask: null,
};

export const defaultContext: IDefaultContext = {
  context: defaultAppContextState,
  setColumns: () => {
    throw new Error(
      'Failed to get the "setColumns" method. Looks like you forgot to implement it.'
    );
  },
  handleNavigate: () => {
    throw new Error(
      'Failed to get the "handleNavigate" method. Looks like you forgot to implement it.'
    );
  },
  setTasks: () => {
    throw new Error(
      'Failed to get the "setColumns" method. Looks like you forgot to implement it.'
    );
  },
  setSelectedTask: () => {
    throw new Error(
      'Failed to get the "setSelectedTask" method. Looks like you forgot to implement it.'
    );
  },
  setPageTitle: () => {
    throw new Error(
      'Failed to get the "setPageTitle" method. Looks like you forgot to implement it.'
    );
  },
};

const AppContext = React.createContext(defaultContext);

function AppProvider({ children }: { children: JSX.Element }) {
  const [context, setContext] = React.useState(defaultAppContextState);
  const navigate = useNavigate();

  const handleNavigate = (newRoute: To): void => {
    navigate(newRoute);
  };

  const setColumns = (newColumns: IColumn[]): void => {
    setContext((prevState) => ({ ...prevState, columns: newColumns }));
  };

  const setTasks = (tasks: ITask[]): void => {
    setContext((prevState) => ({ ...prevState, tasks }));
  };

  const setSelectedTask = (task: ITask | null): void => {
    setContext((prevState) => ({ ...prevState, selectedTask: task }));
  };

  const setPageTitle = (title: string): void => {
    setContext((prevState) => ({ ...prevState, pageTitle: title }));
  };

  const value = React.useMemo(
    () => ({
      context,
      setColumns,
      setTasks,
      setSelectedTask,
      handleNavigate,
      setPageTitle,
    }),
    [context, handleNavigate]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
