import React from 'react';

import withApiData from '../hocs/withApiData';
import Board from '../components/Board/Board';

function BoardPage() {
  return <Board />;
}

export default withApiData(BoardPage);
