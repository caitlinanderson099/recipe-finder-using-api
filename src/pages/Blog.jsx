import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Blog = () => {
  return (
    <div className="blog-page">

    {/* Blog Header */}
    <div className="blog-header">
        <h1>Welcome to Danny's Blog</h1>
        <p>Here you can read about recipes, cooking tips, and more from Danny!</p>
      </div>

      {/* Danny's Introduction Section */}
      <div className="author-section">
        <div className="left-side">
          <img src="/owner-img.jpg" alt="Danny" className="author-photo" />
          <img src="/danny-restaurant.jpg" alt="Danny" className="author-photo" />
        </div>

        <div className="right-side">
          <h2>Meet Danny!</h2>
          <p> Hi, I'm Danny! With years of experience honing my craft in some of the finest restaurants around the world, I bring a deep passion and expertise to every dish I create. In this blog, I share my culinary journey—whether it's experimenting with innovative recipes or perfecting classic flavors. Join me as I explore the art of cooking, discover new ingredients, and share the stories behind the dishes that inspire me.</p>
          <div className='socials'>
            <h3>Follow my journey through my social medias</h3>
            <div className="social-icons">
              <FaInstagram/>
              <FaFacebook/>
              <FaTwitter/>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="blog-posts">

        {/* #1 */}
        <div className="blog-post">
        <h2>Latest Recipe Adventures</h2>
        <p className="author">By Danny | April 2025</p>
        <img src="/recipe-post.jpg" alt="Blog Post" className="blog-image" />
        <p className="post-content">
          Join me as I explore some of the most delicious recipes that I have created this month. From comfort foods to exotic dishes, I'll share my cooking journey with you. Stay tuned for more updates as I discover new flavors and ingredients to try!
        </p>
        <a href="#" className="read-more">Read more</a>
        </div>

        {/* #2 */}
        <div className="blog-post">
          <h2>What Makes A Good Burger?</h2>
          <p className="author">By Danny | January 2025</p>
          <img src="/burger-post.jpg" alt="Blog Post" className="blog-image" />
          <p className="post-content">
            Join me as I explore some of the most delicious recipes that I have created this month. From comfort foods to exotic dishes, I'll share my cooking journey with you. Stay tuned for more updates as I discover new flavors and ingredients to try!
          </p>
          <a href="#" className="read-more">Read more</a>
        </div>

        {/* #3 */}
        <div className="blog-post">
          <h2>Krusty Krab Who!</h2>
          <p className="author">By Danny | January 2025</p>
          <img src="/burger-post.jpg" alt="Blog Post" className="blog-image" />
          <p className="post-content">
            Join me as I explore some of the most delicious recipes that I have created this month. From comfort foods to exotic dishes, I'll share my cooking journey with you. Stay tuned for more updates as I discover new flavors and ingredients to try!
          </p>
          <a href="#" className="read-more">Read more</a>
        </div>


      </div>


    </div>
  );
};

export default Blog;
