// src/components/Greeting.tsx
import React from 'react';

// ✅ Define the prop types using an interface
interface GreetingProps {
  name: string;
}

// ✅ Use GreetingProps to type the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
