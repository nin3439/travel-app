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
    id: 'cd16166b-f20d-4e37-9513-021e97cfdf96',
    name: 'Italy',
    capitalID: 3169070,
    capitalLocation: {
      coordinates: [41.902782, 12.496365],
      type: 'Point',
    },
    imageUrl:
      'https://res-2.cloudinary.com/fieldfisher/image/upload/c_lfill,dpr_2,g_auto,h_700,w_1240/f_auto,q_auto/v1/locations/city%20images/italy_918822258_l7ctri',
    videoUrl: 'https://youtu.be/FlRwssZYRM0',
    currency: 'EUR',
    ISOCode: 'IT',
    localizations: [
      {
        lang: 'en',
        capital: 'Rome',
        description:
          'Italy, officially the Italian Republic, is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.',
        name: 'Italy',
      },
      {
        lang: 'ru',
        capital: 'Рим',
        description:
          'Ита́лия, официальное название — Италья́нская Респу́блика, — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны.  Граничит с Францией на северо-западе, Швейцарией и Австрией — на севере, Словенией — на северо-востоке.  Внутри территории Италии находятся два государства-анклава: государство Сан-Марино и расположенное внутри территории Рима ассоциированное с Италией государство Ватикан, с каждым из которых Италия имеет внутреннюю границу протяжённостью соответственно 39 км и 3,2 км.  Занимает Апеннинский полуостров, крайний северо-запад Балканского полуострова, Паданскую равнину, южные склоны Альп, острова Сицилия, Сардиния и ряд мелких островов.  На территории Италии находится 55 памятников Всемирного наследия ЮНЕСКО — Италия разделяет с Китаем первое место по их количеству.',
        name: 'Италия',
      },
      {
        lang: 'be',
        capital: 'Рым',
        description:
          "Італія, афіцыйная назва - Італьянская Рэспубліка, - дзяржава ў Паўднёвай Еўропе, у цэнтры Міжземнамор'я. Уваходзіць у Еўрасаюз і НАТА з моманту іх стварэння, з'яўляецца трэцяй па велічыні эканомікай еўразоны. Мяжуе з Францыяй на паўночным захадзе, Швейцарыяй і Аўстрыяй - на поўначы, Славеніяй - на паўночным усходзе. Ўнутры тэрыторыі Італіі знаходзяцца дзве дзяржавы-анклава: дзяржава Сан-Марына і размешчана ўнутры тэрыторыі Рыма асацыяванае з Італіяй дзяржава Ватыкан, з кожным з якіх Італія мае ўнутраную мяжу працягласцю адпаведна 39 км і 3,2 км. Займае Апенінскі паўвостраў, крайні паўночны захад Балканскага паўвострава, Паданская раўніну, паўднёвыя схілы Альп, выспы Сіцылія, Сардзінія і шэраг дробных астравоў. На тэрыторыі Італіі знаходзіцца 55 помнікаў Сусветнай спадчыны ЮНЕСКА - Італія падзяляе з Кітаем першае месца па іх колькасці.",
        name: 'Італія',
      },
    ],
    countryPlaces: placesItaly,
  },
  {
    id: 'fcc32f88-bde8-41cc-89e7-4174cd7e8ea9',
    name: 'France',
    capitalID: 2968815,
    capitalLocation: {
      coordinates: [48.85, 2.35],
      type: 'Point',
    },
    imageUrl:
      'https://img3.goodfon.ru/wallpaper/nbig/8/ae/la-tour-eiffel-eiffel-tower-2634.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=zTjnQ0XlAc4',
    currency: 'EUR',
    ISOCode: 'FR',
    localizations: [
      {
        lang: 'en',
        capital: 'Paris',
        description:
          "France - officially the French Republic is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories. France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France, including its overseas territories, has the most time zones of any country, with a total of twelve.",
        name: 'France',
      },
      {
        lang: 'ru',
        capital: 'Париж',
        description:
          'Франция - официально Французская Республика - это страна, в основном расположенная в Западной Европе, состоящая из метрополии Франции и нескольких заморских регионов и территорий. Франция - унитарная полупрезидентская республика со столицей в Париже, крупнейшем городе страны и главном культурном и торговом центре. Франция граничит с Бельгией, Люксембургом и Германией на северо-востоке, Швейцарией, Монако и Италией на востоке, Андоррой и Испанией на юге, а также с Нидерландами, Суринамом и Бразилией на американском континенте. Заморские территории включают Французскую Гвиану в Южной Америке и несколько островов в Атлантическом, Тихом и Индийском океанах. Во Франции, включая ее заморские территории, больше всего часовых поясов по сравнению с любой страной, всего их двенадцать.',
        name: 'Франция',
      },
      {
        lang: 'be',
        capital: 'Парыж',
        description:
          'Францыя - афіцыйна Французская Рэспубліка - гэта краіна, у асноўным размешчаная ў Заходняй Еўропе, якая складаецца з метраполіі Францыі і некалькіх заморскіх рэгіёнаў і тэрыторый. Францыя - унітарным полупрезидентская рэспубліка са сталіцай у Парыжы, найбуйнейшым горадзе краіны і галоўным культурным і гандлёвым цэнтры. Францыя мяжуе з Бельгіяй, Люксембургам і Германіяй на паўночным усходзе, Швейцарыяй, Манака і Італіяй на ўсходзе, Андорай і Іспаніяй на поўдні, а таксама з Нідэрландамі, Сурынамам і Бразіліяй на амерыканскім кантыненце. Заморскія тэрыторыі ўключаюць Французскую Гвіяну ў Паўднёвай Амерыцы і некалькі астравоў у Атлантычным, Ціхім і Індыйскім акіянах. У Францыі, уключаючы яе заморскія тэрыторыі, больш за ўсё гадзінных паясоў у параўнанні з любой краінай, усяго іх дванаццаць.',
        name: 'Францыя',
      },
    ],
    countryPlaces: placesFrance,
  },
  {
    id: '6d4c7a0d-8bd0-4f43-989e-55c253e52ef8',
    name: 'Russia',
    capitalID: 524894,
    capitalLocation: {
      coordinates: [55.75, 37.616667],
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
          "Russia or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earth's inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe.",
        name: 'Russia',
      },
      {
        lang: 'ru',
        capital: 'Москва',
        description:
          'Россия или Российская Федерация - это трансконтинентальная страна, охватывающая Восточную Европу и Северную Азию. Это самая большая страна в мире; покрывая более 17 125 191 квадратных километров (6 612 073 квадратных миль), состоящих из более чем одной восьмой населенной суши Земли, простирающейся до одиннадцати часовых поясов и граничащих с шестнадцатью суверенными странами. Население России составляет 146,7 миллиона человек; и является девятой по численности населения страной, а также самой густонаселенной страной в Европе.',
        name: 'Россия',
      },
      {
        lang: 'be',
        capital: 'Масква',
        description:
          "Расея ці Расійская Федэрацыя - гэта Транскантынентальная краіна, якая ахоплівае Усходнюю Еўропу і Паўночную Азію. Гэта самая вялікая краіна ў свеце; пакрываючы больш за 17 125 191 квадратных кіламетраў (6 612 073 квадратных міль), якія складаюцца з больш чым адной восьмай населенай сушы Зямлі, прасьціраецца да адзінаццаці гадзінных паясоў і мяжуюць з шаснаццаццю суверэннымі краінамі. Насельніцтва Расеі складае 146,7 мільёна чалавек; і з'яўляецца дзявятай па колькасці насельніцтва краінай, а таксама самай густанаселенай краінай у Еўропе.",
        name: 'Расея',
      },
    ],
    countryPlaces: placesRussia,
  },
  {
    id: '9f14a0d1-1649-481b-9a10-f34c8c14ec65',
    name: 'China',
    capitalID: 1816670,
    capitalLocation: {
      coordinates: [39.916667, 116.383333],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling.jpg',
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
      {
        lang: 'be',
        capital: 'Пекін',
        description:
          'Кітай - краіна ва Усходняй Азіі. Гэта самая густанаселеная краіна ў свеце з насельніцтвам каля 1,4 мільярда чалавек. Плошчу Кітая складае каля 9,6 мільёна квадратных кіламетраў (3,7 мільёна квадратных кіламетраў), гэта трэцяя ці чацвёртая па велічыні краіна ў свеце па плошчы. Краіна афіцыйна падзелена на 23 правінцыі, пяць аўтаномных абласцей і чатыры муніцыпальных акругі пад прамым кантролем (Пекін, Цяньцзінь, Шанхай., І Чунцын), а таксама спецыяльныя адміністрацыйныя раёны Ганконг і Макао.',
        name: 'Кітай',
      },
    ],
    countryPlaces: placesChina,
  },
  {
    id: 'c591d9ef-0b4e-41df-b8cd-4098784f107a',
    name: 'Japan',
    capitalID: 1850147,
    capitalLocation: {
      coordinates: [35.683333, 139.766667],
      type: 'Point',
    },
    imageUrl:
      'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=CxuiFNYnEr4',
    currency: 'JPY',
    ISOCode: 'JP',
    localizations: [
      {
        lang: 'en',
        capital: 'Tokyo',
        description:
          "Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Japan is the eleventh-most populous country in the world, as well as one of the most densely populated and urbanized. About three-fourths of the country's terrain is mountainous, concentrating its population of 125.62 million on narrow coastal plains. Japan is divided into 47 administrative prefectures and eight traditional regions. The Greater Tokyo Area is the most populous metropolitan area in the world, with more than 37.4 million residents.",
        name: 'Japan',
      },
      {
        lang: 'ru',
        capital: 'Токио',
        description:
          'Япония - островное государство в Восточной Азии, расположенное в северо-западной части Тихого океана. На западе он омывается Японским морем и простирается от Охотского моря на севере до Восточно-Китайского моря и Тайваня на юге. Япония - одиннадцатая по численности населения страна в мире, а также одна из самых густонаселенных и урбанизированных. Около трех четвертей территории страны занято горами, а население в 125,62 миллиона человек сосредоточено на узких прибрежных равнинах. Япония разделена на 47 административных префектур и восемь традиционных регионов. Район Большого Токио - самый густонаселенный мегаполис в мире с населением более 37,4 миллиона человек.',
        name: 'Япония',
      },
      {
        lang: 'be',
        capital: 'Токiо',
        description:
          'Японія - астраўная дзяржава ва Усходняй Азіі, размешчанае ў паўночна-заходняй частцы Ціхага акіяна. На захадзе ён абмываецца Японскім морам і распасціраецца ад Ахоцкага мора на поўначы да Усходне-Кітайскага мора і Тайваня на поўдні. Японія - адзінаццатая па колькасці насельніцтва краіна ў свеце, а таксама адна з самых густанаселеных і урбанізаваных. Каля трох чвэрцяў тэрыторыі краіны занята гарамі, а насельніцтва ў 125,62 мільёна чалавек засяроджана на вузкіх прыбярэжных раўнінах. Японія падзелена на 47 адміністрацыйных прэфектур і восем традыцыйных рэгіёнаў. Раён Вялікага Токіо - самы густанаселены мегаполіс ў свеце з насельніцтвам больш 37,4 мільёна чалавек.',
        name: 'Японія',
      },
    ],
    countryPlaces: placesJapan,
  },
  {
    id: 'bccdb952-9440-4021-ad57-b8bd499f4e64',
    name: 'USA',
    capitalID: 4140963,
    capitalLocation: {
      coordinates: [38.9101, -77.0147],
      type: 'Point',
    },
    imageUrl:
      'https://i0.wp.com/www.agoda.com/wp-content/uploads/2020/07/Statue-of-Liberty-things-to-do-in-new-york-USA.jpg?ssl=1',
    videoUrl: 'https://www.youtube.com/watch?v=b7FNvq11CEw',
    currency: 'USD',
    ISOCode: 'US',
    localizations: [
      {
        lang: 'en',
        capital: 'Washington',
        description:
          "The United States of America (USA) is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions. The United States is a highly developed country, and continuously ranks high in measures of socioeconomic performance. It accounts for approximately a quarter of global GDP and is the world's largest economy by GDP at market exchange rates. By value, the United States is the world's largest importer and the second-largest exporter of goods. Making up more than a third of global military spending, it is the foremost military power in the world and is a leading political, cultural, and scientific force internationally.",
        name: 'USA',
      },
      {
        lang: 'ru',
        capital: 'Вашингтон',
        description:
          'Соединенные Штаты Америки (США) - это страна, в основном расположенная в Северной Америке. Он состоит из 50 штатов, федерального округа, пяти основных самоуправляющихся территорий, 326 индейских резерваций и некоторых второстепенных владений. Соединенные Штаты - высокоразвитая страна, постоянно занимающая высокие места в рейтингах социально-экономических показателей. На ее долю приходится примерно четверть мирового ВВП, и она является крупнейшей экономикой мира по ВВП по рыночным обменным курсам. По стоимости Соединенные Штаты являются крупнейшим в мире импортером и вторым по величине экспортером товаров. На ее долю приходится более трети мировых военных расходов, она является ведущей военной державой в мире и ведущей политической, культурной и научной силой на международном уровне.',
        name: 'СШA',
      },
      {
        lang: 'be',
        capital: 'Вашынгтон',
        description:
          "Злучаныя Штаты Амерыкі (ЗША) - гэта краіна, у асноўным размешчаная ў Паўночнай Амерыцы. Ён складаецца з 50 штатаў, федэральнай акругі, пяці асноўных самакіравальнай тэрыторый, 326 індзейскіх рэзервацый і некаторых другарадных уладанняў. Злучаныя Штаты - высокаразвітая краіна, пастаянна якая займае высокія месцы ў рэйтынгах сацыяльна-эканамічных паказчыкаў. На яе долю прыпадае прыкладна чвэрць сусветнага ВУП, і яна з'яўляецца найбуйнейшай эканомікай свету па ВУП па рынкавых абменных курсах. Па кошту Злучаныя Штаты з'яўляюцца найбуйнейшым у свеце імпарцёрам і другім па велічыні экспарцёрам тавараў. На яе долю прыпадае больш за траціну сусветных ваенных выдаткаў, яна з'яўляецца вядучай ваеннай дзяржавай у свеце і вядучай палітычнай, культурнай і навуковай сілай на міжнародным узроўні.",
        name: 'ЗШA',
      },
    ],
    countryPlaces: placesUsa,
  },
  {
    id: '2cc12f75-d781-4d4f-ab13-c21ee5dd5a8e',
    name: 'Egypt',
    capitalID: 360630,
    capitalLocation: {
      coordinates: [30.033333, 31.216667],
      type: 'Point',
    },
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=rsv4drcgHys',
    currency: 'EGP',
    ISOCode: 'EG',
    localizations: [
      {
        lang: 'en',
        capital: 'Cairo',
        description:
          'Egypt, officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip (Palestine) and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the Red Sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt. Egypt has one of the longest histories of any country, tracing its heritage along the Nile Delta back to the 6th–4th millennia BCE. Considered a cradle of civilisation, Ancient Egypt saw some of the earliest developments of writing, agriculture, urbanisation, organised religion and central government.',
        name: 'Egypt',
      },
      {
        lang: 'ru',
        capital: 'Каир',
        description:
          'Египет, официально Арабская Республика Египет, является трансконтинентальной страной, охватывающей северо-восточный угол Африки и юго-западный угол Азии сухопутным мостом, образованным Синайский полуостров. Египет - средиземноморская страна, граничащая с сектором Газа (Палестина) и Израилем на северо-востоке, заливом Акаба и Красным морем на востоке, Суданом на юге и Ливией на западе. Через залив Акаба находится Иордания, через Красное море - Саудовская Аравия, а через Средиземное море - Греция, Турция и Кипр, хотя ни одна из них не имеет сухопутной границы с Египтом. У Египта одна из самых длинных историй среди всех стран, его наследие вдоль дельты Нила восходит к VI – IV тысячелетиям до нашей эры. Считающийся колыбелью цивилизации, Древний Египет стал свидетелем одного из самых ранних проявлений письменности, сельского хозяйства, урбанизации, организованной религии и центрального правительства.',
        name: 'Египет',
      },
      {
        lang: 'be',
        capital: 'Каiр',
        description:
          "Егіпет, афіцыйна Арабская Рэспубліка Егіпет, з'яўляецца транскантынентальнай краінай, якая ахоплівае паўночна-ўсходні кут Афрыкі і паўднёва-заходні кут Азіі сухапутным мостам, адукаваным Сінайскі паўвостраў. Егіпет - міжземнаморская краіна, якая мяжуе з сектарам Газа (Палестына) і Ізраілем на паўночным усходзе, залівам Акаба і Чырвоным морам на ўсходзе, Суданам на поўдні і Лівіяй на захадзе. Праз заліў Акаба знаходзіцца Іарданія, праз Чырвонае мора - Сірыя, а праз Міжземнае мора - Грэцыя, Турцыя і Кіпр, хоць ні адна з іх не мае сухапутнай мяжы з Егіптам. У Егіпта адна з самых доўгіх гісторый сярод усіх краін, яго спадчына ўздоўж дэльты Ніла ўзыходзіць да VI - IV тысячагоддзя да нашай эры. Які лічыцца калыскай цывілізацыі, Старажытны Егіпет стаў сведкам аднаго з самых ранніх праяў пісьменства, сельскай гаспадаркі, урбанізацыі, арганізаванай рэлігіі і цэнтральнага ўрада.",
        name: 'Егіпет',
      },
    ],
    countryPlaces: placesEgypt,
  },
  {
    id: '21f7b9ce-7812-46e4-ac76-ed5c40a487c8',
    name: 'Great Britain',
    capitalID: 2643743,
    capitalLocation: {
      coordinates: [51.5, -0.116667],
      type: 'Point',
    },
    imageUrl: 'https://eskipaper.com/images/big-ben-5.jpg',
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
      {
        lang: 'be',
        capital: 'Лондaн',
        description:
          "Злучанае Каралеўства Вялікабрытаніі і Паўночнай Ірландыі, шырока вядомае як Вялікабрытанія, з'яўляецца суверэннай дзяржавай у паўночна-заходняй Еўропе, у паўночна-заходняга ўзбярэжжа кантынентальнай Еўропы. Вялікабрытанія ўключае востраў Вялікабрытанія, паўночна-ўсходнюю частку вострава Ірландыя і мноства невялікіх астравоў у межах Брытанскіх выспаў. Вялікабрытанія - гэта унітарным парламенцкая дэмакратыя і канстытуцыйная манархія. Сталіца Злучанага Каралеўства - Лондан, глабальны горад і фінансавы цэнтр з насельніцтвам 10,3 мільёна чалавек. Злучанае Каралеўства складаецца з чатырох краін: Англіі, Шатландыі, Уэльса і Паўночнай Ірландыі.",
        name: 'Вялікабрытанія',
      },
    ],
    countryPlaces: placesUk,
  },
  {
    id: '365f1998-55ff-44b2-b19b-74ff2ae5bf22',
    name: 'Turkey',
    capitalID: 323784,
    capitalLocation: {
      coordinates: [39, 35],
      type: 'Point',
    },
    imageUrl: 'https://i.ytimg.com/vi/sKgwpCrdGiU/maxresdefault.jpg',

    videoUrl: 'https://www.youtube.com/watch?v=r8rZQKXijb8',
    currency: 'TRY',
    ISOCode: 'TR',
    localizations: [
      {
        lang: 'en',
        capital: 'Ankara',
        description:
          'Turkey, is a transcontinental country straddling Southeastern Europe and Western Asia. It is bordered on its northwest by Greece and Bulgaria; north by the Black Sea; northeast by Georgia; east by Armenia, Azerbaijan, and Iran; southeast by Iraq; south by Syria and the Mediterranean Sea; and west by the Aegean Sea. Turkey is a regional power and a newly industrialized country—ranking very high in the Human Development Index; with a geopolitically strategic location.',
        name: 'Turkey',
      },
      {
        lang: 'ru',
        capital: 'Анкара',
        description:
          'Турция - трансконтинентальная страна, расположенная между Юго-Восточной Европой и Западной Азией. На северо-западе он граничит с Грецией и Болгарией; к северу от Черного моря; северо-восток Грузии; на восток - Армения, Азербайджан и Иран; юго-восток Ираком; юг - Сирия и Средиземное море; и к западу от Эгейского моря. Турция - региональная держава и новая индустриальная страна, занимающая очень высокие позиции в Индексе человеческого развития; с геополитически стратегическим расположением.',
        name: 'Турция',
      },
      {
        lang: 'be',
        capital: 'Анкара',
        description:
          'Турцыя - Транскантынентальная краіна, размешчаная паміж Паўднёва-Усходняй Еўропай і Заходняй Азіяй. На паўночным захадзе ён мяжуе з Грэцыяй і Балгарыяй; на поўнач ад Чорнага мора; паўночны ўсход Грузіі; на ўсход - Арменія, Азербайджан і Іран; паўднёвы ўсход Іракам; поўдзень - Сірыя і Міжземнае мора; і на захад ад Эгейскага мора. Турцыя - рэгіянальная дзяржава і новая індустрыяльная краіна, якая займае вельмі высокія пазіцыі ў Індэксе чалавечага развіцця; з геапалітычна стратэгічным размяшчэннем.',
        name: 'Турцыя',
      },
    ],
    countryPlaces: placesTurkey,
  },
];

export default Countries;
