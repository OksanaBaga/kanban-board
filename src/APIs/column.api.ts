import { Config } from '../constants/config';
import { IColumn } from '../types';
import { handleResponse } from '../utils/api';

const fetchColumnList = async () => {
  return fetch(`${Config.backendUrl}/columns`)
    .then(handleResponse)
    .catch((error: Error) => {
      return Promise.reject(error);
    });
};

const updateColumn = async (columnId: string, column: IColumn) => {
  return fetch(`${Config.backendUrl}/columns/${columnId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(column),
  })
    .then(handleResponse)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { fetchColumnList, updateColumn };
