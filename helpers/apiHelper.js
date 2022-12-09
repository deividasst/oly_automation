const Helper = require('@codeceptjs/helper');

class apiHelper extends Helper {

  async sendRequestWithBasicAuth(method, username, password, url, data, headers) {
    return this.helpers['REST']._executeRequest({
      method,
      auth: { username, password},
      url,
      headers,
      data,
    });
  }
}

module.exports = apiHelper;
