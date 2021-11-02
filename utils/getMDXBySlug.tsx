import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXVIEWS_PATH } from './getMDXViewPaths';

export const getMDXBySlug = async (slug) => {
  const fs = require('fs');
  const postFilePath = path.join(MDXVIEWS_PATH, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(postFilePath);

  const { content, data: frontMatter } = matter(mdxSource);

  const componentNames = [/<Editable/.test(content) ? 'Editable' : null].filter(Boolean);

  const viewSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });

  return {
    content,
    viewSource,
    frontMatter,
    componentNames,
  };
};
