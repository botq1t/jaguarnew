let n_source={names:["Йогра","Ягра","Ягер","Ягор","Ягуар","Егор","Гоша","Грыша","Джордж","Джорджинио","Швагер","Крюгер","Стрингер","Игорь","Квакер","Йогурт","Егерь","Ядгар","Электроегор","Шлёпа","Шлёндра","Ягр","Шляпа","Шлёпок","Яга","Шлягер","Грыжа","Ярик","Егермейстер","Егорилла","Грошык","Горе","Швабра","Ягрон","Ятаган","Янычар","Ярило","Янцзы","Ярополк","Флюгер","Фляга","Ягрик","Фликер","Юнгер","Егурт","Юнга","Ягурец","Яруллин","Шиндр","Мындр","Ягрус","Егорище","Егорёк","Рыгор","Грека","Ярулинн","Гренка","Гангрена","Гроб","Тигр","Гогер","Юнкер","Янор","Жокер","Жорик","Жора","Жароха","Жмых","Жерех","Егошка","Геша","Егорик","Егорка","Кагор","Кент","Мотор","Крекер","Грильяж","Яромир","Ёринобу","Ёжик","Жэужык","Жужик","Живчик","Жывёла","Жоржик","Хоккей","Какей","Жрец","Жокей","Егоза","Гашиш","Гоголь","Гегель","Гитлер","Еггер","Григор","Грэг","Кракен","Гемор","Гомер","Голем","Горгулья","Гомункул","Ярослав","Копырь","Упырь","Крипер"],rarity:["Common","Rare","Arcane","Arcane","Arcane","Arcane","Arcane","Arcane","Rare","Arcane","Arcane","Arcane","Rare","Rare","Rare","Arcane","Rare","Arcane","Arcane","Arcane","Arcane","Rare","Arcane","Rare","Rare","Arcane","Arcane","Rare","Rare","Rare","Rare","Rare","Arcane","Rare","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Rare","Rare","Common","Rare","Common","Common","Common","Common","Common","Rare","Rare","Arcane","Rare","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Rare","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common"]};for(var names=[],names_c=[],names_a=[],names_r=[],i=0;i<n_source.names.length;i++)names[names.length]=n_source.names[i],"Common"==n_source.rarity[i]?names_c[names_c.length]=n_source.names[i]:"Rare"==n_source.rarity[i]?names_r[names_r.length]=n_source.names[i]:names_a[names_a.length]=n_source.names[i];var n=names.length,rn=Math.floor(Math.random()*n);console.log("Name: "+n,rn,names[n-1]);let namessort=[];namessort=names.slice(),namessort.sort();let s_source={surnames:["Летуаль","Ледовар","Ледокол","Литомент","Литаврас","Ледобас","Лореаль","Клитовор","Литорас","Литак","Литаврасина","Ледамыр","Листожор","Самовар","Сыкватар","Литавор (ударение на О)","Литавор (ударение на А)","Шумовар","Ледоруб","Мойдодыр","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живодёр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Ювелир","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],rarity:["Arcane","Rare","Rare","Rare","Rare","Common","Rare","Rare","Common","Common","Common","Common","Rare","Arcane","Rare","Arcane","Arcane","Common","Common","Rare","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common"]};var surnames=[],surnames_c=[],surnames_a=[],surnames_r=[];for(i=0;i<s_source.surnames.length;i++)surnames[surnames.length]=s_source.surnames[i],"Common"==s_source.rarity[i]?surnames_c[surnames_c.length]=s_source.surnames[i]:"Rare"==s_source.rarity[i]?surnames_r[surnames_r.length]=s_source.surnames[i]:surnames_a[surnames_a.length]=s_source.surnames[i];var s=surnames.length,rs=Math.floor(Math.random()*s);console.log("Surname: "+s,rs,surnames[s-1]);let surnamessort=[];surnamessort=surnames.slice(),surnamessort.sort(),$(document).ready((function(){$(".navigation__burger").click((function(o){$(".navigation__burger, .navigation__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),document.querySelector(".header").style.backgroundImage=`url("img/header/yager${Math.floor(12*Math.random()+1)}.jpg")`,console.log(document.querySelector(".header").style.backgroundImage);var hi=new Audio("audio/yager/koroche_zdorova.mp3");$(".header").click((function(){hi.play()}));const music=document.querySelector(".music__audio");$(".footer").dblclick((function(){$(".music").toggleClass("active")})),$(".music__play").click((function(){$(this).toggleClass("active"),$(".music__outline").toggleClass("active"),$(this).hasClass("active")?($(this).children("img").attr("src","img/music/pause.svg"),music.play()):($(this).children("img").attr("src","img/music/play.svg"),music.pause())})),$(document).ready((function(){$(".catalog__title_text").click((function(){$(".main__row").hasClass("one")&&($(".catalog__title_text").not($(this)).removeClass("active"),$(".catalog__title_text").not($(this)).parent().next().slideUp()),$(this).toggleClass("active"),$(this).parent().next().slideToggle()})),$(".catalog__button").click((function(){"Initial"==$(this).text()?($(this).text("Sorted"),$(this).parent().next().children("ul:first").fadeOut(150),$(this).parent().next().children("ul:last").delay(130).fadeIn(170)):($(this).text("Initial"),$(this).parent().next().children("ul:last").fadeOut(150),$(this).parent().next().children("ul:first").delay(130).fadeIn(170))})),$(".catalog__list").empty();for(var o=0;o<n;o++)o%10==0&&0!=o&&o!=n&&$("#names_unsorted").append('<li class="divider"></li>'),$("#names_unsorted").append("<li>"+(o+1)+". "+names[o]+"</li>");var e=namessort[0][0],m=1;$("#names_sorted").append('<li class="first_letter">'+e+"</li>");for(o=0;o<n;o++)namessort[o][0]!=e&&(e=namessort[o][0],$("#names_sorted").append('<li class="first_letter">'+e+"</li>"),m=1),$("#names_sorted").append("<li>"+m+". "+namessort[o]+"</li>"),m++;for(o=0;o<s;o++)o%10==0&&0!=o&&o!=s&&$("#surnames_unsorted").append('<li class="divider"></li>'),$("#surnames_unsorted").append("<li>"+(o+1)+". "+surnames[o]+"</li>");e=surnamessort[0][0],m=1;$("#surnames_sorted").append('<li class="first_letter">'+e+"</li>");for(o=0;o<s;o++)surnamessort[o][0]!=e&&(e=surnamessort[o][0],$("#surnames_sorted").append('<li class="first_letter">'+e+"</li>"),m=1),$("#surnames_sorted").append("<li>"+m+". "+surnamessort[o]+"</li>"),m++}));