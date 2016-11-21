/**
* (C) Copyright IBM Corp. 2016. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/


var axios = require('axios');
var pageUrl = 'http://localhost:3300/';
var baseUrl = 'http://localhost:3201/';
var instance = axios.create({
  baseURL: baseUrl
});

function createChat(client) {
  client.execute(function(){
    window.IBMChat.destroy();
    setTimeout(function(){
      window.IBMChat.init({
        el: 'ibm_el',
        baseURL: 'http://localhost:3201/',
        botID: 77
      });
    }, 0);
  });
  return client;
}

function setMessage(message) {
  return instance.post('/setmessage', message);
}

module.exports = {
  setMessage: setMessage,
  createChat: createChat,
  pageUrl: pageUrl,
  baseUrl: baseUrl
};
