import { PageHeader } from "../../components/Main";
import StaffSection from "../../components/StaffSection/StaffSection";

export const Staff = () => {
  return (
    <div className="Staff">
      <PageHeader heading="Թրեյներներ" page="Թրեյներներ" path="/staff" />
      <StaffSection />
    </div>
  );
};
