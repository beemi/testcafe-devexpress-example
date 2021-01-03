import {screen} from '@testing-library/testcafe';
import {ClientFunction} from 'testcafe'
import {constants} from "../utils/constants";
import faker from 'faker';

require('dotenv').config();

fixture("DevExpess home page")
    .meta("testID", "JIRA-100")
    .meta({author: "Raj Beemi", creationDate: "25/12/2020"})
    .meta({severity: "critical"})
    .meta({smokeTest: true})
    .page(process.env.BASE_URL)

test("Enter developer name and validate thank you", async t => {

    const developerName = faker.name.firstName({gender: "male"});
    // Get the Page URL
    const getPageURL = ClientFunction(() => window.location.href);
    // Name
    await t
        .setNativeDialogHandler(() => true)
        .typeText(screen.getByTestId("name-input"), developerName)
        .click(screen.getByTestId("populate-button"));
    console.log("Enter developer name as: " + developerName);
    console.log("Page URL: " + await getPageURL());

    await t
        .expect(getPageURL()).contains("/testcafe/example/")

    // Feature checkbox
    await t
        .click(screen.getByTestId("remote-testing-checkbox"))

    // Submit
    await t
        .click(screen.getByTestId("submit-button"))

    // Header
    await t
        .expect(screen.getByTestId("thank-you-header").innerText).contains(constants.THANK_YOU)
        .expect(getPageURL()).contains("/testcafe/example/thank-you.html")
    console.log("Page URL after Thank you: " + await getPageURL());
})
