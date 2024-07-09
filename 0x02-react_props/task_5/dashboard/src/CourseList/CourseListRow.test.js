import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';
import '@testing-library/jest-dom/extend-expect';

describe('CourseListRow Component', () => {
  test('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const { getByText } = render(
      <CourseListRow isHeader={true} textFirstCell="Header 1" />
    );
    const thElement = getByText('Header 1');
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute('colSpan', '2');
  });

  test('renders two cells when isHeader is true and textSecondCell is present', () => {
    const { getByText } = render(
      <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    const thElement1 = getByText('Header 1');
    const thElement2 = getByText('Header 2');
    expect(thElement1).toBeInTheDocument();
    expect(thElement2).toBeInTheDocument();
  });

  test('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { getByText } = render(
      <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
    );
    const tdElement1 = getByText('Cell 1');
    const tdElement2 = getByText('Cell 2');
    expect(tdElement1).toBeInTheDocument();
    expect(tdElement2).toBeInTheDocument();
  });
});


/*

Test that when isHeader is true and textSecondCell is null, the component renders a th element with colSpan of 2.
Test that when isHeader is true and textSecondCell is present, the component renders two th elements.
Test that when isHeader is false, the component renders two td elements within a tr element.
*/