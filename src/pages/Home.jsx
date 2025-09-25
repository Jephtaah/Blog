import BlogList from '../components/BlogList';
import { blogPosts } from '../data/blogPosts';

function Home() {
  return <BlogList posts={blogPosts} />;
}

export default Home;