import React, { useContext } from 'react';

import { CardContent, Typography, Link } from '@mui/material';

import { CardStyled, LabelStyled, LabelsWrapper } from './Task.styles';
import { AppContext } from '../../context/AppContext';

interface ITask {
  id: number;
  index: number;
}

function Task(props: ITask): JSX.Element | null {
  const { id } = props;
  const { context, handleNavigate } = useContext(AppContext);

  // Get task from the React context, since them should be already fetched.
  const task = React.useMemo(() => {
    return context.tasks.find((item) => item.id === id);
  }, [id, context.tasks]);

  if (!task) return null;

  return (
    <CardStyled>
      <CardContent>
        <Typography
          variant="subtitle2"
          component="div"
          color="text.secondary"
          data-testid={id}
        >
          Project name #{id}
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={() => handleNavigate(`task/${id}/edit`)}>
          {task.title}
        </Link>

        {task.labels?.length > 0 && (
          <LabelsWrapper>
            {task.labels.map((label) => (
              <LabelStyled key={label.title} background={label.color}>
                {label.title}
              </LabelStyled>
            ))}
          </LabelsWrapper>
        )}
      </CardContent>
    </CardStyled>
  );
}

export default Task;
