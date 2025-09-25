export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React components, props, and state management in this comprehensive beginner's guide.",
    date: "2024-03-15",
    content: `
      <h2>Welcome to React!</h2>
      <p>React is a powerful JavaScript library for building user interfaces. In this post, we'll cover the fundamental concepts that every React developer should know.</p>

      <h3>What is React?</h3>
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p>

      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Components:</strong> Reusable pieces of UI</li>
        <li><strong>Props:</strong> Data passed to components</li>
        <li><strong>State:</strong> Component's internal data</li>
        <li><strong>JSX:</strong> JavaScript extension for writing HTML-like syntax</li>
      </ul>

      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
    `
  },
  {
    id: 2,
    title: "Understanding JavaScript ES6+ Features",
    excerpt: "Explore modern JavaScript features like arrow functions, destructuring, and async/await that make React development easier.",
    date: "2024-03-10",
    content: `
      <h2>Modern JavaScript for React</h2>
      <p>Before diving deep into React, it's essential to understand modern JavaScript features that make React development more enjoyable and efficient.</p>

      <h3>Arrow Functions</h3>
      <p>Arrow functions provide a shorter syntax for writing functions and have different behavior with the 'this' keyword:</p>
      <pre><code>const greet = (name) => {
  return \`Hello, \${name}!\`;
};</code></pre>

      <h3>Destructuring</h3>
      <p>Destructuring allows you to extract values from arrays or properties from objects:</p>
      <pre><code>const { name, age } = person;
const [first, second] = array;</code></pre>

      <h3>Template Literals</h3>
      <p>Template literals make string interpolation much cleaner:</p>
      <pre><code>const message = \`Welcome, \${user.name}!\`;</code></pre>

      <p>These features are heavily used in React development and will make your code more readable and maintainable.</p>
    `
  },
  {
    id: 3,
    title: "Building Your First React Component",
    excerpt: "Step-by-step tutorial on creating functional components, using props, and handling events in React.",
    date: "2024-03-05",
    content: `
      <h2>Creating React Components</h2>
      <p>Components are the building blocks of React applications. Let's learn how to create and use them effectively.</p>

      <h3>Functional Components</h3>
      <p>Modern React development primarily uses functional components with hooks:</p>
      <pre><code>function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}</code></pre>

      <h3>Using Props</h3>
      <p>Props are how you pass data from parent to child components:</p>
      <pre><code>function App() {
  return <Welcome name="React Developer" />;
}</code></pre>

      <h3>Event Handling</h3>
      <p>React handles events through synthetic events:</p>
      <pre><code>function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}</code></pre>

      <p>Remember to always use camelCase for event handlers and pass functions, not function calls!</p>
    `
  },
  {
    id: 4,
    title: "CSS Styling in React Applications",
    excerpt: "Learn different approaches to styling React components, from CSS modules to styled-components.",
    date: "2024-02-28",
    content: `
      <h2>Styling React Components</h2>
      <p>There are several ways to style React components. Let's explore the most popular approaches.</p>

      <h3>CSS Modules</h3>
      <p>CSS Modules provide scoped CSS to prevent style conflicts:</p>
      <pre><code>import styles from './Button.module.css';

function Button() {
  return <button className={styles.primary}>Click me</button>;
}</code></pre>

      <h3>Inline Styles</h3>
      <p>React allows you to use JavaScript objects for styling:</p>
      <pre><code>const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px'
};</code></pre>

      <h3>CSS-in-JS Libraries</h3>
      <p>Libraries like styled-components let you write CSS directly in your JavaScript:</p>
      <pre><code>const StyledButton = styled.button\`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
\`;</code></pre>

      <p>Choose the approach that best fits your project's needs and team preferences.</p>
    `
  },
  {
    id: 5,
    title: "React Hooks: useState and useEffect",
    excerpt: "Master the two most important React hooks for managing state and side effects in functional components.",
    date: "2024-02-20",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>Hooks let you use state and other React features without writing a class component. Let's explore the most commonly used hooks.</p>

      <h3>useState Hook</h3>
      <p>useState lets you add state to functional components:</p>
      <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}</code></pre>

      <h3>useEffect Hook</h3>
      <p>useEffect lets you perform side effects in functional components:</p>
      <pre><code>import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []); // Empty dependency array means run once

  return <div>{data ? data : 'Loading...'}</div>;
}</code></pre>

      <p>Hooks must always be called at the top level of your function components, never inside loops or conditions!</p>
    `
  }
];