import {screen} from '@testing-library/testcafe';
import {constants} from "../utils/constants";
import faker from 'faker';

fixture`DevExpess home page`
    .meta("testID", "JIRA-100")
    .meta({author: "Raj Beemi", creationDate: "25/12/2020"})
    .meta({severity: "critical"})
    .meta({smokeTest: true})
    .page`https://devexpress.github.io/testcafe/example/`;

test("Enter developer name and validate thank you", async t => {

    const developerName = faker.name.firstName({gender: "male"});
    // Name
    await t
        .setNativeDialogHandler(() => true)
        .typeText(screen.getByTestId("name-input"), developerName)
        .click(screen.getByTestId("populate-button"));
    console.log("Enter developer name as: " + developerName);

    // Feature checkbox
    await t
        .click(screen.getByTestId("remote-testing-checkbox"))

    // Submit
    await t
        .click(screen.getByTestId("submit-button"))

    // Header
    await t
        .expect(screen.getByTestId("thank-you-header").innerText).contains(constants.THANK_YOU)
})
