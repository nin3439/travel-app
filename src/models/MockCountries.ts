import {
  placesItaly,
  placesFrance,
  placesRussia,
  placesChina,
  placesJapan,
  placesUsa,
  placesEgypt,
  placesUk,
  placesTurkey,
} from './Places';

const Countries: any = [
  {
    country: 'italy',
    capitalLocation: {
      coordinates: [12.496365, 41.902782],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/2560px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg',
    videoUrl: 'https://youtu.be/FlRwssZYRM0',
    currency: 'EUR',
    ISOCode: 'IT',
    localizations: [
      {
        lang: 'en',
        capital: 'Rome',
        description:
          'Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.',
        name: 'Italy',
      },
      {
        lang: 'ru',
        capital: 'Рим',
        description:
          'Ита́лия (итал. Italia [iˈtaːlja]), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [reˈpubːlika itaˈljaːna]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.',
        name: 'Италия',
      },
    ],
    placesItaly,
  },
  {
    country: 'france',
    capitalLocation: {
      coordinates: [2.35, 48.85],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=zTjnQ0XlAc4',
    currency: 'EUR',
    ISOCode: 'FR',
    localizations: [
      {
        lang: 'en',
        capital: 'Paris',
        description:
          "France officially the French Republic (French: République française) is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories. France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France, including its overseas territories, has the most time zones of any country, with a total of twelve.",
        name: 'France',
      },
      {
        lang: 'ru',
        capital: 'Париж',
        description:
          'Франция официально Французская Республика (французский язык: République française) - это страна, в основном расположенная в Западной Европе, состоящая из метрополии Франции и нескольких заморских регионов и территорий. Франция - унитарная полупрезидентская республика со столицей в Париже, крупнейшем городе страны и главном культурном и торговом центре. Франция граничит с Бельгией, Люксембургом и Германией на северо-востоке, Швейцарией, Монако и Италией на востоке, Андоррой и Испанией на юге, а также с Нидерландами, Суринамом и Бразилией на американском континенте. Заморские территории включают Французскую Гвиану в Южной Америке и несколько островов в Атлантическом, Тихом и Индийском океанах. Во Франции, включая ее заморские территории, больше всего часовых поясов по сравнению с любой страной, всего их двенадцать.',
        name: 'Франция',
      },
    ],
    placesFrance,
  },
  {
    country: 'russia',
    capitalLocation: {
      coordinates: [37.616667, 55.75],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Moscow_July_2011-16.jpg/1920px-Moscow_July_2011-16.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=YrNxPr4PKQo',
    currency: 'RUB',
    ISOCode: 'RU',
    localizations: [
      {
        lang: 'en',
        capital: 'Moskow',
        description:
          "Russia (Russian: Россия, Rossiya, Russian pronunciation: [rɐˈsʲijə]), or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earth's inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe.",
        name: 'Russia',
      },
      {
        lang: 'ru',
        capital: 'Москва',
        description:
          'Россия или Российская Федерация - это трансконтинентальная страна, охватывающая Восточную Европу и Северную Азию. Это самая большая страна в мире; покрывая более 17 125 191 квадратных километров (6 612 073 квадратных миль), состоящих из более чем одной восьмой населенной суши Земли, простирающейся до одиннадцати часовых поясов и граничащих с шестнадцатью суверенными странами. Население России составляет 146,7 миллиона человек; и является девятой по численности населения страной, а также самой густонаселенной страной в Европе.',
        name: 'Россия',
      },
    ],
    placesRussia,
  },
  {
    country: 'china',
    capitalLocation: {
      coordinates: [116.383333, 39.916667],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/2560px-Pudong_Shanghai_November_2017_panorama.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tBNkeXmq4IQ',
    currency: 'CNY',
    ISOCode: 'CN',
    localizations: [
      {
        lang: 'en',
        capital: 'Beijing',
        description:
          "China, is a country in East Asia. It is the world's most populous country, with a population of around 1.4 billion. China cover approximately 9.6 million square kilometers (3.7 million mi2), it is the world's third or fourth-largest country by area.The country is officially divided into 23 provinces, five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and the special administrative regions of Hong Kong and Macau.",
        name: 'China',
      },
      {
        lang: 'ru',
        capital: 'Пекин',
        description:
          'Китай - страна в Восточной Азии. Это самая густонаселенная страна в мире с населением около 1,4 миллиарда человек. Площадь Китая составляет около 9,6 миллиона квадратных километров (3,7 миллиона квадратных километров), это третья или четвертая по величине страна в мире по площади. Страна официально разделена на 23 провинции, пять автономных областей и четыре муниципальных округа под прямым контролем (Пекин, Тяньцзинь, Шанхай. , и Чунцин), а также специальные административные районы Гонконг и Макао.',
        name: 'Китай',
      },
    ],
    placesChina,
  },
  {
    country: 'japan',
    capitalLocation: {
      coordinates: [139.766667, 35.683333],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Itsukushima_Gate.jpg/440px-Itsukushima_Gate.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=CxuiFNYnEr4',
    currency: 'JPY',
    ISOCode: 'JP',
    localizations: [
      {
        lang: 'en',
        capital: 'Tokyo',
        description:
          "Japan (Japanese: 日本, Nippon) is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Japan is the eleventh-most populous country in the world, as well as one of the most densely populated and urbanized. About three-fourths of the country's terrain is mountainous, concentrating its population of 125.62 million on narrow coastal plains. Japan is divided into 47 administrative prefectures and eight traditional regions. The Greater Tokyo Area is the most populous metropolitan area in the world, with more than 37.4 million residents.",
        name: 'Japan',
      },
      {
        lang: 'ru',
        capital: 'Токио',
        description:
          'Япония (яп. 日本, Nippon) - островное государство в Восточной Азии, расположенное в северо-западной части Тихого океана. На западе он омывается Японским морем и простирается от Охотского моря на севере до Восточно-Китайского моря и Тайваня на юге. Япония - одиннадцатая по численности населения страна в мире, а также одна из самых густонаселенных и урбанизированных. Около трех четвертей территории страны занято горами, а население в 125,62 миллиона человек сосредоточено на узких прибрежных равнинах. Япония разделена на 47 административных префектур и восемь традиционных регионов. Район Большого Токио - самый густонаселенный мегаполис в мире с населением более 37,4 миллиона человек.',
        name: 'Япония',
      },
    ],
    placesJapan,
  },
  {
    country: 'usa',
    capitalLocation: {
      coordinates: [-77.0147, 38.9101],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/US_Capitol_west_side.JPG/2560px-US_Capitol_west_side.JPG',
    videoUrl: 'https://www.youtube.com/watch?v=b7FNvq11CEw',
    currency: 'USD',
    ISOCode: 'US',
    localizations: [
      {
        lang: 'en',
        capital: 'Washington, D.C.',
        description:
          "The United States of America (USA) is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions. The United States is a highly developed country, and continuously ranks high in measures of socioeconomic performance. It accounts for approximately a quarter of global GDP and is the world's largest economy by GDP at market exchange rates. By value, the United States is the world's largest importer and the second-largest exporter of goods. Making up more than a third of global military spending, it is the foremost military power in the world and is a leading political, cultural, and scientific force internationally.",
        name: 'United States of America',
      },
      {
        lang: 'ru',
        capital: 'Вашингтон',
        description:
          'Соединенные Штаты Америки (США) - это страна, в основном расположенная в Северной Америке. Он состоит из 50 штатов, федерального округа, пяти основных самоуправляющихся территорий, 326 индейских резерваций и некоторых второстепенных владений. Соединенные Штаты - высокоразвитая страна, постоянно занимающая высокие места в рейтингах социально-экономических показателей. На ее долю приходится примерно четверть мирового ВВП, и она является крупнейшей экономикой мира по ВВП по рыночным обменным курсам. По стоимости Соединенные Штаты являются крупнейшим в мире импортером и вторым по величине экспортером товаров. На ее долю приходится более трети мировых военных расходов, она является ведущей военной державой в мире и ведущей политической, культурной и научной силой на международном уровне.',
        name: 'Соединенные Штаты Америки',
      },
    ],
    placesUsa,
  },
  {
    country: 'egypt',
    capitalLocation: {
      coordinates: [31.216667, 30.033333],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/View_from_Cairo_Tower_31march2007.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=rsv4drcgHys',
    currency: 'EGP',
    ISOCode: 'EG',
    localizations: [
      {
        lang: 'en',
        capital: 'Cairo',
        description:
          'Egypt (/ˈiːdʒɪpt/ (About this soundlisten) EE-jipt; Arabic: مِصر‎ Miṣr), officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip (Palestine) and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the Red Sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt. Egypt has one of the longest histories of any country, tracing its heritage along the Nile Delta back to the 6th–4th millennia BCE. Considered a cradle of civilisation, Ancient Egypt saw some of the earliest developments of writing, agriculture, urbanisation, organised religion and central government.',
        name: 'Egypt',
      },
      {
        lang: 'ru',
        capital: 'Каир',
        description:
          'Египет (/ ˈiːdʒɪpt / (Об этом звуковом прослушивании) EE-jipt; арабский: مِصر Miṣr), официально Арабская Республика Египет, является трансконтинентальной страной, охватывающей северо-восточный угол Африки и юго-западный угол Азии сухопутным мостом, образованным Синайский полуостров. Египет - средиземноморская страна, граничащая с сектором Газа (Палестина) и Израилем на северо-востоке, заливом Акаба и Красным морем на востоке, Суданом на юге и Ливией на западе. Через залив Акаба находится Иордания, через Красное море - Саудовская Аравия, а через Средиземное море - Греция, Турция и Кипр, хотя ни одна из них не имеет сухопутной границы с Египтом. У Египта одна из самых длинных историй среди всех стран, его наследие вдоль дельты Нила восходит к VI – IV тысячелетиям до нашей эры. Считающийся колыбелью цивилизации, Древний Египет стал свидетелем одного из самых ранних проявлений письменности, сельского хозяйства, урбанизации, организованной религии и центрального правительства.',
        name: 'Египет',
      },
    ],
    placesEgypt,
  },
  {
    country: 'uk',
    capitalLocation: {
      coordinates: [-0.116667, 51.5],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/2880px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wSHXd-K-jIk',
    currency: 'GBP',
    ISOCode: 'GB',
    localizations: [
      {
        lang: 'en',
        capital: 'London',
        description:
          "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom is a sovereign country in north-western Europe, off the north-­western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-­eastern part of the island of Ireland, and many smaller islands within the British Isles. The United Kingdom is a unitary parliamentary democracy and constitutional monarchy. The United Kingdom's capital is London, a global city and financial centre with an urban area population of 10.3 million. The United Kingdom consists of four countries: England, Scotland, Wales and Northern Ireland.",
        name: 'United Kingdom',
      },
      {
        lang: 'ru',
        capital: 'Лондон',
        description:
          'Соединенное Королевство Великобритании и Северной Ирландии, широко известное как Соединенное Королевство, является суверенным государством в северо-западной Европе, у северо-западного побережья континентальной Европы. Соединенное Королевство включает остров Великобритания, северо-восточную часть острова Ирландия и множество небольших островов в пределах Британских островов. Соединенное Королевство - это унитарная парламентская демократия и конституционная монархия. Столица Соединенного Королевства - Лондон, глобальный город и финансовый центр с населением 10,3 миллиона человек. Соединенное Королевство состоит из четырех стран: Англии, Шотландии, Уэльса и Северной Ирландии.',
        name: 'Великобритания',
      },
    ],
    placesUk,
  },
  {
    country: 'turkey',
    capitalLocation: {
      coordinates: [35, 39],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg/1920px-Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg',

    videoUrl: 'https://www.youtube.com/watch?v=r8rZQKXijb8',
    currency: 'TRY',
    ISOCode: 'TR',
    localizations: [
      {
        lang: 'en',
        capital: 'Ankara',
        description:
          'Turkey (Turkish: Türkiye [ˈtyɾcije]), is a transcontinental country straddling Southeastern Europe and Western Asia. It is bordered on its northwest by Greece and Bulgaria; north by the Black Sea; northeast by Georgia; east by Armenia, Azerbaijan, and Iran; southeast by Iraq; south by Syria and the Mediterranean Sea; and west by the Aegean Sea. Turkey is a regional power and a newly industrialized country—ranking very high in the Human Development Index; with a geopolitically strategic location.',
        name: 'Turkey',
      },
      {
        lang: 'ru',
        capital: 'Анкара',
        description:
          'Турция (турецкий: Türkiye [ˈtyɾcije]) - трансконтинентальная страна, расположенная между Юго-Восточной Европой и Западной Азией. На северо-западе он граничит с Грецией и Болгарией; к северу от Черного моря; северо-восток Грузии; на восток - Армения, Азербайджан и Иран; юго-восток Ираком; юг - Сирия и Средиземное море; и к западу от Эгейского моря. Турция - региональная держава и новая индустриальная страна, занимающая очень высокие позиции в Индексе человеческого развития; с геополитически стратегическим расположением.',
        name: 'Турция',
      },
    ],
    placesTurkey,
  },
];

export default Countries;
