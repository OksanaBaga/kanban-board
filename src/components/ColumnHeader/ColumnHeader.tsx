import React from 'react';

import { Typography } from '@mui/material';

import {
  ColumnHeaderWrapper,
  Counter,
  TitleWrapper,
} from './ColumnHeader.styles';

interface IColumnHeader {
  title: string;
  tasksCount: number;
}

function ColumnHeader(props: IColumnHeader): JSX.Element {
  const { title, tasksCount } = props;

  return (
    <ColumnHeaderWrapper>
      <Typography variant={'h6'} component="div" color="text.primary">
        <TitleWrapper>
          {title} <Counter>{tasksCount}</Counter>
        </TitleWrapper>
      </Typography>
    </ColumnHeaderWrapper>
  );
}

export default ColumnHeader;
