import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from './BlogDetails.module.css';
import { FaShare } from "react-icons/fa";

const blogs = [
    {
      id: 1,
      title: "How Nutrition Affects Ayurveda",
      author: "John Doe",
      date: "2024-09-05",
      categories: ["Nutrition", "Wellness"],
      summary: "This blog dives into the relationship between nutrition and Ayurveda...",
      content: "Nutrition is a cornerstone of Ayurveda. Balanced diets tailored to individual doshas can enhance health and well-being. Foods are categorized by their qualities, and understanding these can lead to better health outcomes."
    },
    {
      id: 2,
      title: "The Benefits of Ayurveda for Healing",
      author: "Jane Smith",
      date: "2024-09-04",
      categories: ["Wellness"],
      summary: "Ayurveda offers holistic healing practices...",
      content: "Ayurveda emphasizes prevention and treatment through natural means, focusing on individual constitution and balance. Techniques include dietary changes, herbal remedies, and lifestyle adjustments."
    },
    {
      id: 3,
      title: "Debunking Myths About Ayurveda",
      author: "Ravi Patel",
      date: "2024-08-29",
      categories: ["Myths"],
      summary: "This article debunks common myths surrounding Ayurveda...",
      content: "Many misconceptions exist about Ayurveda, including its effectiveness and safety. This article clarifies these myths and highlights the scientific basis of Ayurvedic practices."
    },
    {
      id: 4,
      title: "Raising Awareness About Ayurvedic Medicine",
      author: "Nisha Kumar",
      date: "2024-08-27",
      categories: ["Treatment", "Wellness"],
      summary: "An informative piece that raises awareness about Ayurvedic medicine...",
      content: "Ayurvedic medicine, with its ancient wisdom and holistic approach, is gaining recognition worldwide. This article discusses its principles and the importance of integrating it into modern healthcare."
    },
    {
      id: 5,
      title: "How to Treat Common Ailments Using Ayurveda",
      author: "Anita Singh",
      date: "2024-08-25",
      categories: ["Awareness", "Diseases"],
      summary: "This blog outlines the Ayurvedic treatments for common ailments...",
      content: "Common ailments like colds and headaches can be treated effectively with Ayurvedic remedies. This includes dietary suggestions, herbal treatments, and lifestyle changes tailored to one's dosha."
    },
    {
      id: 6,
      title: "The Role of Herbs in Ayurvedic Nutrition",
      author: "Rajiv Sharma",
      date: "2024-08-23",
      categories: ["Nutrition", "Myths", "Wellness"],
      summary: "Learn about the various herbs used in Ayurvedic nutrition...",
      content: "Herbs are fundamental in Ayurveda, each serving specific health purposes. Understanding their properties can enhance nutrition and promote healing through traditional recipes and remedies."
    },
    {
      id: 7,
      title: "Understanding Ayurveda and Mental Wellness",
      author: "Maya Gupta",
      date: "2024-08-20",
      categories: ["Nutrition", "Wellness"],
      summary: "This blog explores the connection between Ayurveda and mental wellness...",
      content: "Mental wellness is closely linked to physical health in Ayurveda. Techniques such as meditation, yoga, and dietary adjustments are discussed to promote emotional balance and mental clarity."
    },
    {
      id: 8,
      title: "Ayurvedic Approaches to Chronic Diseases",
      author: "Dr. Arjun Verma",
      date: "2024-08-15",
      categories: ["Diseases", "Nutrition", "Treatment"],
      summary: "A guide on how Ayurvedic principles can be applied to chronic diseases...",
      content: "Chronic diseases require a comprehensive approach. This article explains how Ayurvedic principles can support conventional treatments and promote long-term health through diet and lifestyle."
    },
    {
      id: 9,
      title: "Ayurvedic Tips for Boosting Immunity",
      author: "Sunita Rao",
      date: "2024-08-10",
      categories: ["Awareness", "Wellness"],
      summary: "This article provides Ayurvedic tips for boosting immunity...",
      content: "Boosting immunity through Ayurveda involves adopting a balanced diet, incorporating specific herbs, and following daily routines that align with seasonal changes to enhance overall health."
    },
    {
      id: 10,
      title: "Understanding the Ayurvedic Doshas",
      author: "Manish Kapoor",
      date: "2024-08-05",
      categories: ["Treatment", "Myths"],
      summary: "An overview of the Ayurvedic doshas—Vata, Pitta, and Kapha...",
      content: "The doshas represent different energies in the body. Understanding your dominant dosha can guide dietary choices and lifestyle practices for better health and balance."
    },
  ];

  const BlogDetails = () => {

    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(id));
    const location = useLocation(); // Get the current URL location

    const handleShareClick = () => {
        const currentUrl = window.location.origin + location.pathname; // Full URL of the current page
        navigator.clipboard.writeText(currentUrl) // Copy to clipboard
          .then(() => {
            alert("URL copied to clipboard!"); // Notify the user
          })
          .catch(err => {
            console.error("Failed to copy: ", err);
          });
      };
    
      if (!blog) {
        return <div>Blog not found</div>;
      }
  
    if (!blog) {
      return <div>Blog not found</div>;
    }
  
    return (
      <div className={styles.blogDetailsContainer}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogAuthor}>
            By {blog.author} | <span className={styles.blogDate}>{blog.date}</span>
          </p>
  
          {/* Categories */}
          <div className={styles.blogCategories}>
            {blog.categories.map((category, index) => (
              <span key={index} className={styles.blogCategory}>
                {category}
              </span>
            ))}
          </div>
        </div>
  
        {/* Content Section */}
        <div className={styles.blogContent}>
          <p>{blog.content}</p>
        </div>
  
        {/* Social Sharing Section */}
        <div className={styles.socialSharing}>
          Share this blog: 
          <span onClick={handleShareClick}><FaShare /></span>
        </div>
      </div>
    );
  };
  
  export default BlogDetails;