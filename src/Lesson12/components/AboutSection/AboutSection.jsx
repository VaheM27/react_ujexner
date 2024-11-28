import { SectionHeader } from "../Main";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <SectionHeader
          heading2="Մեր"
          bold=" մասին"
          text="Ընկերության գործունեության մասին"
          className="sectionHeader"
        />
        <div className="about-container">
          <p>
            SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 8 տարի է
            կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ
            ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ: <br />
            <br />
            Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում
            են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի արդյունքում մեր
            ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ մասնագետների
            աշխատանքի արդյունքում մենք վայելում ենք մեր ուսանողների սերն ու
            վստահությունը:
            <br />
            <br />
            Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում
            SmartCode-ի օգնությամբ:
          </p>
          <img
            src="https://smartcode.am/public/image/per3.svg"
            alt="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
