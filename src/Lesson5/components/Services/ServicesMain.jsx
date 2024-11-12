import ServicesBlock from "../../components/Services/ServicesBlock"

import servicesDivs from "../../constants/services"

import './Services.scss';

const ServicesMain = () => {

    return (
        <div className="services">
            <h1>Services</h1>
            <div className="services_container">
                {servicesDivs.map((item, index) => {

                    let cln = "service_block";

                    if (index % 2 !== 0) {
                        cln = "service_block service_block_second";
                    }

                    return (
                        <div key={item.id} className={cln}>
                            <ServicesBlock
                                icon={item.icon}
                                name={item.name}
                                index={index}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )

}

export default ServicesMain;