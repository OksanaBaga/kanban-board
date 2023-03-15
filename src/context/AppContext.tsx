import React from 'react';

import { useNavigate } from 'react-router-dom';

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
  handleNavigate: (newRoute: string | number) => void;
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

  const handleNavigate = React.useCallback(
    (newRoute: string | number): void => {
      navigate(newRoute as any);
    },
    [navigate]
  );

  const setColumns = React.useCallback((newColumns: IColumn[]): void => {
    setContext((prevState) => ({ ...prevState, columns: newColumns }));
  }, []);

  const setTasks = React.useCallback((tasks: ITask[]): void => {
    setContext((prevState) => ({ ...prevState, tasks }));
  }, []);

  const setSelectedTask = React.useCallback((task: ITask | null): void => {
    setContext((prevState) => ({ ...prevState, selectedTask: task }));
  }, []);

  const setPageTitle = React.useCallback((title: string): void => {
    document.title = title;
    setContext((prevState) => ({ ...prevState, pageTitle: title }));
  }, []);

  const value = React.useMemo(
    () => ({
      context,
      setColumns,
      setTasks,
      setSelectedTask,
      handleNavigate,
      setPageTitle,
    }),
    [
      context,
      handleNavigate,
      setColumns,
      setPageTitle,
      setSelectedTask,
      setTasks,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
