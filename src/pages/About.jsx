import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const handleBlog = () => {
        navigate('/blog');
    }
  return (
    <div>

        {/* About Page Header */}
        <div className="about-header">
            <div className="left-side">
                <h1><span>Who</span> Are We?</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.</p>
                <button onClick={handleBlog}>Read Our Blog!</button>
            </div>

            <div className="right-side">
                <img src="/about-header-img1.jpg" alt="" />
                <img src="/about-header-img2.jpg" alt="" />
            </div>
        </div>

        {/* Gallery Section */}
        <div className='gallery-section'>
            <h2>Check Our Our Gallery</h2>
            {/* Gallery Container */}
           <div className="container">
                <div className="tile">
                    <a href="/burger-post.jpg" target='_blank'>
                        <img src="/burger-post.jpg" alt="" />
                    </a>
                </div>

                <div className="tile">
                    <a href="/cooking-bg.jpg" target='_blank'>
                        <img src="/cooking-bg.jpg" alt="" />
                    </a>
                </div>


                <div className="tile">
                    <a href="/danny-restaurant.jpg" target='_blank'>
                        <img src="/danny-restaurant.jpg" alt="" />
                    </a>
                </div>


                <div className="tile">
                    <a href="/dish-img.jpg" target='_blank'>
                        <img src="/dish-img.jpg" alt="" />
                    </a>
                </div>


            <div className="tile">
                <a href="/recipe-post.jpg" target='_blank'>
                    <img src="/recipe-post.jpg" alt="" />
                </a>
            </div>

            <div className="tile">
                <a href="/about-header-img1.jpg" target='_blank'>
                    <img src="/about-header-img1.jpg" alt="" />
                </a>
            </div>


           </div>
        </div>

    </div>
  )
}

export default About
