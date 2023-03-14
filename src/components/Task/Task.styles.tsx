import styled from 'styled-components';
import { Card } from '@mui/material';

export const CardStyled = styled(Card)({
  '&.MuiPaper-root': {
    margin: '0 15px 15px',
    overflow: 'initial',
    '&:hover': {
      cursor: 'grab',
    },
    '&:active': {
      cursor: 'grabbing',
    },
  },
});

export const LabelsWrapper = styled.div`
  width: 100%;
  margin-top: 12px;

  display: flex;
  flex-flow: wrap;
  gap: 4px;
`;

export const LabelStyled = styled.span<{ background?: string }>`
  border-radius: 12px;
  background: ${(props) => props.background || 'gray'};
  color: white;

  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
`;
