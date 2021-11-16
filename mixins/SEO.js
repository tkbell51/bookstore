export default {
  head() {
    const head = {
      title: this.seo.title + ' | Books2Grow',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.seo.description ||
            'Books2Grow offers books focused on helping you grow mentally, financially, and phsyically.',
        },
        // OGP
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.seo.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.seo.type || 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.seo.image || '/assets/img/books2grow-full-meta.jpg',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_US',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://books2grow.com' + this.$route.path,
        },
      ],
    }
    if (this.seo.type === 'article') {
      head.meta.push(
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.seo.first_publication_date,
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.seo.last_publication_date,
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: 'https://books2grow.com/en/about',
        }
      )
    }
    return head
  },
}
