import styled from 'styled-components';

export const ColumnFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 24px;

  padding: 16px 8px;

  font-size: 12px;
  font-weight: 500;
  color: #414040;

  :hover {
    cursor: pointer;
    background-color: #f1efef;
    border-radius: 0 0 6px 6px;
  }
`;
