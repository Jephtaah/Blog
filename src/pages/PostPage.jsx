import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

function PostPage() {
  return <BlogPost posts={blogPosts} />;
}

export default PostPage;