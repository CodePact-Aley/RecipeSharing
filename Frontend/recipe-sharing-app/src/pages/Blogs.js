import React from "react";
import styles from "./Blogs.module.css";
import headerImg from "../pages/headerImg.jpg";
import shopnowImg from "../pages/shopnowImg.jpg";

const headerImgStyle = {
  backgroundImage: `url(${headerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(5px)",
  width: "1900px",
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

function Blogs() {
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
                  value=""
                />
                <label className={styles.formlabel} htmlFor="form1"></label>
              </div>
              <button
                id={styles.searchbutton}
                type="button"
                className={styles.btnbtnprimary}
              >
                <p>search</p>
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
          <h5> Post Categories</h5>

          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Vegan
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>

          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Breahfast
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Pizza
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Salads
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Drinks
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Bread
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Lunch
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
          <div className={styles.categoriesList}>
            <div
              className={styles.categoriesListButton}
              onMouseEnter={styles.toggleSearchBar}
              onMouseLeave={styles.toggleSearchBar}
            >
              --Dinner
              <i className="fas fa-caret-down"></i>
            </div>
            {styles.showSearchBar && (
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search categories..." />
                <button type="button">Search</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.populartags}>
          <h5>Popular Tags</h5>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Health
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Food
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Ingredients
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Organic
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Farms
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Green
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Fiber
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Supplements
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
        <div className={styles.populartags}>
          <div
            className={styles.popularTagsButton}
            onMouseEnter={styles.stoggleTags}
            onMouseLeave={styles.stoggleTags}
          >
            Gain
            <i className="fas fa-caret-down"></i>
          </div>
          {styles.showTags && <div className={styles.tagsList}></div>}
        </div>
      </div>

      <div className={styles.right}>
        <div className="card-container">
          <div className={styles.gridContainer}>
            {/* First Card */}
            <div className={`${styles.card} ${styles.card1}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/1.jpg"
                className="card-img-top"
                alt="Image 1"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Changing the dynamic for cooking home recipes
                </h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>

            {/* Fourth Card */}
            <div className={`${styles.card} ${styles.card4}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/4.jpg"
                className="card-img-top"
                alt="Image 4"
              />
              <div className="card-body">
                <h5 className="card-title">Exploring New Recipes</h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className={`${styles.card} ${styles.card2}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/2.jpg"
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title">
                  How To Cook The Perfect Recipe Without Extra Help
                </h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>

            {/* Fifth Card */}
            <div className={`${styles.card} ${styles.card5}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/5.jpg"
                className="card-img-top"
                alt="Image 5"
              />
              <div className="card-body">
                <h5 className="card-title">Perfecting Home Cooking</h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>

            {/* Third Card */}
            <div className={`${styles.card} ${styles.card3}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/3.jpg"
                className="card-img-top"
                alt="Image 3"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Changing the dynamic for cooking home recipes
                </h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>

            {/* Sixth Card */}
            <div className={`${styles.card} ${styles.card6}`}>
              <img
                src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/blog/6.jpg"
                className="card-img-top"
                alt="Image 6"
              />
              <div className="card-body">
                <h5 className="card-title">Innovative Recipes</h5>
                <p className="card-text">
                  Cras ultricies ligula sed magna dictum porta. Curabitur non
                  nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <a href="#" className={styles.btnbtnprimary}>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rowphotos}>
        <div className={styles.photo1}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/1.jpg"></img>
        </div>
        <div className={styles.photo2}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/2.jpg"></img>
        </div>
        <div className={styles.photo3}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/3.jpg"></img>
        </div>
        <div className={styles.photo4}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/4.jpg"></img>
        </div>
        <div className={styles.photo5}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/5.jpg"></img>
        </div>
        <div className={styles.photo6}>
          <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/ig/6.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
