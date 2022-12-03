export default  {
  welcome: 'Hosgeldiniz',
  loading: 'Yükleniyor',
  menuItems: {
    home: 'Anasayfa',
    author: 'Yazarlar',
    Post: 'Postlar'
  },
  items: [
    {
      icon: 'mdi-apps',
      title: 'Hosgeldin',
      to: '/',
    },

    {
      icon:'mdi-account-box',
      title:'Yazarlar',
      to:'/author'
    },
    {
      icon:'mdi-rename-box',
      title:'Postlar',
      to:'/post'
    }
  ],
  blog: {
    posts: 'İçerikler',
    comments: 'Yorumlar',
    backToList: 'blog listesine geri dön'
  },
  author: {
    authors: 'Yazarlar',
    posts: 'Yazara ait İçerikler'
  },
  dashboard : {
    TotalPostNumber : 'Toplam Post Sayısı',
    TotalAuthorNumber : 'Toplam Yazar Sayısı',
    TotalCommentNumber : 'Toplam Yorum Sayısı',
    SeeAllPosts:'Bütün Postları Gör',
    SeeAllAuthors:'Bütün Yazarları Gör',
    SeeAllComments : 'Bütün Yorumları Gör'
  }
}
