

export default function ({app, route, redirect}){

  // önce kullanıcı route içerisinde rastgele bir route denerse bunu kontrol ediyoruz.
  if (route.path !== '/auth/signin') {
    // ardından rastgele route deneyen kişi sistemde login biri mi bunu deniyoruz.
    if(!app.$fire.auth.currentUser) {
      // bu kişi sistemde login olmayan biri ise onu login sayfasına yönlendiriyoruz.

      return redirect('/auth/signin')
    }


  }
  // eğer route parametresi signin ise

  else if (route.path === '/auth/signin') {
    // yine sistemde bir user var mı ona bakıyoruz.

    if(!app.$fire.auth.currentUser) {
      // eğer sistemde halen bir user yoksa ona göre işlem alıyoruz.
      // daha doğrusu bırakıyoruz zaten route 'dan dolayı gidicek auth/signin yerine

    } else {
      // eğer sistemde bir user varsa onu ana sayfaya yönlendiririz

      return redirect('/')
    }
  }
}
