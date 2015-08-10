var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');

var clientSchema = new mongoose.Schema({
  name: {type: String, default: '', trim: true},
  background: String,
  slug: String,
  // These need to be removed throughout
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
clientSchema.plugin(URLSlugs('name'));

mongoose.model('Client', clientSchema);

