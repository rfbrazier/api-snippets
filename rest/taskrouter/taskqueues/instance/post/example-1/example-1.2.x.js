// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var twilio = require('twilio');

var accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var authToken = "your_auth_token";
var workspaceSid = "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var taskQueueSid = "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

var client = new twilio.TaskRouterClient(accountSid, authToken, workspaceSid);

client.workspace.taskQueues(taskQueueSid).update({
    target_workers: 'languages HAS "english"'
}, function(err, taskQueue) {
    console.log(taskQueue.targetWorkers);
});