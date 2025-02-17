import { useCallback, useEffect } from 'react';

import { useAnimate } from 'framer-motion';
import styled from 'styled-components';

import Candidate from '@/types/Candidate';
import { getRatioSizePX } from '@/utils/sizeHelper';

import CandidateItem from './CandidateItem';

type CandidateListProps = {
  isChanged: boolean;
  candidates: Candidate[];
  goNextStep: () => void;
};

const getCandidateData = (candidates: Candidate[], isChanged:boolean) => {
  const candidatesMaxCount = candidates.length > 4 ? 8 : 4;

  const emptyCandidates = Array(candidatesMaxCount - candidates.length)
    .fill({ userId: 0, name: '' });

  if (isChanged) {
    return [...candidates, ...emptyCandidates].slice(4, 8);
  }

  return [...candidates, ...emptyCandidates].slice(0, 4);
};

export default function CandidateList({
  isChanged, candidates, goNextStep,
}:CandidateListProps) {
  const candidateData = getCandidateData(candidates, isChanged);
  const [divRef, animate] = useAnimate();

  const candidateOnClick = () => {
    goNextStep();
  };

  const onChangeAnimation = useCallback(async () => {
    await animate(divRef.current, { opacity: 0, x: -20 }, { duration: 0.3 });

    animate(divRef.current, { opacity: 1, x: 0 }, { duration: 0 });
  }, [animate, divRef]);

  useEffect(() => {
    if (isChanged) {
      onChangeAnimation();
    }
  }, [isChanged, onChangeAnimation]);

  return (
    <Container ref={divRef}>
      {candidateData.map((candidate, i) => (
        <CandidateItem
          key={`${candidate.userId}-${i}`}
          candidate={candidate}
          onClick={() => candidateOnClick()}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${getRatioSizePX(196)};
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
