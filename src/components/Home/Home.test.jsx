import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home';

describe("Home page", () => {
    it("renders title text", () => {
        render (<Home />);
        expect(screen.getByText("CTRL+FIT"))
    })
})