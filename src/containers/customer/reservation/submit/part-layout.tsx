import submitStyles from "./submit.css";

const PartLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={submitStyles.container}>
      <span className={submitStyles.title}>{title}</span>
      {children}
    </div>
  );
};

export default PartLayout;
