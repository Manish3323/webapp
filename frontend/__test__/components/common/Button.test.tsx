import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Root from "../../../src/components/Root";
import {Button} from "../../../src/components/common/Button";

test('loads and displays greeting', async () => {

    let getMock = jest.fn(() => Promise.resolve("Message from akka"));

    render(<Button value={"Click me!"} style={{color:"red"}} onClick={getMock}/>)

    fireEvent.click(screen.getByText('Click me!'))

    expect(getMock).toHaveBeenCalledTimes(1)

})