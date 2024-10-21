import ReservationFormProvider from "@/containers/customer/reservation/reservation-form-provider";

const ReservationLayout = ({ children }: { children: React.ReactNode }) => {
  return <ReservationFormProvider>{children}</ReservationFormProvider>;
};

export default ReservationLayout;
