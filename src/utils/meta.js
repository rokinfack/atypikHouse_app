export default function meta () {
  const metaObj = { meta: {} }
  if (!this.metaTags) {
    return metaObj
  }
  if (this.metaTags.title) {
    console.log('title added')
    metaObj.title = this.metaTags.title
    metaObj.meta.ogTitle = { name: 'og:title', content: this.metaTags.title }
    metaObj.meta.twitterTitle = { name: 'twitter:title', content: this.metaTags.title }
  }
  if (this.metaTags.description) {
    console.log('desc added')
    metaObj.meta.description = { name: 'description', content: this.metaTags.description }
    metaObj.meta.ogDescription = { name: 'og:description', content: this.metaTags.description }
    metaObj.meta.twitterDescription = { name: 'twitter:description', content: this.metaTags.description }
  }
  if (this.metaTags.url) {
    console.log('url added')
    metaObj.meta.ogUrl = { name: 'og:url', content: this.metaTags.url }
    metaObj.meta.twitterUrl = { name: 'twitter:url', content: this.metaTags.url }
    metaObj.meta.canonical = { rel: 'canonical', href: this.metaTags.url }
  }
  if (this.metaTags.image) {
    console.log('image added')
    metaObj.meta.ogImage = { name: 'og:image', content: this.metaTags.image }
    metaObj.meta.twitterImage = { name: 'twitter:image', content: this.metaTags.image }
  }
  return metaObj
}
