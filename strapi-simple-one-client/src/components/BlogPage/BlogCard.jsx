import React from 'react';
import styles from './BlogCard.module.css';
import { useNavigate } from 'react-router-dom';
import { FaShare } from "react-icons/fa";


const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
      navigate(`/blogs/${blog.id}`);
    };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{blog.title}</h2>
        <p className={styles.author}>By {blog.author} | {blog.date}</p>
        <div className={styles.categories}>
          {blog.categories.map((category, index) => (
            <span key={index} className={styles.category}>{category}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <p>{blog.summary}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.readMore} onClick={handleReadMore}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
