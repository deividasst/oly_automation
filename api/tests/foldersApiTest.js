const { url } = require('../../data/apiUrlData');

Feature('Itegration Folders API');

Scenario('it should get 200 status and valid response body', async ({ I }) => {
  await I.sendGetRequest(url.backOffice + 'api/folders');
  I.seeResponseValidByCallback(({ data, status, expect }) => {
    expect(status).to.eql(200);
  });
}).tag('@api').tag('@bonus').tag('@folders');
