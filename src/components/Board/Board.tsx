import React, { useContext } from 'react';

import { GridStyled } from './Board.styles';
import Column from '../Column/Column';
import { AppContext } from '../../context/AppContext';

function Board() {
  const { context } = useContext(AppContext);

  return (
    <GridStyled
      container
      columns={context.columns.length}
      direction="row"
      wrap="nowrap"
      spacing={2}
      gap={2}
      m={0}
    >
      {context.columns.map((item) => (
        <Column key={item.id} {...item} />
      ))}
    </GridStyled>
  );
}

export default Board;
