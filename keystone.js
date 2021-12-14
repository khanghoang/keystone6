import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

const Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
  },
});

export default config({
  db: { provider: 'postgresql', url: process.env.DATABASE_URL },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
});
