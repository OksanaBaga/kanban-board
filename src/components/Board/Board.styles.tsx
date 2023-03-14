import styled from 'styled-components';
import { Grid } from '@mui/material';

export const GridStyled = styled(Grid)({
  '&.MuiGrid-root': {
    backgroundColor: 'aliceblue',
    overflowX: 'auto',
    width: '100%',
    padding: '15px',
  },
});
