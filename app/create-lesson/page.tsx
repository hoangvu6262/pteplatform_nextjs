"use client";

import AdminLayout from "@/layouts/admin/AdminLayout";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./styles.scss";

import LessonForm from "@/components/management/lesson/LessonForm/LessonForm";
import { schema } from "@/config/yup/lessonYup";

const CreateLesson = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue, reset } = methods;
  return (
    <AdminLayout>
      <div className="lesson">
        <div className="lesson__container">
          <FormProvider {...methods}>
            <form
              autoComplete="off"
              encType="multipart/form-data"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <LessonForm />
            </form>
          </FormProvider>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateLesson;
