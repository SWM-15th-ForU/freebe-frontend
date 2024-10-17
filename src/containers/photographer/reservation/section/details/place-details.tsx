import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import TextInput from "@/components/inputs/text-input";
import SectionLayout from "../section-layout";

const PlaceDetails = () => {
  const { watch } = useFormContext<Details>();
  const details = watch("preferredPlace");

  return (
    <SectionLayout title="희망 장소">
      <TextInput<Details>
        disabled
        formField="preferredPlace"
        container={{ marginBottom: 0 }}
      />
    </SectionLayout>
  );
};

export default PlaceDetails;
