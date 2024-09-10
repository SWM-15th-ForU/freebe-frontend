import { sectionStyles } from "./section.css";

const SectionLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={sectionStyles.container}>
      <span className={sectionStyles.title}>{title}</span>
      {children}
    </div>
  );
};

export default SectionLayout;
