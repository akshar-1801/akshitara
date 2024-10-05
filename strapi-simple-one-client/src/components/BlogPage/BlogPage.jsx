import React, { useState } from 'react';
import CategoryFilters from './CategoryFilters';
import BlogCard from './BlogCard';
import styles from './BlogPage.module.css';

// Sample data for blogs
const blogs = [
  {
    id: 1,
    title: "How Nutrition Affects Ayurveda",
    author: "John Doe",
    date: "2024-09-05",
    categories: ["Nutrition", "Wellness"],
    summary: "This blog dives into the relationship between nutrition and Ayurveda...",
  },
  {
    id: 2,
    title: "The Benefits of Ayurveda for Healing",
    author: "Jane Smith",
    date: "2024-09-04",
    categories: ["Wellness"],
    summary: "Ayurveda offers holistic healing practices...",
  },
  {
    id: 3,
    title: "Debunking Myths About Ayurveda",
    author: "Ravi Patel",
    date: "2024-08-29",
    categories: ["Myths"],
    summary: "This article debunks common myths surrounding Ayurveda...",
  },
  {
    id: 4,
    title: "Raising Awareness About Ayurvedic Medicine",
    author: "Nisha Kumar",
    date: "2024-08-27",
    categories: ["Treatment", "Wellness"],
    summary: "An informative piece that raises awareness about Ayurvedic medicine...",
  },
  {
    id: 5,
    title: "How to Treat Common Ailments Using Ayurveda",
    author: "Anita Singh",
    date: "2024-08-25",
    categories: ["Awareness", "Diseases"],
    summary: "This blog outlines the Ayurvedic treatments for common ailments...",
  },
  {
    id: 6,
    title: "The Role of Herbs in Ayurvedic Nutrition",
    author: "Rajiv Sharma",
    date: "2024-08-23",
    categories: ["Nutrition", "Myths", "Wellness"],
    summary: "Learn about the various herbs used in Ayurvedic nutrition...",
  },
  {
    id: 7,
    title: "Understanding Ayurveda and Mental Wellness",
    author: "Maya Gupta",
    date: "2024-08-20",
    categories: ["Nutrition", "Wellness"],
    summary: "This blog explores the connection between Ayurveda and mental wellness...",
  },
  {
    id: 8,
    title: "Ayurvedic Approaches to Chronic Diseases",
    author: "Dr. Arjun Verma",
    date: "2024-08-15",
    categories: ["Diseases", "Nutrition", "Treatment"],
    summary: "A guide on how Ayurvedic principles can be applied to chronic diseases...",
  },
  {
    id: 9,
    title: "Ayurvedic Tips for Boosting Immunity",
    author: "Sunita Rao",
    date: "2024-08-10",
    categories: ["Awareness", "Wellness"],
    summary: "This article provides Ayurvedic tips for boosting immunity...",
  },
  {
    id: 10,
    title: "Understanding the Ayurvedic Doshas",
    author: "Manish Kapoor",
    date: "2024-08-05",
    categories: ["Treatment", "Myths"],
    summary: "An overview of the Ayurvedic doshas—Vata, Pitta, and Kapha...",
  },
];

const BlogPage = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    // Handler to toggle category selection
    const toggleCategory = (category) => {
      setSelectedCategories((prevSelected) =>
        prevSelected.includes(category)
          ? prevSelected.filter((c) => c !== category) // Deselect category if already selected
          : [...prevSelected, category] // Select category
      );
    };
  
    // Filter blogs based on selected categories
    const filteredBlogs = selectedCategories.length
      ? blogs.filter((blog) =>
          blog.categories.some((category) => selectedCategories.includes(category))
        )
      : blogs;
  
    return (
      <div className={styles.container}>
        <CategoryFilters selectedCategories={selectedCategories} toggleCategory={toggleCategory} />
        <div className={styles.blogs}>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogPage;
