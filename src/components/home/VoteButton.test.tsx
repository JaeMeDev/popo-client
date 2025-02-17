import { screen } from '@testing-library/react';

import RabbitState from '@/types/RabbitState';
import { renderWithThemeProviders } from '@/utils/testHelper';

import VoteButton from './VoteButton';

describe('VoteButton', () => {
  const renderVoteButton = (rabbitState: RabbitState) => renderWithThemeProviders(
    <VoteButton openPollPopup={jest.fn()} rabbitState={rabbitState} />,
  );

  context('when rabbitState is sleep', () => {
    it('render PoPo 자는 중 text', () => {
      renderVoteButton('sleep');

      expect(screen.getByRole('button', { name: 'PoPo 자는 중' })).toBeInTheDocument();
    });
  });
  context('when rabbitState is done', () => {
    it('render PoPo 쉬는 중 text', () => {
      renderVoteButton('done');

      expect(screen.getByRole('button', { name: 'PoPo 쉬는 중' })).toBeInTheDocument();
    });
  });
  context('when rabbitState is start', () => {
    it('render 시작하기 text', () => {
      renderVoteButton('start');

      expect(screen.getByRole('button', { name: '시작하기' })).toBeInTheDocument();
    });
  });
});
