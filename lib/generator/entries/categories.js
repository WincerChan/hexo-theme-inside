const { flattenDeep } = require('lodash');
const { pick } = require('../../utils');
const { categoryPosts: categoryPostsProps } = require('./properties');

module.exports = function ({ theme, locals, helpers }) {
  const categories = locals.categories.sort('name');
  const config = theme.category;

  if (!categories.length) return [];

  return flattenDeep([
    helpers.generateJson({
      path: 'categories',
      data: categories.map(i => ({ name: i.name, count: i.posts.filter(p => !p.hide).length })),
    }),
    helpers.generateHtml({
      path: 'categories',
      data: { type: 'categories' }
    }),
    categories.map(category =>
      helpers.pagination.apply(
        category.posts.sort('-date').filter(post => !post.hide).map(pick(categoryPostsProps)),
        { perPage: config.per_page, id: `categories/${category.name}`, extend: { name: category.name } },
        [
          { type: 'json' },
          { type: 'html', extend: { type: 'categories' } },
        ]
      )
    )
  ]);
};
