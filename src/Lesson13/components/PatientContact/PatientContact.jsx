import birthIcon from "../../assets/png/BirthIcon.png";
import femaleIcon from "../../assets/png/female.png";
import maleIcon from "../../assets/svg/MaleIcon.svg";
import phoneIcon from "../../assets/png/PhoneIcon.png";
import insuranceIcon from "../../assets/png/InsuranceIcon.png";
import "./PatientContact.scss";

const PatientContact = ({
  src,
  name,
  birthdate,
  gender,
  mobile,
  emMobile,
  insurance,
}) => {
  const genderIcon = gender === "Female" ? femaleIcon : maleIcon;
  const contactInfo = [
    { icon: birthIcon, label: "Date Of Birth", value: birthdate },
    { icon: genderIcon, label: "Gender", value: gender },
    { icon: phoneIcon, label: "Contact Info.", value: mobile },
    { icon: phoneIcon, label: "Emergency Contacts", value: emMobile },
    { icon: insuranceIcon, label: "Insurance Provider", value: insurance },
  ];

  return (
    <section className="patientContact">
      <img src={src} alt={name} className="photo" />
      <h3>{name}</h3>
      <ul>
        {contactInfo.map((info, index) => (
          <li key={index}>
            <img src={info.icon} alt={info.label} />
            <div>
              <span>{info.label}</span>
              <p>{info.value}</p>
            </div>
          </li>
        ))}
      </ul>
      <button>Show All Information</button>
    </section>
  );
};

export default PatientContact;
