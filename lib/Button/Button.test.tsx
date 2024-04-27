import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(
      <Button
        onClick={() => null}
        text="test"
        type="button"
      />
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    const mockClick = jest.fn();
    const { getByRole } = render(
      <Button
        onClick={mockClick}
        text="test"
        type="button"
      />
    );
    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
