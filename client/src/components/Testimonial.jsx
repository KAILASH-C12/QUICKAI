import React from "react";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  return (
    <>
      <style>{`
        .container {
          padding: 6rem 1rem;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }
        .title {
          font-size: 42px;
          font-weight: 600;
          color: #334155; /* slate-700 */
          margin-bottom: 0.5rem;
        }
        .subtitle {
          max-width: 40rem;
          margin: 0 auto 2.5rem auto;
          color: #6b7280; /* gray-500 */
          font-size: 1rem;
        }
        .testimonial-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2.5rem;
        }
        .testimonial-card {
          background: #FDFDFE;
          border: 1px solid #F3F4F6;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 20rem;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: transform 0.3s ease;
          text-align: left;
          margin: 1rem;
        }
        .testimonial-card:hover {
          transform: translateY(-0.25rem);
        }
        .star-container {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        svg {
          width: 16px;
          height: 15px;
          fill: #5044E5;
        }
        .testimonial-content {
          color: #6b7280;
          font-size: 0.875rem;
          font-style: italic;
          margin: 1.25rem 0;
        }
        hr {
          border: none;
          border-bottom: 1px solid #D1D5DB; /* gray-300 */
          margin-bottom: 1.25rem;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #4b5563; /* gray-600 */
          font-size: 0.875rem;
        }
        .user-info img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
        }
        .user-text h3 {
          font-weight: 500;
          margin: 0;
        }
        .user-text p {
          margin: 0;
          color: #6b7280;
          font-size: 0.75rem;
        }
      `}</style>

      <div className="container">
        <h2 className="title">Loved by Creators</h2>
        <p className="subtitle">
          Don't just take our word for it. Here's what our users are saying.
        </p>

        <div className="testimonial-list">
          {dummyTestimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="star-container">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <hr />
              <div className="user-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="user-text">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
