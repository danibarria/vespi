<template>
  <div class="wrapper">
    <img :src="getImgUrl(imageSrc)" :alt="imageAlt" loading="lazy" />
    <h4 class="ds-mobile-h4">{{ title }}</h4>
    <p class="ds-paragraph">{{ description }}</p>
    <div class="tag caption-text">Posted under <b class="tagName">{{ tagName }}</b></div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tagName: {
      type: String,
      required: true
    }
  },
  methods: {
    getImgUrl (pic) {
      return require('../assets/images/' + pic)
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 26px 40px 26px;
  padding-bottom: 10px;

  img {
    margin-bottom: 26px;
    width: 100%;
  }

  h4 {
    margin: 0 -6px 24px 0;
  }

  p {
    color: $text-grey;
    margin-right: 34px;
    margin-bottom: 24px;
  }

  .tag {
    .tagName {
      padding: 5px 10px 5px 10px ;
      font-family: 'LatoRegular';
      height: 24px;
      font-size: 12px;
      letter-spacing: 0.8px;
      line-height: 114%;
      margin-left: 10px;
      border: 1px solid black;
    }
  }
}

</style>
