Swal.fire({
    title: '<strong>Wilkommen im Geschäft!</strong>',
    icon: 'info',
    html:
      'Geschäft ist ein Handelsspiel. Mit diesem Spiel lernst du Wirtschafts- und deutsche Zahlen. ' ,
    showCloseButton: true,
    
    focusConfirm: false,
    confirmButtonText:
      '<p onclick="next_alert()">Nächste <i class="fa-solid fa-arrow-right"></i></p>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
  function next_alert(){
    Swal.fire({
        title: '<strong>Spielanleitung?</strong>',
        icon: 'info',
        html:
          'Sie besitzen jetzt ein Geschäft. Das heißt, Sie müssen Geld verdienen, indem Sie Produkte aus den Ihnen gebotenen Möglichkeiten kaufen und verkaufen!' ,
        showCloseButton: true,
        
        focusConfirm: false,
        confirmButtonText:
          '<p onclick="next_alert1()">Nächste <i class="fa-solid fa-arrow-right"></i></p>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }
  function next_alert1(){
    Swal.fire({
        title: '<strong>ACHTUNG!</strong>',
        icon: 'warning',
        html:
          'Wenn Sie das Spiel schließen, werden Ihre Daten nicht gespeichert' ,
        showCloseButton: true,
        
        focusConfirm: false,
        confirmButtonText:
          '<p onclick="next_alert2()">Nächste <i class="fa-solid fa-arrow-right"></i></p>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }
  function next_alert2(){
    Swal.fire(
        'Gut Gemacht!',
        'Sie jetzt, wie man Geschäft spielt. Fangen wir an!',
        'success'
      )
  }
//GAME SCRIPT kutdev
var makinealindi = 0;
var pamuksayisi = 0;
var fermsayisi = 0;
var astarsayisi = 0;
var kapalindi = 0;
var makasalindi = 0;
var derisayisi = 0;
var vidasayisi = 0;
var camsayisi = 0;
var plastisayisi = 0;
var pressalindi = 0;


var ceketsayisi = 0;
var pceketsayisi = 0;
var kazaksayisi = 0;
var derielsayisi = 0;
var deriaysayisi = 0;
var corapsayisi = 0;
var gozluksayisi = 0;
var lastiksayisi = 0;
var arabasayisi = 0;

var price;
var product;
var product1;
var product2;
var wanted;
var custname;
var game_start = 0;
var press_items = 0;
var press_market = 0;
var press_workshop = 0;
var press_stor = 0;
var name_input = document.getElementById("name");
var name_submit = document.getElementById("submit-button");
var money_text = document.getElementById("money-text");
var money = 300;
var maxprice = 105;
var minprice = 65;




function randomName(){
  var names = ["Albert","Johan","Carl","Klaus","Leo","Zelda","Verena","Ulrica","Suzanne","Delia","Heidi","Johanna","Nikola","Hans","Nadja","Delmira","Diederich","Gunther","Nikolaus","Oskar"];

var random = Math.floor(Math.random() * names.length);
   custname = names[random];
  return custname;
}
function randomProduct(){
  var productl = ["Auto","Baumwollsocken","Sonnenbrille","Reifen","Lederschuhe","Lederhandschuh","Pullover aus Baumwolle","Baumwolljacke","Lederjacke"];

var randomp = Math.floor(Math.random() * productl.length);
   product = productl[randomp];
  return product;
}
function refresh_cust(){
  if (game_start == 1) {
    
  document.getElementById("customer1").style.visibility = "visible";
  document.getElementById("customer2").style.visibility = "visible";

  randomName();
  randomProduct();
  product1 = product;
  console.log(product);
  if (product1 == "Auto") {
    price = 745;
  }
  if (product1 == "Baumwollsocken") {
    price = 25;
  }
  if (product1 == "Sonnenbrille") {
    price = 700;
  }
  if (product1 == "Reifen") {
    price = 310;
  }
  if (product1 == "Lederschuhe") {
    price = 75;
  }
  if (product1 == "Lederhandschuh") {
    price = 80;
  }
  if (product1 == "Pullover aus Baumwolle") {
    price = 30;
  }
  if (product1 == "Baumwolljacke") {
    price = 110;
  }
  if (product1 == "Lederjacke") {
    price = 155;
  }
  
  document.getElementById("customer1").innerHTML ='<h2>'+custname+'</h2><h5 id="price">€'+price+'</h5><p id="product">'+custname+' will eine '+product1+'.</p><button onclick="sell1()">Verkaufen</button>';
  

  randomName();
  randomProduct();
  product2 = product;
  if (product2 == "Auto") {
    price = 745;
  }
  if (product2 == "Baumwollsocken") {
    price = 25;
  }
  if (product2 == "Sonnenbrille") {
    price = 700;
  }
  if (product2 == "Reifen") {
    price = 310;
  }
  if (product2 == "Lederschuhe") {
    price = 75;
  }
  if (product2 == "Lederhandschuh") {
    price = 80;
  }
  if (product2 == "Pullover aus Baumwolle") {
    price = 30;
  }
  if (product2 == "Baumwolljacke") {
    price = 110;
  }
  if (product2 == "Lederjacke") {
    price = 155;
  }

  document.getElementById("customer2").innerHTML ='<h2>'+custname+'</h2><h5 id="price">€'+price+'</h5><p id="product">'+custname+' will eine '+product+'.</p><button onclick="sell2()">Verkaufen</button>';
  return product1, product2;
}
else{
  Swal.fire(
    'Achtung!',
    'Sie sollten das Spiel starten, um Kunden zu erfrischen!',
    'warning'
  )
  
}
}
function sell1(){
  if (product1 == "Baumwollsocken" && corapsayisi >= 1) {
    corapsayisi -= 1;
    money += 25;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, corapsayisi;
  }
  if (product1 == "Sonnenbrille" && gozluksayisi >= 1) {
    gozluksayisi -= 1;
    money += 700;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, gozluksayisi;
  }
  if (product1 == "Reifen" && lastiksayisi >= 1) {
    lastiksayisi -= 1;
    money += 310;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, lastiksayisi;
  }
  if (product1 == "Lederschuhe" && deriaysayisi >= 1) {
    deriaysayisi -= 1;
    money += 75;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, deriaysayisi;
  }
  if (product1 == "Lederhandschuh" && derielsayisi >= 1) {
    derielsayisi -= 1;
    money += 80;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, derielsayisi;
  }
  if (product1 == "Pullover aus Baumwolle" && kazaksayisi >= 1) {
    kazaksayisi -= 1;
    money += 30;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, kazaksayisi;
  }
  if (product1 == "Baumwolljacke" && pceketsayisi >= 1) {
    pceketsayisi -= 1;
    money += 110;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, pceketsayisi;
  }
  if (product1 == "Lederjacke" && ceketsayisi >= 1) {
    ceketsayisi -= 1;
    money += 155;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, ceketsayisi;
  }
  
  if (product1 == "Auto" && arabasayisi >= 1) {
    arabasayisi -= 1;
    money += 745;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer1").style.visibility = "hidden";
    return money, arabasayisi;
  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben kein erforderliches Produkt, um diesen Job abzuschließen!',
      'warning'
    )
  }
 
}
function sell2(){
  if (product2 == "Baumwollsocken" && corapsayisi >= 1) {
    corapsayisi -= 1;
    money += 25;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, corapsayisi;
  }
  if (product2 == "Sonnenbrille" && gozluksayisi >= 1) {
    gozluksayisi -= 1;
    money += 700;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, gozluksayisi;
  }
  if (product2 == "Reifen" && lastiksayisi >= 1) {
    lastiksayisi -= 1;
    money += 310;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, lastiksayisi;
  }
  if (product2 == "Lederschuhe" && deriaysayisi >= 1) {
    deriaysayisi -= 1;
    money += 75;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, deriaysayisi;
  }
  if (product2 == "Lederhandschuh" && derielsayisi >= 1) {
    derielsayisi -= 1;
    money += 80;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, derielsayisi;
  }
  if (product2 == "Pullover aus Baumwolle" && kazaksayisi >= 1) {
    kazaksayisi -= 1;
    money += 30;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, kazaksayisi;
  }
  if (product2 == "Baumwolljacke" && pceketsayisi >= 1) {
    pceketsayisi -= 1;
    money += 110;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, pceketsayisi;
  }
  if (product2 == "Lederjacke" && ceketsayisi >= 1) {
    ceketsayisi -= 1;
    money += 155;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, ceketsayisi;
  }
  
  if (product2 == "Auto" && arabasayisi >= 1) {
    arabasayisi -= 1;
    money += 745;
    money_text.innerHTML = "Geld:" + "€"+ money;
    document.getElementById("customer2").style.visibility = "hidden";
    return money, arabasayisi;
  }
 
}

  function submit(){
    //Change Text
    
    randomName();
    randomProduct();
    if (product == "Auto") {
      price = 745;
    }
    if (product == "Baumwollsocken") {
      price = 25;
    }
    if (product == "Sonnenbrille") {
      price = 700;
    }
    if (product == "Reifen") {
      price = 310;
    }
    if (product == "Lederschuhe") {
      price = 75;
    }
    if (product == "Lederhandschuh") {
      price = 80;
    }
    if (product == "Pullover aus Baumwolle") {
      price = 30;
    }
    if (product == "Baumwolljacke") {
      price = 110;
    }
    if (product == "Lederjacke") {
      price = 155;
    }

    document.getElementById("customer1").innerHTML ='<h2>'+custname+'</h2><h5 id="price">€'+price+'</h5><p id="product">'+custname+' will eine '+product+'.</p><button onclick="sell1()">Verkaufen</button>';
    randomName();
    randomProduct();
    if (product == "Auto") {
      price = 745;
    }
    if (product == "Baumwollsocken") {
      price = 25;
    }
    if (product == "Sonnenbrille") {
      price = 700;
    }
    if (product == "Reifen") {
      price = 310;
    }
    if (product == "Lederschuhe") {
      price = 75;
    }
    if (product == "Lederhandschuh") {
      price = 80;
    }
    if (product == "Pullover aus Baumwolle") {
      price = 30;
    }
    if (product == "Baumwolljacke") {
      price = 110;
    }
    if (product == "Lederjacke") {
      price = 155;
    }
    document.getElementById("customer2").innerHTML ='<h2>'+custname+'</h2><h5 id="price">€'+price+'</h5><p id="product">'+custname+' will eine '+product+'.</p><button onclick="sell2()">Verkaufen</button>';
    money_text.style.visibility = "visible";
    var user_name = document.getElementById("name").value;
    money_text.innerHTML = "Geld:" + "€"+ money ;
    
    if (user_name != 0) {
      document.getElementById("name-text").innerHTML = user_name+"s Geschäft"  ; 
    //Removing Inputs
    
    name_input.style.visibility = "hidden";
    name_submit.style.visibility = "hidden";
    game_start = 1;
    return game_start;
    }
    else{
      Swal.fire(
        'Achtung',
        'Bitte überprüfen Sie, dass die Namenseingabe nicht leer ist',
        'warning'
      )
    }
    

    


  }
  function sell1(){
    if (product1 == "Baumwollsocken" && corapsayisi >= 1) {
      corapsayisi -= 1;
      money += 25;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, corapsayisi;
    }
    if (product1 == "Sonnenbrille" && gozluksayisi >= 1) {
      gozluksayisi -= 1;
      money += 700;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, gozluksayisi;
    }
    if (product1 == "Reifen" && lastiksayisi >= 1) {
      lastiksayisi -= 1;
      money += 310;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, lastiksayisi;
    }
    if (product1 == "Lederschuhe" && deriaysayisi >= 1) {
      deriaysayisi -= 1;
      money += 75;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, deriaysayisi;
    }
    if (product1 == "Lederhandschuh" && derielsayisi >= 1) {
      derielsayisi -= 1;
      money += 80;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, derielsayisi;
    }
    if (product1 == "Pullover aus Baumwolle" && kazaksayisi >= 1) {
      kazaksayisi -= 1;
      money += 30;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, kazaksayisi;
    }
    if (product1 == "Baumwolljacke" && pceketsayisi >= 1) {
      pceketsayisi -= 1;
      money += 110;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, pceketsayisi;
    }
    if (product1 == "Lederjacke" && ceketsayisi >= 1) {
      ceketsayisi -= 1;
      money += 155;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, ceketsayisi;
    }
    
    if (product1 == "Auto" && arabasayisi >= 1) {
      arabasayisi -= 1;
      money += 745;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer1").style.visibility = "hidden";
      return money, arabasayisi;
    }
    else{
      Swal.fire(
        'Achtung!',
        'Sie haben kein erforderliches Produkt, um diesen Job abzuschließen!',
        'warning'
      )
    }
   
  }
  function sell2(){
    if (product2 == "Baumwollsocken" && corapsayisi >= 1) {
      corapsayisi -= 1;
      money += 25;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, corapsayisi;
    }
    if (product2 == "Sonnenbrille" && gozluksayisi >= 1) {
      gozluksayisi -= 1;
      money += 700;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, gozluksayisi;
    }
    if (product2 == "Reifen" && lastiksayisi >= 1) {
      lastiksayisi -= 1;
      money += 310;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, lastiksayisi;
    }
    if (product2 == "Lederschuhe" && deriaysayisi >= 1) {
      deriaysayisi -= 1;
      money += 75;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, deriaysayisi;
    }
    if (product2 == "Lederhandschuh" && derielsayisi >= 1) {
      derielsayisi -= 1;
      money += 80;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, derielsayisi;
    }
    if (product2 == "Pullover aus Baumwolle" && kazaksayisi >= 1) {
      kazaksayisi -= 1;
      money += 30;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, kazaksayisi;
    }
    if (product2 == "Baumwolljacke" && pceketsayisi >= 1) {
      pceketsayisi -= 1;
      money += 110;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, pceketsayisi;
    }
    if (product2 == "Lederjacke" && ceketsayisi >= 1) {
      ceketsayisi -= 1;
      money += 155;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, ceketsayisi;
    }
    
    if (product2 == "Auto" && arabasayisi >= 1) {
      arabasayisi -= 1;
      money += 745;
      money_text.innerHTML = "Geld:" + "€"+ money;
      document.getElementById("customer2").style.visibility = "hidden";
      return money, arabasayisi;
    }
   
  }
  
  function items(){
    if (game_start == 1) {
      
    
    if (press_items == 1) {
      document.getElementById("inventory").style.visibility ="hidden";
      press_items = 0;


      if (makinealindi == 1) {
        document.getElementById("makinei").style.visibility = "hidden";
        
      }

      if (pamuksayisi >= 1) {
        document.getElementById("pamuki").style.visibility = "hidden";
      }
      if (fermsayisi >= 1) {
        document.getElementById("fermi").style.visibility = "hidden";
      }
      if (astarsayisi >= 1) {
        document.getElementById("astari").style.visibility = "hidden";
      }
      if (kapalindi == 1) {
        document.getElementById("kapi").style.visibility = "hidden";
      }
      if (makasalindi == 1) {
        document.getElementById("makasi").style.visibility = "hidden";
      }
      if (derisayisi >= 1) {
        document.getElementById("derii").style.visibility = "hidden";
      }
      if (vidasayisi >= 1) {
        document.getElementById("vidai").style.visibility = "hidden";
      }
      if (camsayisi >= 1) {
        document.getElementById("cami").style.visibility = "hidden";
      }
      if (plastisayisi >= 1) {
        document.getElementById("plastii").style.visibility = "hidden";
      }
      if (pressalindi == 1) {
        document.getElementById("pressi").style.visibility = "hidden";
        
      }
      return press_items;
    }
    if (press_items == 0) {
      document.getElementById("inventory").style.visibility ="visible";
      press_items = 1;


      if (makinealindi == 1) {
        document.getElementById("makinei").style.visibility = "visible";
      }
      if (pamuksayisi >= 1) {
        document.getElementById("pamuki").innerHTML = "Baumwolle (Pamuk) X"+pamuksayisi;
        document.getElementById("pamuki").style.visibility = "visible";
      }
      if (fermsayisi >= 1) {
        document.getElementById("fermi").innerHTML = "Reißverschluss (Fermuar) X"+fermsayisi;
        document.getElementById("fermi").style.visibility = "visible";
      }
      if (astarsayisi >= 1) {
        document.getElementById("astari").innerHTML = "der Futterstoff (Astar) X"+astarsayisi;
        document.getElementById("astari").style.visibility = "visible";
      }
      if (kapalindi == 1) {
        document.getElementById("kapi").style.visibility = "visible";
      }
      if (makasalindi == 1) {
        document.getElementById("makasi").style.visibility = "visible";
      }
      if (derisayisi >= 1) {
        document.getElementById("derii").innerHTML = "das Balg(Deri) X"+derisayisi;
        document.getElementById("derii").style.visibility = "visible";
      }
      if (vidasayisi >= 1) {
        document.getElementById("vidai").innerHTML = "Schraube(Vida) X"+vidasayisi;
        document.getElementById("vidai").style.visibility = "visible";
      }
      if (camsayisi >= 1) {
        document.getElementById("cami").innerHTML = "Kiefer(Cam) X"+camsayisi;
        document.getElementById("cami").style.visibility = "visible";
      }
      if (plastisayisi >= 1) {
        document.getElementById("plastii").innerHTML = "Plastik(Plastik) X"+plastisayisi;
        document.getElementById("plastii").style.visibility = "visible";
      }
      if (pressalindi == 1) {
        document.getElementById("pressi").style.visibility = "visible";
      }



      return press_items;
    }
  }
  Swal.fire(
    'Achtung',
    'Sie sollten das Spiel starten, indem Sie Ihren Namen eingeben, um diese Fähigkeit zu nutzen',
    'warning'
  )
  }
  




  function storage(){
    if (game_start == 1) {
      
    
    if (press_stor == 1) {
      document.getElementById("storage").style.visibility ="hidden";
      press_stor = 0;


      if (ceketsayisi >= 1) {
        document.getElementById("ceketl").style.visibility = "hidden";
        
      }

      if (pceketsayisi >= 1) {
        document.getElementById("pceketl").style.visibility = "hidden";
      }
      if (kazaksayisi >= 1) {
        document.getElementById("kazakl").style.visibility = "hidden";
      }
      if (derielsayisi >= 1) {
        document.getElementById("deriell").style.visibility = "hidden";
      }
      if (deriaysayisi >= 1) {
        document.getElementById("deriayl").style.visibility = "hidden";
      }
      if (corapsayisi >= 1) {
        document.getElementById("corapl").style.visibility = "hidden";
      }
      if (gozluksayisi >= 1) {
        document.getElementById("gozlukl").style.visibility = "hidden";
      }
      
      if (lastiksayisi >= 1) {
        document.getElementById("lastikl").style.visibility = "hidden";
      }
      if (arabasayisi >= 1) {
        document.getElementById("arabal").style.visibility = "hidden";
      }
      
      return press_stor;
    }
    if (press_stor == 0) {
      document.getElementById("storage").style.visibility ="visible";
      press_stor = 1;
     
      if (ceketsayisi >= 1) {
        document.getElementById("ceketl").innerHTML = "Lederjacke (Deri Ceket) X"+ceketsayisi;
        document.getElementById("ceketl").style.visibility = "visible";
      }

      if (pceketsayisi >= 1) {
        document.getElementById("pceketl").innerHTML = "Baumwolljacke (Pamuk Ceket) X"+pceketsayisi;
        document.getElementById("pceketl").style.visibility = "visible";
      }
      if (kazaksayisi >= 1) {
        document.getElementById("kazakl").innerHTML = "Pullover aus Baumwolle(Pamuk Kazak) X"+kazaksayisi;
        document.getElementById("kazakl").style.visibility = "visible";
      }
      if (derielsayisi >= 1) {
        document.getElementById("deriell").innerHTML = "Lederhandschuh (Deri Eldiven) X"+derielsayisi;
        document.getElementById("deriell").style.visibility = "visible";
      }
      if (deriaysayisi >= 1) {
        document.getElementById("deriayl").innerHTML = "Lederschuhe (Deri Ayakkabı) X"+deriaysayisi;
        document.getElementById("deriayl").style.visibility = "visible";
      }
      if (corapsayisi >= 1) {
        document.getElementById("corapl").innerHTML = "Baumwollsocken(Pamuk Çorap) X"+corapsayisi;
        document.getElementById("corapl").style.visibility = "visible";
      }
      if (gozluksayisi >= 1) {
        document.getElementById("gozlukl").innerHTML = "Sonnenbrille(Güneş Gözlüğü) X"+gozluksayisi;
        document.getElementById("gozlukl").style.visibility = "visible";
      }
      if (lastiksayisi >= 1) {
        document.getElementById("lastikl").innerHTML = "Reifen(Lastik) X"+lastiksayisi;
        document.getElementById("lastikl").style.visibility = "visible";
      }
      if (arabasayisi >= 1) {
        document.getElementById("arabal").innerHTML = "Auto(Araba) X"+arabasayisi;
        document.getElementById("arabal").style.visibility = "visible";
      }
      
      
      



      return press_stor;
    }
  }
  Swal.fire(
    'Achtung',
    'Sie sollten das Spiel starten, indem Sie Ihren Namen eingeben, um diese Fähigkeit zu nutzen',
    'warning'
  )
  }
  




  function market(){
    if (game_start == 1) {
      
    
    if (press_market == 1) {
      document.getElementById("market").style.visibility ="hidden";
      press_market = 0;
      return press_market;
    }
    if (press_market == 0) {
      document.getElementById("market").style.visibility ="visible";
      press_market = 1;
      return press_market;
    }
  }
  Swal.fire(
    'Achtung',
    'Sie sollten das Spiel starten, indem Sie Ihren Namen eingeben, um diese Fähigkeit zu nutzen',
    'warning'
  )
  }




  function workshop(){
    if (game_start == 1) {
      
    
    if (press_workshop == 1) {
      document.getElementById("workshop").style.visibility ="hidden";
      press_workshop = 0;
      return press_workshop;
    }
    if (press_workshop == 0) {
      document.getElementById("workshop").style.visibility ="visible";
      press_workshop = 1;
      return press_workshop;
    }
  }
  Swal.fire(
    'Achtung',
    'Sie sollten das Spiel starten, indem Sie Ihren Namen eingeben, um diese Fähigkeit zu nutzen',
    'warning'
  )
  }
  if (gamestart == 1) {
    
  }

  //BUYING SYSTEM kutdev

function buymakine(){
  if (money >= 170) {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sie haben eine neue Maschine eröffnet!',
      showConfirmButton: false,
      timer: 3500
    })
  money -= 170;
  makinealindi = 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
  
    
    document.getElementById("makine").style.visibility ="hidden";
   
    

  
  
  
  return money, makinealindi;
}
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }
}
function buypamuk(){
  if (money >= 20) {
    
  
  money -= 20;
  pamuksayisi += 1;
  
  money_text.innerHTML = "Geld:" + "€"+ money;
 
  
  return money, pamuksayisi;
}
else{
  Swal.fire(
    'Achtung!',
    'das kannst du dir nicht leisten',
    'error'
  )
}
}
function buyferm(){
  if (money >= 50) {
    
  
  money -= 50;
  fermsayisi += 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
  
    
    
    

  
  
  
  return money, fermsayisi;
}
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }
}
function buyastar(){
  if (money >= 30) {
    
  
  money -= 30;
  astarsayisi += 1;
  money_text.innerHTML = "Geld:" + "€"+ money;

  
  
  return money, astarsayisi;
}
else{
  Swal.fire(
    'Achtung!',
    'das kannst du dir nicht leisten',
    'error'
  )
}
}
function buykap(){
  if (money >= 45) {
    
  
  money -= 45;
  kapalindi = 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
 
   
    document.getElementById("kap").style.visibility ="hidden";
   
    

  
  
  
  return money, kapalindi;
}
else{
  Swal.fire(
    'Achtung!',
    'das kannst du dir nicht leisten',
    'error'
  )
}
}
function buymakas(){
  if (money >= 40) {
    
  
  money -= 40;
  makasalindi = 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
 
    
    document.getElementById("makas").style.visibility ="hidden";
    return makasalindi, money;
    
  
  
  
  
}
else{
  Swal.fire(
    'Achtung!',
    'das kannst du dir nicht leisten',
    'error'
  )
}
}

function buyderi(){
  if (money >= 65) {
    
  
  money -= 65;
  derisayisi += 1;
  money_text.innerHTML = "Geld:" + "€"+ money;

    
    return derisayisi, money;
    

 
  }
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }

}
function buyvida(){
  if (money >= 100) {
    
  
  money -= 100;
  vidasayisi += 1;
  money_text.innerHTML = "Geld:" + "€"+ money;

    
    
    

  
  
  
  return money, vidasayisi;
  }
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }

}
function buycam(){
  if (money >= 250) {
    
  
  money -= 250;
  camsayisi += 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
  
    
    
    

  
  
  
  return money, camsayisi;
  }
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }

}
function buyplasti(){
  if (money >= 270) {
    
  
  money -= 270;
  plastisayisi += 1;
  
  money_text.innerHTML = "Geld:" + "€"+ money;
 
    
    

  
  
  
  return money, plastisayisi;
  }
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }

}


function buypress(){
  if (money >= 530) {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sie haben eine neue Maschine eröffnet!',
      showConfirmButton: false,
      timer: 3500
    })
  money -= 530;
  pressalindi = 1;
  money_text.innerHTML = "Geld:" + "€"+ money;
  
    
    document.getElementById("press").style.visibility ="hidden";
    
    

  
  
  
  return money, pressalindi;
}
  else{
    Swal.fire(
      'Achtung!',
      'das kannst du dir nicht leisten',
      'error'
    )
  }
}

//WORKSHOP SYSTEM kutdev

function craftpcek(){
  if (pamuksayisi >= 1 && astarsayisi >= 1 && fermsayisi >= 1 && makinealindi == 1) {
    pamuksayisi -= 1;
    astarsayisi -= 1;
    fermsayisi -= 1;
    pceketsayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return pceketsayisi, derisayisi, astarsayisi, fermsayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftdcek(){
  if (derisayisi >= 1 && astarsayisi >= 1 && fermsayisi >= 1 && makinealindi == 1) {
    pamuksayisi -= 1;
    astarsayisi -= 1;
    fermsayisi -= 1;
    ceketsayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return ceketsayisi, pamuksayisi, astarsayisi, fermsayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftkazak(){
  if (pamuksayisi >= 1  && makinealindi == 1) {
    pamuksayisi -= 1;
    kazaksayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return pamuksayisi,kazaksayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftderiel(){
  if (makasalindi = 1  && makinealindi == 1 && derisayisi >= 1) {
    derisayisi -= 1;
    derielsayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return derisayisi,derielsayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}

function craftderiay(){
  if (kapalindi = 1  && makasalindi == 1 && derisayisi >= 1) {
    derisayisi -= 1;
    deriaysayisi += 1;
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })


    return derisayisi,deriaysayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftcorap(){
  if (makinealindi = 1  && pamuksayisi >= 1) {
    pamuksayisi -= 1;
    corapsayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return pamuksayisi,corapsayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}

function craftgoz(){
  if (   plastisayisi >= 1 && vidasayisi >= 1 && camsayisi >= 1) {
    vidasayisi -= 1;
    plastisayisi -= 1;
    camsayisi -= 1;
    gozluksayisi += 1;
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })


    return vidasayisi,plastisayisi,camsayisi,gozsayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftlas(){
  if (plastisayisi >= 1 && pressalindi == 1) {
    plastisayisi -= 1;
    lastiksayisi += 1;
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })

    return plastisayisi,lastiksayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}
function craftar(){
  if (plastisayisi >= 1 && vidasayisi >= 1 && camsayisi >= 1 && derisayisi >= 1 && lastiksayisi >= 1 && makinealindi == 1 && pressalindi == 1) {
    plastisayisi -= 1;
    vidasayisi -= 1;
    camsayisi -= 1;
    derisayisi -= 1;
    lastiksayisi -= 1;
    arabasayisi += 1;
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Das Produkt wurde erfolgreich vorbereitet!',
      showConfirmButton: false,
      timer: 1500
    })


    return derisayisi,camsayisi,arabasayisi,lastiksayisi,plastisayisi,vidasayisi;
    

  }
  else{
    Swal.fire(
      'Achtung!',
      'Sie haben nicht genug Material, um dieses Produkt herzustellen!',
      'warning'
    )
  }
}


