const car = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
    title: "Mazda MX-5",
    start_production: 1989,
    class: "Sports car Roadster",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
    title: "Volkswagen Kübelwagen",
    start_production: 1989,
    class: "Military vehicle",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
    title: "Porsche Cayenne",
    start_production: 2002,
    class: "Mid-size luxury crossover SUV",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
    title: "Vauxhall Chevette",
    start_production: 1975,
    class: "Supermini",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
    title: "Dymaxion car",
    start_production: 1933,
    class: "Concept car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
    title: "Ford Crown Victoria",
    start_production: 1955,
    class: "Full-size Ford",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
    title: "Plymouth Superbird",
    start_production: 1970,
    class: "Muscle car(today) and Race car(Past)",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
    title: "Saab 9000",
    start_production: 1984,
    class: "Executive car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
    title: "Pontiac Sunfire",
    start_production: 1994,
    class: "Compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
    title: "AMC Javelin",
    start_production: 1967,
    class: "{{Unbulleted list| Pony car | Muscle car },},",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
    title: "Jaguar X-Type",
    start_production: 2001,
    class: "Compact executive car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
    title: "Volkswagen Phaeton",
    start_production: 2002,
    class: "Full-size luxury car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
    title: "Pontiac G6",
    start_production: 2004,
    class: "Midsize",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
    title: "Ford Five Hundred",
    start_production: 2004,
    class: "Full-size",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
    title: "Pontiac Solstice",
    start_production: 2005,
    class: "Roadster, coupe",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
    title: "Fiat Tipo",
    start_production: 1988,
    class: "Small family car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
    title: "Plymouth Reliant",
    start_production: 1981,
    class: "Mid-size",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
    title: "Chevrolet Chevette",
    start_production: 1975,
    class: "Subcompact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg",
    title: "Chevrolet Corsica",
    start_production: 1987,
    class: "Compact car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg",
    title: "Mazda MX-3",
    start_production: 1991,
    class: "Sport compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
    title: "TVR Tuscan Speed Six",
    start_production: 1999,
    class: "Sports car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aston_Martin_DB9_coupe_02.jpg/400px-Aston_Martin_DB9_coupe_02.jpg",
    title: "Aston Martin DB9",
    start_production: 2004,
    class: "Grand tourer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pontiac_Catalina_front.jpg/400px-Pontiac_Catalina_front.jpg",
    title: "Pontiac Catalina",
    start_production: 1950,
    class: "Full-size",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oldsmobile_Toronado_0003.jpg/400px-Oldsmobile_Toronado_0003.jpg",
    title: "Oldsmobile Toronado",
    start_production: 1965,
    class: "Full-size personal luxury car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chrysler_Cirrus_--_01-27-2012.jpg/400px-Chrysler_Cirrus_--_01-27-2012.jpg",
    title: "Chrysler Cirrus",
    start_production: 1994,
    class: "Mid-size",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg",
    title: "Volkswagen Corrado",
    start_production: 1988,
    class: "Sport compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg/400px-Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg",
    title: "Mercedes-Benz R-Class",
    class: "Full-size CUV / Large MPV",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Volvo_V50_1.6_D.jpg/400px-Volvo_V50_1.6_D.jpg",
    title: "Volvo V50",
    start_production: 2004,
    class: "Compact / Small family car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/400px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg",
    title: "Audi TT",
    class: "Sport compact Sports car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg/400px-VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg",
    title: "Volkswagen Touareg",
    start_production: 2002,
    class: "Mid-size luxury crossover SUV",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red92VR4rear.jpg/400px-Red92VR4rear.jpg",
    title: "Mitsubishi GTO",
    start_production: 1990,
    class: "Sports car, grand tourer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cadillac_Cimarron_2_--_07-01-2009.jpg/400px-Cadillac_Cimarron_2_--_07-01-2009.jpg",
    title: "Cadillac Cimarron",
    start_production: 1981,
    class: "Compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG",
    title: "Dodge Daytona",
    start_production: 1984,
    class: "Compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cadillac_Allante.jpg/400px-Cadillac_Allante.jpg",
    title: "Cadillac Allanté",
    start_production: 1986,
    class: "Luxury roadster",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Toyota_Avensis_III_20090706_front.JPG/400px-Toyota_Avensis_III_20090706_front.JPG",
    title: "Toyota Avensis",
    start_production: 1997,
    class: "Large family car",
  },
];
const clothes = [
  {
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  },
  {
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  },
  {
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  },
  {
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  },
];
const food = [
  {
    image:
      "https://photo2.foodgawker.com/wp-content/uploads/2020/12/3673283.jpg",
    title: "Tofu Bao",
    price: "250",
    description: "crispy, fried tofu bites mixed in a spicy, topped Sausage",
  },
  {
    image:
      "https://photo.foodgawker.com/wp-content/uploads/2020/10/3652339.jpg",
    title: "Tacos De alambre",
    price: "300",
    description: "chicken cooked with bacon, topped with Oaxaca cheese",
  },
  {
    image:
      "https://photo2.foodgawker.com/wp-content/uploads/2020/11/3666680.jpg",
    title: "Tacos Al Pastor",
    price: "200",
    description: "warmth from spices and sweetness from pineapple",
  },
];

export { car, clothes, food };
