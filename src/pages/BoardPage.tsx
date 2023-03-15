import React, { useContext } from 'react';

import withApiData from '../hocs/withApiData';
import Board from '../components/Board/Board';
import { AppContext } from '../context/AppContext';

function BoardPage() {
  const { setPageTitle } = useContext(AppContext);

  React.useEffect(() => {
    // Setup a page title.
    setPageTitle('Kanban board');
  }, []);

  return <Board />;
}

export default withApiData(BoardPage);
