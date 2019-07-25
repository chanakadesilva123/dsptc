// sms-receive-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const smsReceive = new Schema(
    {
      id: { type: String },
      originator: { type: String },
      recipient: { type: String },
      body: { type: String },
      createdDatetime: { type: Object }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('smsReceive', smsReceive);
};
