
var keystone = require('keystone');
 Types = keystone.Field.Types;
var story = new keystone.List('story');
 
story.add({
  category: {
    type: String
  },
  tags: {
    manyStrings: { type: Types.TextArray }
  },
  title: {
    type: String
  },
   body: {
    
    type:Types.Textarea
  },
   author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
   verified: {
    type: Boolean
  },
   likes: {
    type: Number
  }

});
 
story.register();