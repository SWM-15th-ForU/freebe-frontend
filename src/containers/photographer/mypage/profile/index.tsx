"use client";

import { Photographer } from "profile-types";
import { FormProvider, useForm } from "react-hook-form";
import ProfileEdit from "./edit";
import { profileStyles } from "./profile.css";
import Preview from "./preview";

const MyProfile = ({ profile }: { profile: Photographer }) => {
  const method = useForm<Photographer>({ defaultValues: profile });
  return (
    <FormProvider {...method}>
      <div className={profileStyles.container}>
        <Preview />
        <ProfileEdit />
      </div>
    </FormProvider>
  );
};

export default MyProfile;
