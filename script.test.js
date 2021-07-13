/**
 * @jest-environment jsdom
 */
jest.useFakeTimers();
const updateFontSize = require('./script');

test('font size increase to 100px', () => {
    document.body.innerHTML = `
        <style>
            body {
                margin: 0;
            }
            main {
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            h1 {
                text-align: center;
                text-transform: capitalize;
                font-size: 50px;
                font-weight: 700;
                font-family: 'Raleway', sans-serif;
            }
        </style>
        <main>
            <h1>hello world</h1>        
        </main>
    `;
    updateFontSize();
    jest.runAllTimers();
    expect(document.querySelector('h1').style.fontSize).toBe("100px");
})