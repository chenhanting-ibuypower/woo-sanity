// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import post from './post'
import author from './author'
import english from './english'
import configuration from "./configuration";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    category, // add the document type to this array
    post,
    author,
    english,
    configuration
  ]),
})
