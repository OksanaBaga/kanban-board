import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import db from '../db.json';
import App from './App';

// Mock the API response
fetchMock.mockResponse(JSON.stringify(db));

describe('Renders kanban board with:', () => {
  console.log(JSON.stringify(db));
  test('page header', () => {
    render(<App />);

    const headingElement = screen.getByText(/Kanban board/i);
    expect(headingElement).toBeInTheDocument();
  });

  describe('all columns from the DB and each column has:', () => {
    test('title', async () => {
      render(<App />);

      await waitFor(() => {
        db.columns.forEach((column) => {
          const columnTitleElement = screen.getByText(column.title);
          expect(columnTitleElement).toBeInTheDocument();
        });
      });
    });

    test('tasks', async () => {
      render(<App />);

      await waitFor(() => {
        db.columns.forEach((column) => {
          column.tasks.forEach((taskId) => {
            const taskTitleElement = screen.getAllByTestId(taskId);
            expect(taskTitleElement).toBeTruthy();
          });
        });
      });
    });

    test('add item element', async () => {
      render(<App />);

      await waitFor(() => {
        const addItemElement = screen.getAllByText(/Add item/i);
        expect(addItemElement).toHaveLength(db.columns.length);
      });
    });
  });
});
