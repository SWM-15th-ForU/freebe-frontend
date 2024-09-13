"use client";

import { Photographer } from "profile-types";
import { FormProvider, useForm } from "react-hook-form";
import ProfileEdit from "./edit";
import { profileStyles } from "./profile.css";

const MyProfile = ({ profile }: { profile: Photographer }) => {
  const method = useForm<Photographer>({ defaultValues: profile });
  return (
    <FormProvider {...method}>
      <div className={profileStyles.container}>
        <div className={profileStyles.preview} />
        <ProfileEdit />
      </div>
    </FormProvider>
  );
};

export default MyProfile;
