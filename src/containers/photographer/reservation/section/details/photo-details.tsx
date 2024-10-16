import { useFormContext } from "react-hook-form";
import { Details } from "reservation-types";
import SectionLayout from "../section-layout";
import Field from "../fields/field";
import { sectionStyles } from "../section.css";

const PhotoDetails = () => {
  const { watch } = useFormContext<Details>();
  const [details] = watch(["productInfo"]);
  return (
    <SectionLayout title="촬영 정보">
      <div className={sectionStyles.wrapper}>
        <Field key="촬영 장소" name="촬영 장소" formField="basicPlace" />
        {details.map((detail, index) => (
          <Field
            key={detail.title}
            name={detail.title}
            formField={`productInfo.${index}.content`}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default PhotoDetails;
