import styled from 'styled-components';
import { Grid, Stack } from '@mui/material';

// app header, board padding, column padding, column header height, footer height
const STACK_HEIGHT = 'calc(100vh - 64px - 32px - 32px - 18px - 24px)';

export const GridStyled = styled(Grid)({
  '&.MuiGrid-root': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minWidth: '300px',
    padding: 0,
    backgroundColor: '#fafafa',
    borderRadius: '6px',
    border: '1px solid lightgray',

    '&.MuiGrid-item': {
      padding: 0,
    },
  },
});

export const StackStyled = styled(Stack)`
  flex: 1;
  overflow: auto;

  min-height: ${STACK_HEIGHT};
  max-height: ${STACK_HEIGHT};
`;
