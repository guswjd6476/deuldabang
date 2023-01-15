function myF(locA) {
    location.replace(locA);
  }
  var tttt = window.location.href
  if (tttt == 'http://localhost:6354/intro') {
    document.querySelector('#intron').style.color='#2e8b57';
    document.querySelector('#mintron').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/intro_coffee'){
    document.querySelector('#intron').style.color='#2e8b57';
    document.querySelector('#mintron').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/intro_food'){
    document.querySelector('#intron').style.color='#2e8b57';
    document.querySelector('#mintron').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/intro_come'){
    document.querySelector('#intron').style.color='#2e8b57';
    document.querySelector('#mintron').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/qna'){
    document.querySelector('#qnan').style.color='#2e8b57';
    document.querySelector('#mqnan').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/qna_q'){
    document.querySelector('#qnan').style.color='#2e8b57';
    document.querySelector('#mqnan').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/news'){
    document.querySelector('#newsn').style.color='#2e8b57';
    document.querySelector('#mnewsn').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/shop'){
    document.querySelector('#shopn').style.color='#2e8b57';
    document.querySelector('#mshopn').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/shop_nodle'){
    document.querySelector('#shopn').style.color='#2e8b57';
    document.querySelector('#mshopn').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/shop_deul'){
    document.querySelector('#shopn').style.color='#2e8b57';
    document.querySelector('#mshopn').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/shop_mask'){
    document.querySelector('#shopn').style.color='#2e8b57';
    document.querySelector('#mshopn').style.color='#2e8b57';
  }else if(tttt == 'http://localhost:6354/shop_surport'){
    document.querySelector('#shopn').style.color='#2e8b57';
    document.querySelector('#mshopn').style.color='#2e8b57';
  }else{
    document.querySelector('#homen').style.color='#2e8b57';
    document.querySelector('#mhomen').style.color='#2e8b57';
  }