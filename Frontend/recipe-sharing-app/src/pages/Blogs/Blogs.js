import React from "react";
import styles from "./Blogs.module.css";
import headerImg from "../../assets/headerImg.jpg";
import shopnowImg from "../../assets/shopnowImg.jpg";

const headerImgStyle = {
  backgroundImage: `url(${headerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(5px)",
  width: "100%",
  height: "300px",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

const shopnowStyle = {
  backgroundImage: `url(${shopnowImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Blogs = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.header} style={headerImgStyle}></div>
        <div className={styles.title}>Latest News</div>
      </div>

      <div className={styles.right}>
        <div className={styles.sidebar}>
          <div className={styles.searchbar}>
            <div className={styles.inputgroup}>
              <div className={styles.formoutline} data-mdb-input-init>
                <input
                  id="search-input"
                  type="search"
                  className={`form-control rounded ${styles.formcontrol}`}
                  placeholder="Look for Fruits, Vegetables"
                  name="search"
                />
                <label className={styles.formlabel} htmlFor="form1"></label>
              </div>
              <button
                id={styles.searchbutton}
                type="button"
                className={styles.btnbtnprimary}
              >
                <p>Search</p>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className={styles.sidebarshopnow} style={shopnowStyle}>
            <div className={styles.sidebarcontent}>
              <span className={styles.text1}>Good Food</span>
              <h6>Best Quality Food</h6>
            </div>
          </div>
        </div>

        <div className={styles.postcategories}>
          <h5>Post Categories</h5>
          {["Vegan", "Breakfast", "Pizza", "Salads", "Drinks", "Bread", "Lunch", "Dinner"].map((category, index) => (
            <div key={index} className={styles.categoriesList}>
              <div
                className={styles.categoriesListButton}
                onMouseEnter={styles.toggleSearchBar}
                onMouseLeave={styles.toggleSearchBar}
              >
                --{category}
                <i className="fas fa-caret-down"></i>
              </div>
              {styles.showSearchBar && (
                <div className={styles.searchBar}>
                  <input type="text" placeholder={`Search ${category.toLowerCase()}...`} />
                  <button type="button">Search</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.populartags}>
          <h5>Popular Tags</h5>
          {["Health", "Food", "Ingredients", "Organic", "Farms", "Green", "Fiber", "Supplements", "Gain"].map((tag, index) => (
            <div key={index} className={styles.popularTagsButton} onMouseEnter={styles.stoggleTags} onMouseLeave={styles.stoggleTags}>
              {tag}
              <i className="fas fa-caret-down"></i>
              {styles.showTags && <div className={styles.tagsList}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className="card-container">
          <div className={styles.gridContainer}>
            {[
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/1.jpg",
                title: "Changing the dynamic for cooking home recipes",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/4.jpg",
                title: "Exploring New Recipes",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/2.jpg",
                title: "How To Cook The Perfect Recipe Without Extra Help",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/5.jpg",
                title: "Perfecting Home Cooking",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/3.jpg",
                title: "Changing the dynamic for cooking home recipes",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
              {
                imgSrc: "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/6.jpg",
                title: "Innovative Recipes",
                text: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
              },
            ].map((card, index) => (
              <div key={index} className={`${styles.card} ${styles[`card${index + 1}`]}`}>
                <img src={card.imgSrc} className="card-img-top" alt={`Image ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className={styles.btnbtnprimary}>
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rowphotos}>
        {[
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/1.jpg",
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/2.jpg",
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/3.jpg",
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/4.jpg",
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/5.jpg",
          "https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/6.jpg",
        ].map((src, index) => (
          <div key={index} className={styles[`photo${index + 1}`]}>
            <img src={src} alt={`Instagram ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
