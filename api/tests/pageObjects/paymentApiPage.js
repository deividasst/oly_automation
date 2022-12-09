const { I } = inject();
const { url } = require('../../../data/apiUrlData');
const { requestBody } = require('../../../data/productPricingData');


module.exports = {
  async getPricingRequest() {
    const productObject = (await I.sendPostRequest(url.productPricing, requestBody, { "content-type": "application/json" })).data.data.node;
    I.seeResponseCodeIs(200);
    const monthlyPrice = productObject.atomic;
    const totalPrice = productObject.total;
    return { monthlyPrice, totalPrice};
  },
}