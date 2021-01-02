import {screen} from '@testing-library/testcafe'

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example/`;

test("Simple test", async t => {

    // Name
    await t
        .setNativeDialogHandler(() => true)
        .typeText(screen.getByTestId("name-input"), "RAJ BEEMI")
        .click(screen.getByTestId("populate-button"));

    // Feature checkbox
    await t
        .click(screen.getByTestId("remote-testing-checkbox"))

    // Submit
    await t
        .click(screen.getByTestId("submit-button"))

    // Header
    await t
        .expect(screen.getByTestId("thank-you-header").innerText).contains('Thank you')
})
