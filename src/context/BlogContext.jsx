import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "CRM System: Solving Customer Issues Efficiently", content: "CRM systems are essential tools for managing customer relationships. They allow businesses to track issues, raise support tickets, and resolve problems quickly, improving customer satisfaction and retention.", date: "2024-01-01" },
    { id: 2, title: "How CRM Systems Handle Problem Resolution", content: "CRM platforms have built-in features to track customer issues, log complaints, and assign tasks to teams. This helps businesses stay organized and ensures customers receive timely solutions.", date: "2024-02-15" },
    { id: 3, title: "The Role of Ticketing in CRM Systems", content: "Issue tracking is a core feature of modern CRM solutions. A structured ticketing system ensures that every customer concern is addressed, prioritized, and resolved in an efficient manner.", date: "2024-03-10" },
    { id: 4, title: "Automating CRM for Faster Problem Resolution", content: "Automation in CRM systems helps streamline the problem-solving process by automatically assigning tickets, sending updates, and triggering alerts for unresolved issues.", date: "2024-04-01" },
    { id: 5, title: "Best Practices for Using CRM to Track Customer Problems", content: "To effectively manage customer issues, businesses must adopt best practices such as categorizing problems, prioritizing urgent issues, and continuously monitoring resolution progress.", date: "2024-05-18" },
  ]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
