import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('Search', () => {
    test('fetch and display', async() => {
    const stories = [
        {objectID: '1', title: "hello"},
        {objectID: '2', title: "React"}
    ]

    axios.get.mockImplementationOnce(() =>
        Promise.resolve({data: {hits: stories}})
        );

        render(<Search/>)

        await act(async () => {
            await userEvent.click(screen.getByRole('button'))
        })
       
        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2)
    })

    test('fetch and fails', async() => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error())
            );
    
            render(<Search/>)
    
            await act(async () => {
                await userEvent.click(screen.getByRole('button'))
            })
           
            const items = await screen.findByText("Ada yang error ...")
    
            expect(items).toBeInTheDocument()
        })
})