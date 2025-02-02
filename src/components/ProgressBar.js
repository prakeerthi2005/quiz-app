import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 10px;
`;

const Progress = styled.div`
  width: ${({ progress }) => progress}%;
  height: 20px;
  background-color: #76c7c0;
  border-radius: 10px;
`;

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
