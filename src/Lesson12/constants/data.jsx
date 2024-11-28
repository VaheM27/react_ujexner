import { v4 } from "uuid";

export const social = [
  {
    social: true,
    link: "https://www.facebook.com/SmartCode.am/",
    className: "social",
    target: "_blank",
    content: <i className="bi bi-facebook"></i>,
  },
  {
    social: true,
    link: "https://am.linkedin.com/company/smartcode-development-school",
    className: "social",
    target: "_blank",
    content: <i className="bi bi-linkedin"></i>,
  },
  {
    social: true,
    link: "https://www.instagram.com/smartcode.am/",
    className: "social",
    target: "_blank",
    content: <i className="bi bi-instagram"></i>,
  },
  {
    social: true,
    link: "https://www.tiktok.com/@smartcode.am",
    className: "social",
    target: "_blank",
    content: <i className="bi bi-tiktok"></i>,
  },
];

export const featureData = [
  {
    bold: "Փորձառու",
    title: " մասնագետներ",
    context:
      "Դասավանդում են փորձառու մասնագետներ, ովքեր կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:",
    icon: <i className="bi bi-person-circle"></i>,
  },
  {
    bold: "Փոքր խմբեր",
    title: " անհատական մոտեցում",
    context:
      "Դասընթացները անցկացվում են՝ 6-8 ուսանողից կազմված խմբերից, ապահովելով անհատական մոտեցում յուրաքանչյուր ուսանողին:",
    icon: <i className="bi bi-check-circle"></i>,
  },
  {
    bold: "Հարմարավետ",
    title: " կահավորված լսարաններ",
    context:
      "Մեր հարմարավետ կահավորված լսարաններում Ձեր ուսման պրոցեսը կդառնա էլ ավելի հաճելի։",
    icon: <i className="bi bi-cup-hot-fill"></i>,
  },
  {
    bold: "Փորձնական",
    title: " 3 դաս",
    context:
      "Բոլոր ուսանողներին կտրամադրվի 3 փորձնական դաս, որը Ձեզ հնարավորություն կտա փորձել Ձեր ուժերը և ծանոթանալ դասապրոցեսի ընթացքին։",
    icon: <i className="bi bi-hand-thumbs-up"></i>,
  },
  {
    bold: "Դասի ",
    title: " ձայնագրություն",
    context:
      "Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝ տանը կրկնելու համար։",
    icon: <i className="bi bi-camera-video-fill"></i>,
  },
  {
    bold: "Օնլայն ",
    title: " օգնական",
    context:
      "Կուրսի ամբողջ ընթացքում դուք կստանաք հեռավար աջակցություն` մասնագետի կողմից:",
    icon: <i className="bi bi-headphones"></i>,
  },
  {
    bold: "Ապառիկ",
    title: " ուսուցում",
    context:
      "Շատ լավ հնարավորություն՝ սովորել ապառիկ պայմաններով և վճարել ուսման համար դասընթացի ավարտին՝ աշխատանքի անցնելուց հետո:",
    icon: <i className="bi bi-hourglass"></i>,
  },
  {
    bold: "Կարիերային",
    title: " աճ",
    context:
      "Բոլոր ուսանողները կստանան 1 ամսյա անվճար թրեյնինգ մեր HR մասնագետի կողմից` հաջողակ կարիերա ստեղծելու համար",
    icon: <i className="bi bi-briefcase-fill"></i>,
  },
  {
    bold: "Աշխատանքի",
    title: " առաջարկ",
    context:
      "Դասընթացի ավարտին լավագույն արդյունք ցուցաբերած ուսանողներին կաջակցենք աշխատանքի ընդունման հարցում:",
    icon: <i className="bi bi-building-fill"></i>,
  },
];

export const company = [
  {
    list: "Դասընթացներ",
    path: "/courses",
  },
  {
    list: "Առավելություններ",
    path: "/features",
  },
  {
    list: "Թրեյներներ",
    path: "/staff",
  },
  {
    list: "Մեր մասին",
    path: "/about-us",
  },
];

export const contact = [
  {
    content: "+374 41 435344",
    href: "tel:+37441435344",
    icon: <i className="bi bi-telephone-fill"></i>,
    target: "_blank",
  },
  {
    content: "+374 98 435341",
    href: "tel:+37498435341",
    icon: <i className="bi bi-telephone-fill"></i>,
    target: "_blank",
  },
  {
    content: "+374 41 435344",
    href: "tel:+37441435344",
    icon: <i className="bi bi-envelope-fill"></i>,
    target: "_blank",
  },
  {
    content: "support@smartcode.am",
    href: "mailto:support@smartcode.am",
    icon: <i className="bi bi-envelope-fill"></i>,
    target: "_blank",
  },
  {
    content: "Հանրապետության 22",
    href: "https://www.google.at/maps/search/22+%D5%80%D5%A1%D5%B6%D6%80%D5%A1%D5%BA%D5%A5%D5%BF%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6,+Jerewan,+Armenien/@40.1532736,44.3237573,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
    icon: <i className="bi bi-geo-alt-fill"></i>,
    target: "_blank",
  },
];

export const trainers = [
  {
    name: "Ապրես",
    course: "java",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/29.png",
    id: v4(),
  },
  {
    name: "Ալբերտ",
    course: "Python / ML",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/6.png?v=1.2",
    id: v4(),
  },
  {
    name: "Ռոման",
    course: "React.js",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/19.png?v=1.2",
    id: v4(),
  },
  {
    name: "Ալբերտ",
    course: "Python / ML",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/12.png",
    id: v4(),
  },
  {
    name: "Արմենուհի",
    course: "UX / UI",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/31.png",
    id: v4(),
  },
  {
    name: "Վարդգես",
    course: "Python / Django",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/14.png",
    id: v4(),
  },
  {
    name: "Անժելա",
    course: "UX / UI",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/30.png",
    id: v4(),
  },
  {
    name: "Հայկ",
    course: "HTML / CSS",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/15.png",
    id: v4(),
  },
  {
    name: "Կառլեն",
    course: "C#",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/28.png?v=1",
    id: v4(),
  },
  {
    name: "Գոռ",
    course: "Python / OOP",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/16.png",
    id: v4(),
  },
  {
    name: "Նարեկ",
    course: "React.js",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/17.png",
    id: v4(),
  },
  {
    name: "Էրիկ",
    course: "java",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/22.png",
    id: v4(),
  },
  {
    name: "Արման",
    course: "HTML / CSS",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/23.png",
    id: v4(),
  },
  {
    name: "Սերգեյ",
    course: "Front-End",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/24.png",
    id: v4(),
  },
  {
    name: "Վահե",
    course: "HTML / CSS",
    pos: "trainer",
    src: "https://smartcode.am/public/image/staff/26.png",
    id: v4(),
  },
];

export const courses = [
  {
    src: "https://smartcode.am/public/image/courses/front-end.svg",
    title: "WEB Front-End",
    duration: "9 ամիս",
    price: "58,000 ֏",
    id: v4(),
    wrapper: "first",
  },
  {
    src: "https://smartcode.am/public/image/courses/python-ml.svg",
    title: "Python (ML / AI)",
    duration: "7 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "first",
  },
  {
    src: "https://smartcode.am/public/image/courses/java.svg",
    title: "Java",
    duration: "6 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "first",
  },
  {
    src: "https://smartcode.am/public/image/courses/front-end.svg",
    title: "JavaScript",
    duration: "3.5 ամիս",
    price: "58,000 ֏",
    id: v4(),
    wrapper: "first",
  },
  {
    src: "https://smartcode.am/public/image/courses/react.svg",
    title: "React.js (Redux)",
    duration: "3 ամիս",
    price: "58,000 ֏",
    id: v4(),
    wrapper: "second",
  },
  {
    src: "https://smartcode.am/public/image/courses/node.svg",
    title: "Node.js",
    duration: "3 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "second",
  },
  {
    src: "https://smartcode.am/public/image/courses/devops.svg?v=1.2",
    title: "DevOps",
    duration: "4 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "second",
  },
  {
    src: "https://smartcode.am/public/image/courses/C.svg",
    title: "C#",
    duration: "6 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "second",
  },
  {
    src: "https://smartcode.am/public/image/courses/python-django.svg",
    title: "Python (Django)",
    duration: "5 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "third",
  },
  {
    src: "https://smartcode.am/public/image/courses/php.svg",
    title: "PHP (Laravel)",
    duration: "6 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "third",
  },
  {
    src: "https://smartcode.am/public/image/courses/full-stack.svg",
    title: "WEB Full-Stack",
    duration: "11 ամիս",
    price: "58,000 ֏",
    id: v4(),
    wrapper: "third",
  },
  {
    src: "https://smartcode.am/public/image/courses/ui-ux.svg?v=1.1",
    title: "UX / UI Design",
    duration: "4 ամիս",
    price: "65,000 ֏",
    id: v4(),
    wrapper: "third",
  },
  {
    src: "https://smartcode.am/public/image/courses/qa.svg",
    title: "QA Engineer",
    duration: "6 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "fourth",
  },
  {
    src: "https://smartcode.am/public/image/courses/graphic-design.svg?v=1.2",
    title: "Graphic Design",
    duration: "3 ամիս",
    price: "65,000 ֏",
    id: v4(),
    wrapper: "fourth",
  },
  {
    src: "https://smartcode.am/public/image/courses/pm.svg",
    title: "Product Management",
    duration: "4 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "fourth",
  },
  {
    src: "https://smartcode.am/public/image/courses/c++.svg",
    title: "C++",
    duration: "6 ամիս",
    price: "68,000 ֏",
    id: v4(),
    wrapper: "fourth",
  },
];
