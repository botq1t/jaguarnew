let names = [
		"Йогра",
		"Ягра",
		"Ягер",
		"Ягор",
		"Ягуар",
		"Егор",
		"Гоша",
		"Грыша",
		"Джордж",
		"Джорджинио",
		"Швагер",
		"Крюгер",
		"Стрингер",
		"Игорь",
		"Квакер",
		"Йогурт",
		"Егерь",
		"Ядгар",
		"Электроегор",
		"Шлёпа",
		"Шлёндра",
		"Ягр",
		"Шляпа",
		"Шлёпок",
		"Яга",
		"Шлягер",
		"Грыжа",
		"Ярик",
		"Егермейстер",
		"Егорилла",
		"Грошык",
		"Горе",
		"Швабра",
		"Ягрон",
		"Ятаган",
		"Янычар",
		"Ярило",
		"Янцзы",
		"Ярополк",
		"Флюгер",
		"Фляга",
		"Ягрик",
		"Фликер",
		"Юнгер",
		"Егурт",
		"Юнга",
		"Ягурец",
		"Яруллин",
		"Шиндр",
		"Мындр",
		"Ягрус",
		"Егорище",
		"Егорёк",
		"Рыгор",
		"Грека",
		"Ярулинн",
		"Гренка",
		"Гангрена",
		"Гроб",
		"Тигр",
		"Гогер",
		"Юнкер",
		"Янор",
		"Жокер",
		"Жорик",
		"Жора",
		"Жароха",
		"Жмых",
		"Жерех",
		"Егошка",
		"Геша",
		"Егорик",
		"Егорка",
		"Кагор",
		"Кент",
		"Мотор",
		"Крекер",
		"Грильяж",
		"Яромир",
		"Ёринобу",
		"Ёжик",
		"Жэужык",
		"Жужик",
		"Живчик",
		"Жывёла",
		"Жоржик",
		"Хоккей",
		"Какей",
		"Жрец",
		"Жокей",
		"Егоза",
		"Гашиш",
		"Гоголь",
		"Гегель",
		"Гитлер",
		"Еггер",
		"Григор",
		"Грэг",
		"Кракен",
		"Гемор",
		"Гомер",
		"Голем",
		"Горгулья",
		"Гомункул",
		"Ярослав",
		"Копырь",
		"Упырь",
		"Крипер",
];
let names_c = [
	"Гашиш",
	"Гегель",
	"Геша",
	"Гитлер",
	"Гоголь",
	"Голем",
	"Гомер",
	"Гомункул",
	"Горгулья",
	"Грека",
	"Гренка",
	"Григор",
	"Грильяж",
	"Грэг",
	"Еггер",
	"Егорёк",
	"Егорик",
	"Егорка",
	"Егошка",
	"Ёжик",
	"Ёринобу",
	"Жароха",
	"Жерех",
	"Жмых",
	"Жокей",
	"Жокер",
	"Жора",
	"Жоржик",
	"Жорик",
	"Жрец",
	"Жужик",
	"Жывёла",
	"Йогра",
	"Кагор",
	"Какей",
	"Кент",
	"Копырь",
	"Кракен",
	"Крекер",
	"Мотор",
	"Рыгор",
	"Упырь",
	"Фликер",
	"Флюгер",
	"Фляга",
	"Хоккей",
	"Юнга",
	"Юнгер",
	"Юнкер",
	"Ягрик",
	"Ягрус",
	"Ягурец",
	"Янцзы",
	"Янычар",
	"Ярило",
	"Яромир",
	"Ярополк",
	"Ярослав",
	"Ярулинн",
	"Яруллин",
	"Крипер",
];
let names_a = [
	"Гоша",
	"Грыжа",
	"Грыша",
	"Джорджинио",
	"Егор",
	"Йогурт",
	"Крюгер",
	"Тигр",
	"Швабра",
	"Швагер",
	"Шлёндра",
	"Шлёпа",
	"Шлягер",
	"Шляпа",
	"Электроегор",
	"Ягер",
	"Ягор",
	"Ягуар",
	"Ядгар",
];
let names_r = [
	"Гангрена",
	"Гемор",
	"Гогер",
	"Горе",
	"Гроб",
	"Грошык",
	"Джордж",
	"Егермейстер",
	"Егерь",
	"Егоза",
	"Егорилла",
	"Егорище",
	"Егурт",
	"Живчик",
	"Жэужык",
	"Игорь",
	"Квакер",
	"Мындр",
	"Стрингер",
	"Шиндр",
	"Шлёпок",
	"Яга",
	"Ягр",
	"Ягра",
	"Ягрон",
	"Янор",
	"Ярик",
	"Ятаган",
];
// Common - 75%
// Arcane - 5%
// Rare - 20%
// ==============================
var n=names.length;
var rn=Math.floor(Math.random()*(n));
console.log("Name: "+n, rn, names[n-1]);
// Sorting
let namessort = [];
namessort = names.slice();
namessort.sort();
let j = 5;
