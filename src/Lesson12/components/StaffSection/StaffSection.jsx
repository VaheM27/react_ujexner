import { Button, SectionHeader, Trainer } from "../Main";
import { trainers } from "../../constants/data";
import "./StaffSection.scss";

const StaffSection = ({ className }) => {
  return (
    <section className={className}>
      <div className="staffSection container">
        <SectionHeader
          heading2="Դասընթաց"
          bold="ավարներ"
          text="Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:"
          className="sectionHeader"
        />
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <Trainer
              key={trainer.id}
              src={trainer.src}
              alt={trainer.name}
              name={trainer.name}
              pos={trainer.pos}
              course={trainer.course}
            />
          ))}
        </div>
        <div className="btn">
          <Button
            social={false}
            content="Սկսե՛լ ուսումը"
            type="button"
            className="orangeBtn"
          />
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
