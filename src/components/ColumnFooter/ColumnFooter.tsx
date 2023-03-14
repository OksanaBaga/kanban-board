import React, { useContext } from 'react';

import AddIcon from '@mui/icons-material/Add';

import { ColumnFooterWrapper } from './ColumnFooter.styles';
import { AppContext } from '../../context/AppContext';

function ColumnFooter(): JSX.Element {
  const { handleNavigate } = useContext(AppContext);

  return (
    <ColumnFooterWrapper onClick={() => handleNavigate('/task/create')}>
      <AddIcon /> Add item
    </ColumnFooterWrapper>
  );
}

export default ColumnFooter;
