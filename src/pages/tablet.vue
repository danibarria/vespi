<template>
<div class="wrapper">
  <header>
    <div class="menu">
      <img src="~assets/header/menu.svg" alt="menu">
    </div>
    <div class="search">
      <img src="~assets/header/search.svg" alt="search">
    </div>
    <div class="brand">
      <img src="~assets/header/brand.svg" alt="brand">
    </div>
    <div class="notifications">
      <img src="~assets/header/notifications.svg" alt="notifications">
    </div>
  </header>
  <main>
    <div class="first-two">
      <div class="carrousel">
        <img class="main-image" src="~assets/images/main-image.png" alt="Susie is wearing a Cashmere overcoat">
        <div class="title caption-text">
          Susie is wearing a Cashmere overcoat
          <img  src="~assets/main/arrow.svg" alt="next">
        </div>
        <div class="controls">
          <!-- points -->
          <label class="container">
            <input type="radio" v-model="carrousel" name="carrousel" value="1">
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <input type="radio" v-model="carrousel" name="carrousel" value="2">
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <input type="radio" v-model="carrousel" name="carrousel" value="3">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="destacated">
        <h1 class="author ds-mobile-author">SEBASTIAN x TAKAGAWA</h1>
        <div class="title ds-mobile-h1">Elegance <br>& Comfort</div>
        <p class="description ds-mobile-featured-paragraph">Our new range of overcoats made from 100% cashmere, ethically sourced and without the price tag of old fashion houses.</p>
        <img class="logo2020" src="~assets/main/2020badge.svg" alt="2020 badge">
      </div>
    </div>
    <div class="latest">
      <h3 class="title ds-mobile-latest-happenings">Latest happenings</h3>
      <post-preview
        v-for="(post, index) in lastsPosts"
        :key="index"
        :imageSrc=" post.imageSrc "
        :imageAlt=" post.imageAlt "
        :title=" post.title "
        :description=" post.description "
        :tagName=" post.tagName "
      />
    </div>
    <div class="lasts-two">
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
    <div class="press-quotes">
      <h3 class="quote ds-h3">“Beautiful collection of <br> indie American brands at <br> a fair price”</h3>
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
    <h6 class="ds-h6-alternate"><img src="~assets/header/smile.svg" alt="smile" /> WE ALSO MAKE EMAILS</h6>
    <p class="micro-caption-text">Recieve updates and offers you’ll actually be interested in.<br>Unsubscriber any time.</p>
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
        <div class="store">MANHATTAN STORE</div>
        <div class="street ds-paragraph">526 Avenue Of The Americas <br> New York NY</div>
      </div>
      <div class="location">
        <div class="store">BROOKLYN STORE</div>
        <div class="street ds-paragraph">118 Knickerbocker Ave <br> East Williamsburg</div>
      </div>
    </div>
    <hr>
    <div class="social-networks">
      <img src="~assets/footer/social.svg" alt="social networks">
    </div>
    <div class="copyright">
      <p class="ds-paragraph">
        © 2020 Vespi. All rights reserved. This is a Process Masterclass lesson.
      </p>
    </div>
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

@media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max) {
  hr { display: none;}
  main {
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
      grid-template-columns: 50% 50%;

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
          width: 100%;
        }
      }
    }
    .instagram-block {
      .title {
        display: flex;
        justify-content: space-between;

        .button {
          width: 45%;
        }
      }
    }
  }
  footer {
    .links-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

    }
    .our-locations {
      display: flex;
      justify-content: flex-start;
      .location {
        margin-right: 48px;
      }
    }
  }
}

</style>
