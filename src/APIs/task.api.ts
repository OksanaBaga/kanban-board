import { Config } from '../constants/config';
import { ITask } from '../types';
import { handleResponse } from '../utils/api';

const fetchTaskList = async () => {
  return fetch(`${Config.backendUrl}/tasks`)
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const fetchTaskById = async (taskId: number) => {
  return fetch(`${Config.backendUrl}/tasks/${taskId}`)
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const createTask = async (task: string) => {
  return fetch(`${Config.backendUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const updateTask = async (taskId: number, task: ITask) => {
  return fetch(`${Config.backendUrl}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

const deleteTask = async (taskId: number) => {
  return fetch(`${Config.backendUrl}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { fetchTaskById, createTask, updateTask, fetchTaskList, deleteTask };
