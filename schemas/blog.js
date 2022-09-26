/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'string',
      title: 'content',
    },
    {
      name: 'timestamp',
      type: 'datetime',
      title: 'Time',
    },
  ],
};
  