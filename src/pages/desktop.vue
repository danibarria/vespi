<template>
<div class="wrapper">
  <header>
    <div class="brand">
      <img src="~assets/header/brand.svg" alt="brand">
    </div>
    <div class="notifications">
      <img src="~assets/header/notifications.svg" alt="notifications">
    </div>
  </header>
  <main>
    <h3 class="title ds-mobile-latest-happenings text-center">Latest happenings</h3>
    <div class="latest">
      <post-preview
        v-for="(post, index) in lastsPosts"
        :key="index"
        :imageSrc=" post.imageSrc "
        :imageAlt=" post.imageAlt "
        :title=" post.title "
        :description=" post.description "
        :tagName=" post.tagName "
      />
      <div class="feature">
        <img src="~assets/main/misionimg.svg" alt="Clothes">
        <h4 class="ds-mobile-h4">“Our mission is to bring the best of New Yorks local designers to the rest of the world.</h4>
        <div class="button-wrapper">
          <button class="ds-h6">LEARN MORE ABOUT US</button>
        </div>
      </div>
      <post-preview
        class="alone-post"
        imageSrc="classinsimplicity.png"
        imageAlt="Class in simplicity"
        title="Class in simplicity"
        description="Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
        tagName="TRENDS"
      ></post-preview>
    </div>
    <div class="lasts-two">
    </div>
    <div class="press-quotes">
      <h3 class="quote ds-h3">“Beautiful collection of indie American brands <br> at a fair price”</h3>
      <div class="brands">
        <img src="~assets/images/quoters.png" alt="brands" class="logos">
      </div>
    </div>
    <hr>
    <div class="instagram-block">
      <div class="title">
        <h4 class="ds-mobile-h4">On the gram</h4>
        <div class="button">
          <button class="ds-h6">
            FOLLOW US ON THE GRAM
            <img src="~assets/main/instagramicon.svg" alt="Instragram icon">
          </button>
        </div>
      </div>
      <div class="carrousel">
        <img src="~assets/images/instagram1.png" />
        <img src="~assets/images/instagram2.png" />
        <img src="~assets/images/instagram1.png" />
        <img src="~assets/images/instagram2.png" />
        <img src="~assets/images/instagram1.png" />
      </div>
    </div>
    <hr>
  </main>
  <div class="email">
    <div class="info-wrapper">
      <h6 class="ds-h6-alternate"><img src="~assets/header/smile.svg" alt="smile" /> WE ALSO MAKE EMAILS</h6>
      <p class="micro-caption-text">Recieve updates and offers you’ll actually be interested in.<br>Unsubscriber any time.</p>
    </div>
    <input type="email" name="email" id="" placeholder="Your email">
  </div>
  <footer>
    <div class="imageandlogo">
      <div class="girl">
          <img src="~assets/images/girlcircle.png" loading="lazy" alt="Girl">
      </div>
      <div class="logo">
        <img src="~assets/vespilogo.svg" loading="lazy" alt="Vespi Logo">
      </div>
    </div>
    <div class="links-wrap">
      <div class="list mens">
        <div class="main ds-h6">MENS</div>
        <div class="link">Tshirts</div>
        <div class="link">Shirts</div>
        <div class="link">Sweaters</div>
        <div class="link">Jeans</div>
        <div class="link">Jackets</div>
        <div class="link">Accessories</div>
        <div class="link">Lookbook</div>
      </div>
      <div class="list womens">
        <div class="main ds-h6">WOMENS</div>
        <div class="link">Tops</div>
        <div class="link">Sweaters</div>
        <div class="link">Dresses</div>
        <div class="link">Jeans</div>
        <div class="link">Jackets</div>
        <div class="link">Accessories</div>
        <div class="link">Lookbook</div>
      </div>
      <div class="list site">
        <div class="main ds-h6">SITE</div>
        <div class="link">Journal</div>
        <div class="link">About</div>
        <div class="link">Our</div>
        <div class="link">Story</div>
      </div>
      <div class="list support">
        <div class="main ds-h6">SUPPORT</div>
        <div class="link">Shipping and Delivery</div>
        <div class="link">Returns Policy</div>
        <div class="link">Privacy Policy</div>
      </div>
    </div>
    <div class="our-locations">
      <div class="location">
        <div class="store ds-h6">MANHATTAN STORE</div>
        <div class="street ds-paragraph">526 Avenue Of The Americas <br> New York NY</div>
      </div>
      <div class="location ds-h6">
        <div class="store">BROOKLYN STORE</div>
        <div class="street ds-paragraph">118 Knickerbocker Ave <br> East Williamsburg</div>
      </div>
    </div>
    <hr>
      <div class="img">
        <img src="~assets/footer/social.svg" alt="social networks">
      </div>
      <span class="copy ds-paragraph">© 2020 Vespi. All rights reserved. This is a Process Masterclass lesson.</span>
  </footer>
</div>
</template>

<script>
import mixin from './mixin.js'
export default {
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import url('../css/header.scss');
@import url('../css/main.scss');
@import url('../css/footer.scss');

.email {
  margin: 48px 26px 36px 26px;
  h6 {
    margin: 0 0 8px 0;
    display: flex;
    img {
      margin-right: 12px;
    }
  }
  p { color: #6A6161;}
  input {
    margin-top: 20px;
    width: 80%;
    border: 2px solid black;
    border-radius: 0px;
    padding: 20px 26px 20px;
    font-family: 'NewYorkSmallRegular';
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
  }
  input::placeholder {
    font-family: 'NewYorkSmallRegular';
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0%;
    color: black;
  }
}
hr {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin:0;
  padding:0;
}

@media (min-width: $breakpoint-md-min) {
  header {
  display: flex;
  justify-content: space-between;
  padding: 20px 25px 20px 20px;
  * {}
  .search {
    margin-right: 20px;
  }
  .brand {
    display: flex;
    padding-left: 25px;
    justify-content: flex-start;

  }
}

  hr { display: none;}
  main {
    h3 { margin-bottom: 80px}
    .first-two {
      display: flex;
      .carrousel {
        order: 1;
        width: 50%;
        .title {
          background-color: #FFFFFF;
        }
        .controls {
          display:none;
        }
      }
      .destacated {
        width: 50%;
        justify-content: flex-start;
      }
    }
    .latest {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      width: 100%;
      .title {
        display: none;
      }
    }
    .lasts-two {
      display: flex;
      .alone-post {
        width:50%;
      }
      .feature {
        width:50%;
        img {
        }
        .button-wrapper {
          display:none
        }
      }
    }
    .press-quotes {

      .brands {
        margin-left: 26px;
        margin-right: 26px;
        img {
          width: 40%;
        }
      }
    }
    .instagram-block {
      .title {
        display: flex;
        justify-content: space-between;

        .button {
          width: 25%;
        }
      }
      .carrousel {
        display: flex;
        justify-content: space-evenly;
        img {
          width: 30%;
        }
      }
    }
  }
  .email {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;
    input {
      margin-left: 60px;
      margin-top: 0;
      width: 40%;
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    padding-bottom: 60px;
    .links-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

    }
    .our-locations {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .location {
        margin-top: 0;
        margin-bottom: 20px;
        margin-right: 48px;
      }
    }

    .copy {
      color: #6A6161;
    }
  }
}

</style>
