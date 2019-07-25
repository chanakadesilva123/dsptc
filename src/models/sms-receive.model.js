// sms-receive-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const smsReceive = new Schema(
    {
      text: { type: String, required: true },
      sender: { type: String },
      recipient: { type: String, required: true }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('smsReceive', smsReceive);
};
