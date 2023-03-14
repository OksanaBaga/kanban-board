import React from 'react';

import ColumnHeader from '../ColumnHeader/ColumnHeader';
import ColumnFooter from '../ColumnFooter/ColumnFooter';
import { GridStyled, StackStyled } from './Column.styles';
import Task from '../Task/Task';

interface IColumn {
  id: string;
  title: string;
  tasks: number[];
}

function Column(props: IColumn): JSX.Element {
  const { title, tasks = [] } = props;

  return (
    <GridStyled item xs m={0} p={0}>
      <ColumnHeader title={title} tasksCount={tasks.length} />

      <StackStyled spacing={2}>
        {tasks.map((taskId: number, index: number) => (
          <Task key={taskId} id={taskId} index={index} />
        ))}
      </StackStyled>

      <ColumnFooter />
    </GridStyled>
  );
}

export default Column;
