import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Page from '../app/FAQ/page';



describe("FAQ Page", () => {
    test('renders FAQ page', () => {
        render(<Page />);
        // Use getByText or getByRole for heading
        const heading = screen.getByText("Frequently Asked Questions");
        expect(heading).toBeInTheDocument();
    });
});


