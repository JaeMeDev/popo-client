import { render, screen } from '@testing-library/react';

import BottomNavigation from '@/components/common/BottomNavigation';

describe('BottomNavigation', () => {
  it('navigation items render', () => {
    render(<BottomNavigation />);

    expect(screen.getAllByRole('link')).toHaveLength(4);

    expect(screen.getByText('PoPo')).toBeInTheDocument();
    expect(screen.getByText('알림')).toBeInTheDocument();
    expect(screen.getByText('친구추가')).toBeInTheDocument();
    expect(screen.getByText('프로필')).toBeInTheDocument();
  });
});
