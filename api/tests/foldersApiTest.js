const { url } = require('../../data/apiUrlData');

Feature('Itegration Folders API');

Scenario('Authorized GET request - validate response body', async ({ I }) => {
  const res = await I.sendGetRequest(url.backOffice + 'api/folders');
  console.log(res.data);

  // I.seeResponseValidByCallback(({ data, status, expect }) => {
  //   expect(status).to.eql(200);
  //   expect(data.ip).to.be.a('string');
  //   expect(data.token).to.be.a('string');
  // });
}).tag('@api').tag('@bonus').tag('@folders');
