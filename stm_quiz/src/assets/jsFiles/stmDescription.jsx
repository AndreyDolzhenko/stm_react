const arrProductSTM = [
    {
      brand: `ОФИСМАГ`,
      description:
        "– Это качественные офисные принадлежности во многих товарных категориях: бумага для оргтехники; блокноты и записные книжки; папки и архивные короба для документов; ручки и многое другое.",
      price: "Средний, Средний +",
      imgShow: "./img/Ofismag.jpg",
      status: "false",
    },
    {
      brand: "BRAUBERG",
      description:
        "– Бренд с более чем 20 летней историей, известный внимательным отношением к качеству и адекватными ценами. Тысячи товаров в различных товарных группах:<br>- товары для офиса;<br>- товары для школы;:<br>- товары для офиса;<br>- товары для школы;",
      price: "Средний, Средний +",
      imgShow: "./img/Brauberg.jpg",
      status: "false",
    },
    {
      brand: "BRAUBERG ART",
      description: "- Товары для художников.",
      price: "Средний, Средний +",
      imgShow: "./img/Brauberg_art.jpg",
      status: "false",
    },
  
    {
      brand: "BRAUBERG KIDS",
      description:
        "– Товары для детского развития и творчества: ранцы, краски, пластелин, фломастеры, магнитные конструкторы и многое другое. ",
      price: "Средний, Средний +",
      imgShow: "./img/Brauberg_kids.jpg",
      status: "false",
    },
    {
      brand: "BRAUBERG HOBBY",
      description:
        "– Это материалы, инструменты и аксессуары для рукоделия и творчества: глина для лепки, акриловые краски. Товары бренда - ваш спутник в мире увлечений.",
      price: "Средний, Средний +",
      imgShow: "./img/Brauberg_hobby.jpg",
      status: "false",
    },
    {
      brand: "STAFF",
      description:
        "– Это торговая марка, которая объединяет в себе бюджетные канцелярские товары. Основной принцип бренда - разумно, достаточно, ничего лишнего.",
      price: "Низкий",
      imgShow: "./img/Staff.jpg",
      status: "false",
    },
    {
      brand: "LAIMA",
      description:
        "– Это широкая линейка качественных товаров хозяйственно-бытового и санитарно-гигиенического назначения, которые прекрасно подходят для применения как дома, так и в офисе.",
      price: "Средний, Средний +",
      imgShow: "./img/Laima.jpg",
      status: "false",
    },
    {
      brand: "ЛЮБАША",
      description:
        "– Это бюджетные хозяйственные товары и товары бытовой химии, призванные обеспечить базовые потребности при уборке дома и офисных помещений.",
      price: "Низкий",
      imgShow: "./img/Lubasha.jpg",
      status: "false",
    },
    {
      brand: "WELDAY",
      description:
        "– Ассортимент  идеально подходит для организации кофе-брейков, сервировки переговорных комнат, использования на офисных кухнях. ",
      price: "Средний, Средний +",
      imgShow: "./img/Wellday.jpg",
      status: "false",
    },
    {
      brand: "SONNEN",
      description:
        "– Бытовая техника, мобильная электроника, компьютерные аксессуары, совместимые картриджи, батарейки, светильники и лампы.",
      price: "Средний, Средний +",
      imgShow: "./img/Sonnen.jpg",
      status: "false",
    },
    {
      brand: "CROMEX",
      description:
        "– Это бюджетная бытовая техника, мобильная электроника, компьютерные аксессуары.",
      price: "Низкий",
      imgShow: "./img/Cromex.jpg",
      status: "false",
    },
    {
      brand: "BRABIX",
      description: "– Это мебель и аксессуары для дома и офиса. ",
      price: "Средний, Средний +",
      imgShow: "./img/Brabix.jpg",
      status: "false",
    },
    {
      brand: "GALANT",
      description:
        "– Это деловые аксессуары, которые находятся на стыке канцелярского и подарочного сегментов: ежедневники, визитницы, настольные наборы, подарочные ручки.",
      price: "Средний, Средний +",
      imgShow: "./img/galant.jpg",
      status: "false",
    },
    {
      brand: "DASWERK",
      description:
        "– Это только самые популярные и востребованные товары, а также это уникальные новаторские идеи в товарах продукции массового спроса из самых различных категорий. ",
      price: "Средний, Средний +",
      imgShow: "./img/Daswerk.jpg",
      status: "false",
    },
    {
      brand: "GERMANIUM",
      description:
        "- Это многофункциональные эргономичные рюкзаки для динамичной городской среды и активного отдыха.",
      price: "Средний, Средний +",
      imgShow: "./img/Germanium.jpg",
      status: "false",
    },
    {
      brand: "HEIKKI (Хе՛йки)",
      description:
        "- Включает в себя молодежные рюкзаки и сумки различных стилей и назначений.",
      price: "Средний, Средний +",
      imgShow: "./img/HEIKKI.png",
      status: "false",
    },
    {
      brand: "TAIGARU (Тайга՛ру)",
      description:
        "- Это бренд товаров для туризма и отдыха на природе: различные виды термосов",
      price: "Средний, Средний +",
      imgShow: "./img/TAIGARU.jpg",
      status: "false",
    },
    {
      brand: "ГРАНДМАСТЕР",
      description:
        "– Это ассортимент профессионального инструмента, инвентаря: СИЗы, лопаты и многое другое",
      price: "Средний, Средний +",
      imgShow: "./img/GrandMaster.jpg",
      status: "false",
    },
    {
      brand: "ТЕХ - ТОП",
      description:
        "– Это ассортимент профессионального инструмента, инвентаря, который является ТОПовым за свои деньги!",
      price: "Низкий",
      imgShow: "./img/Tech_Top.jpg",
      status: "false",
    },
    {
      brand: "ЗОЛОТОЙ ИДЕАЛ",
      description:
        "- Это бытовая и профессиональная химия. Мыло и дозаторы, антисептические гели.",
      price: "Средний",
      imgShow: "./img/GoldenIdeal.jpg",
      status: "false",
    },
    {
      brand: "МЕЛОДИЯ",
      description:
        "– Это линейка парфюмерно-косметических средств и товаров бытовой химии с удачным балансом цены и качества в эконом-сегменте: освежители воздуха, мыло и многое другое.",
      price: "Низкий",
      imgShow: "./img/Melody.jpg",
      status: "false",
    },
    {
      brand: "ЗОЛОТАЯ СКАЗКА",
      description:
        "– Коллекция сувениров и подарков, ключевые категории бренда: новогодний ассортимент; подарочная упаковка; товары для оформления праздника.",
      price: "Средний, Средний +",
      imgShow: "./img/GoldenFaifyTail.jpg",
      status: "false",
    },
    {
      brand: "ОСТРОВ СОКРОВИЩ",
      description:
        "– Это яркие товары для творчества, рукоделия и хобби: алмазная мозаика, картины по номерам, цветной картон, цветной фетр, цветная бумага и многое другое.",
      price: "Средний, Средний +",
      imgShow: "./img/IslandOfTreasure.jpg",
      status: "false",
    },
    {
      brand: "ЮНЛАНДИЯ",
      description:
        "– Товары для учебы, развития и творчества для детей дошкольного и младшего школьного возраста, содержащая развивающий контент. Это товары для счастливого детства.",
      price: "Средний, Средний +",
      imgShow: "./img/YoungLand.jpg",
      status: "false",
    },
    {
      brand: "ПИФАГОР",
      description:
        "– Это доступные по цене, но достойные по качеству канцелярские товары для учебы и школьного творчества: пластелин, гуашь и многое другое.",
      price: "Низкий",
      imgShow: "./img/Pifagor.jpg",
      status: "false",
    },
    {
      brand: "SHAMAANI",
      description:
        "– Товары для путешествий, туризма, пикников и активного отдыха: влагозащитная одежда и обувь, подушки для путешествий, пледы для пикника и многое другое.",
      price: "Средний",
      imgShow: "./img/SHAMAANI.jpg",
      status: "false",
    },
  ];
  
  const name = "Piter";

  export { arrProductSTM, name  };
  