import PostPreview from '../components/PostPreview'
export default {
  name: 'PageIndex',
  components: { PostPreview },
  data () {
    return {
      carrousel: '1',
      lastsPosts: [
        {
          imageSrc: 'newsilhouettes.png',
          imageAlt: 'New silhouettes for a new decade',
          title: 'New silhouettes for a new decade',
          description: 'Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
          tagName: 'TRENDS'
        },
        {
          imageSrc: 'everydaywear.png',
          imageAlt: 'Our new Essentials Range for everyday wear',
          title: 'Our new Essentials Range for everyday wear',
          description: 'Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
          tagName: 'LOOK BOOK'
        },
        {
          imageSrc: 'mensautumn.png',
          imageAlt: 'Mens Autumn Lookbook',
          title: 'Mens Autumn Lookbook',
          description: 'Our new range of overcoats made from 100% cashmere, ethically sourced and without the price tag of old fashion houses.',
          tagName: 'LOOK BOOK'
        },
        {
          imageSrc: 'autumnvibes.png',
          imageAlt: 'Autumn – Vibes',
          title: 'Autumn – Vibes',
          description: 'Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
          tagName: 'LOOK BOOK'
        }
      ]
    }
  }
}
