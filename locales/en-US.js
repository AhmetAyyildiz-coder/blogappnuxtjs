export default {
  welcome: 'Welcome',
  loading: 'Loading',
  menuItems: {
    home: 'Home',
    author: 'Author',
    Post: 'Post'
  },
  items: [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },

    {
      icon:'mdi-account-box',
      title:'Author',
      to:'/author'
    },
    {
      icon:'mdi-rename-box',
      title:'Post',
      to:'/post'
    }
  ],
  blog: {
    posts: 'Posts',
    comments: 'Comments',
    backToList: 'back to blog posts'
  },
  author: {
    authors: 'Author',
    posts: 'Posts of The Author'
  },
  dashboard : {
    TotalPostNumber : 'Total Number of Posts',
    TotalAuthorNumber : 'Total Number of Authors',
    TotalCommentNumber : 'Total Number of Comments',
    SeeAllPosts:'See All Posts',
    SeeAllAuthors :'See All Authors',
    SeeAllComments :'See All Comments'
  }
}
