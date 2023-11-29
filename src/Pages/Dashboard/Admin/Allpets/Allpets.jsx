import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import AllPetsTable from "./AllPetsTable";


const Allpets = () => {
    return (
        <div className="mt-10 p-4">
      <SectionTitle heading={"all pets"}></SectionTitle>
            <AllPetsTable></AllPetsTable>
        </div>
    );
};

export default Allpets;