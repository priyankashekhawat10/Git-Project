import React from 'react'
import './Home.css'

function Home() {

  const categories = [
    {
      title: 'Makeup',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Skin Care',
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Hair Care',
      img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Fragrance',
      img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop'
    }
  ]

  const products = [
    {
      name: 'Matte Lipstick',
      price: '₹799',
      img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Glow Serum',
      price: '₹1299',
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Face Palette',
      price: '₹1599',
      img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Perfume',
      price: '₹1999',
      img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop'
    }
  ]

  return (
    <div className="home">

      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-text">
            <h1>
              Beauty That <span>Inspires</span>
            </h1>

            <p>
              Discover premium beauty products, skincare essentials,
              makeup collections and amazing updatedgit checkout homepage-pr.
            </p>

            <button>Shop Now</button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
          </div>

        </div>
      </section>

      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-container">

          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          ))}

        </div>

      </section>

      <section className="products">

        <h2>Trending Products</h2>

        <div className="product-container">

          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <img src={product.img} alt="" />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add To Cart</button>
              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="offer-banner">

        <div>
          <h2>Flat 50% OFF</h2>
          <p>On your first beauty order.</p>
        </div>

        <button>Grab Offer</button>

      </section>

    </div>
  )
}

export default Home