let n_source={names:["Йогра","Ягра","Ягер","Ягор","Ягуар","Егор","Гоша","Грыша","Джордж","Джорджинио","Швагер","Крюгер","Стрингер","Игорь","Квакер","Йогурт","Егерь","Ядгар","Электроегор","Шлёпа","Шлёндра","Ягр","Шляпа","Шлёпок","Яга","Шлягер","Грыжа","Ярик","Егермейстер","Егорилла","Грошык","Горе","Швабра","Ягрон","Ятаган","Янычар","Ярило","Янцзы","Ярополк","Флюгер","Фляга","Ягрик","Фликер","Юнгер","Егурт","Юнга","Ягурец","Яруллин","Шиндр","Мындр","Ягрус","Егорище","Егорёк","Рыгор","Грека","Ярулинн","Гренка","Гангрена","Гроб","Тигр","Гогер","Юнкер","Янор","Жокер","Жорик","Жора","Жароха","Жмых","Жерех","Егошка","Геша","Егорик","Егорка","Кагор","Кент","Мотор","Крекер","Грильяж","Яромир","Ёринобу","Ёжик","Жэужык","Жужик","Живчик","Жывёла","Жоржик","Хоккей","Какей","Жрец","Жокей","Егоза","Гашиш","Гоголь","Гегель","Гитлер","Еггер","Григор","Грэг","Кракен","Гемор","Гомер","Голем","Горгулья","Гомункул","Ярослав","Копырь","Упырь","Крипер"],rarity:["Common","Rare","Arcane","Arcane","Arcane","Arcane","Arcane","Arcane","Rare","Arcane","Arcane","Arcane","Rare","Rare","Rare","Arcane","Rare","Arcane","Arcane","Arcane","Arcane","Rare","Arcane","Rare","Rare","Arcane","Arcane","Rare","Rare","Rare","Rare","Rare","Arcane","Rare","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Rare","Rare","Common","Rare","Common","Common","Common","Common","Common","Rare","Rare","Arcane","Rare","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Rare","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common"]};for(var names=[],names_c=[],names_a=[],names_r=[],i=0;i<n_source.names.length;i++)names[names.length]=n_source.names[i],"Common"==n_source.rarity[i]?names_c[names_c.length]=n_source.names[i]:"Rare"==n_source.rarity[i]?names_r[names_r.length]=n_source.names[i]:names_a[names_a.length]=n_source.names[i];var n=names.length,rn=Math.floor(Math.random()*n);console.log("Name: "+n,rn,names[n-1]);let namessort=[];namessort=names.slice(),namessort.sort();let s_source={surnames:["Летуаль","Ледовар","Ледокол","Литомент","Литаврас","Ледобас","Лореаль","Клитовор","Литорас","Литак","Литаврасина","Ледамыр","Листожор","Самовар","Сыкватар","Литавор (ударение на О)","Литавор (ударение на А)","Шумовар","Ледоруб","Мойдодыр","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живодёр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Ювелир","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],rarity:["Arcane","Rare","Rare","Rare","Rare","Common","Rare","Rare","Common","Common","Common","Common","Rare","Arcane","Rare","Arcane","Arcane","Common","Common","Rare","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Rare","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common","Common"]};var surnames=[],surnames_c=[],surnames_a=[],surnames_r=[];for(i=0;i<s_source.surnames.length;i++)surnames[surnames.length]=s_source.surnames[i],"Common"==s_source.rarity[i]?surnames_c[surnames_c.length]=s_source.surnames[i]:"Rare"==s_source.rarity[i]?surnames_r[surnames_r.length]=s_source.surnames[i]:surnames_a[surnames_a.length]=s_source.surnames[i];var s=surnames.length,rs=Math.floor(Math.random()*s);console.log("Surname: "+s,rs,surnames[s-1]);let surnamessort=[];surnamessort=surnames.slice(),surnamessort.sort(),$(document).ready((function(){$(".navigation__burger").click((function(a){$(".navigation__burger, .navigation__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),document.querySelector(".header").style.backgroundImage=`url("img/header/yager${Math.floor(12*Math.random()+1)}.jpg")`,console.log(document.querySelector(".header").style.backgroundImage);var hi=new Audio("audio/yager/koroche_zdorova.mp3");$(".header").click((function(){hi.play()}));const music=document.querySelector(".music__audio");$(".footer").dblclick((function(){$(".music").toggleClass("active")})),$(".music__play").click((function(){$(this).toggleClass("active"),$(".music__outline").toggleClass("active"),$(this).hasClass("active")?($(this).children("img").attr("src","img/music/pause.svg"),music.play()):($(this).children("img").attr("src","img/music/play.svg"),music.pause())})),$(document).ready((function(){var a=Math.floor(1/(n*s)*100*1e4)/1e4;$("#uniqueness").empty().append(a+"%")}));var a_a=new Audio("audio/yager/ten_th.mp3"),a_r=new Audio("audio/yager/chel.mp3"),a_c=new Audio("audio/yager/kruto.mp3"),r_r=new Audio("audio/yager/tajika.mp3"),r_c=new Audio("audio/yager/nekruto.mp3"),c_c=new Audio("audio/yager/udachi.mp3");$("#ranbut").click((function(){var a=Math.floor(100*Math.random()+1),e=Math.floor(100*Math.random()+1);if($("#name #surname").show(500),a<6){$("#name").hasClass("rare")&&$("#name").toggleClass("rare"),$("#name").hasClass("common")&&$("#name").toggleClass("common"),0==$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane");var o=Math.floor(Math.random()*names_a.length);$("#name").empty().append(names_a[o]);var n="Arcane"}else if(a<26){$("#name").hasClass("common")&&$("#name").toggleClass("common"),$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane"),0==$("#name").hasClass("rare")&&$("#name").toggleClass("rare");o=Math.floor(Math.random()*names_r.length);$("#name").empty().append(names_r[o]);n="Rare"}else{$("#name").hasClass("arcane")&&$("#name").toggleClass("arcane"),$("#name").hasClass("rare")&&$("#name").toggleClass("rare"),0==$("#name").hasClass("common")&&$("#name").toggleClass("common");o=Math.floor(Math.random()*names_c.length);$("#name").empty().append(names_c[o]);n="Common"}if(e<6){$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare"),$("#surname").hasClass("common")&&$("#surname").toggleClass("common"),0==$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane");var m=Math.floor(Math.random()*surnames_a.length);$("#surname").empty().append(surnames_a[m]);var r="Arcane"}else if(e<26){$("#surname").hasClass("common")&&$("#surname").toggleClass("common"),$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane"),0==$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare");m=Math.floor(Math.random()*surnames_r.length);$("#surname").empty().append(surnames_r[m]);r="Rare"}else{$("#surname").hasClass("arcane")&&$("#surname").toggleClass("arcane"),$("#surname").hasClass("rare")&&$("#surname").toggleClass("rare"),0==$("#surname").hasClass("common")&&$("#surname").toggleClass("common");m=Math.floor(Math.random()*surnames_c.length);$("#surname").empty().append(surnames_c[m]);r="Common"}$("#genfoo").slideDown(300),"Common"==n?"Common"==r?($("#text_rarity").empty().append("Damn, just a commons dude..."),c_c.play()):"Rare"==r?($("#text_rarity").empty().append("Rare surname, not bad, but the name is common;)"),r_c.play()):($("#text_rarity").empty().append("Yeah, arcane surname! But the name still be common. Anyway, u fine, really :p"),a_c.play()):"Rare"==n?"Common"==r?($("#text_rarity").empty().append("Huh, rare name, but surname is common, thats not ideal variant"),r_c.play()):"Rare"==r?($("#text_rarity").empty().append("Good combo! Rare name and surname. Cool, really cool"),r_r.play()):($("#text_rarity").empty().append("Geez, rare name and arcane surname. Really awesome combination!"),a_r.play()):"Common"==r?($("#text_rarity").empty().append("Ohh, man, it's arcane name! Really cool, so sad that the surname is common ;("),a_c.play()):"Rare"==r?($("#text_rarity").empty().append("Wow! Name is arcane and surname is rare! Close to ideal :)"),a_r.play()):($("#text_rarity").empty().append("OMG, U FUCKING CRAZY!"),a_a.play())}));var old_audio=new Audio("audio/Soundpack/roblox.mp3");$(document).ready((function(){$("#old_open").click((function(){$(".old, .old__card").toggleClass("active"),$("body").toggleClass("lock")})),$("#old_close").click((function(){$(".old, .old__card").toggleClass("active"),$("body").toggleClass("lock"),old_audio.play()})),$(".nslist__title").click((function(){$(this).toggleClass("active").next().slideToggle(400)})),$("#old_names_button").click((function(){$("#old_number").empty().append(Math.floor(Math.random()*names.length+1))})),$("#old_surnames_button").click((function(){$("#old_number").empty().append(Math.floor(Math.random()*surnames.length+1))})),$(".nslist__marks").empty();for(var a=0;a<n;a++)a%10==0&&0!=a&&a!=n&&$("#old_names_list").append("<br>"),$("#old_names_list").append("<li>"+(a+1)+". "+names[a]+"</li>");for(a=0;a<s;a++)a%10==0&&0!=a&&a!=s&&$("#old_surnames_list").append("<br>"),$("#old_surnames_list").append("<li>"+(a+1)+". "+surnames[a]+"</li>")}));