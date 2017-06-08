var keystone = require('keystone');
Types = keystone.Field.Types;
var story = new keystone.List('story');

story.add({
    category: {
        type: String
    },
    tags: {
        type: Types.TextArray
    },
    title: {
        type: String,
        index: true
    },
    body: {
        type: Types.Html,
        wysiwyg: true,
        height: 400
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
