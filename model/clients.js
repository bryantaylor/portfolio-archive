var mongoose = require('mongoose');  
var clientSchema = new mongoose.Schema({  
  name: String,
  background: String,
  // These need to be removed throughout
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Client', clientSchema);