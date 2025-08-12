// src/components/Taskify/TaskifyForm.jsx
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { CommonButton, CustomInput, Wrapper } from "../common";
import { useTaskifyContext } from "../../context/TaskifyContext";
import { useNavigate } from "react-router-dom";
const AddTaskifyForm = () => {
  const { addTask, addingTask } = useTaskifyContext();
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  const initialValues = {
    title: "",
    description: "",
    avatar: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    avatar: Yup.mixed().nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.avatar) formData.append("avatar", values.avatar);

    addTask(formData);
    resetForm();
    setPreview(null);
    navigate("/");
  };

  return (
    <Wrapper className="py-12">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Add New Task
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            values,
            setFieldValue,
          }) => (
            <Form className="space-y-5">
              <CustomInput
                label="Title"
                name="title"
                placeholder="Enter task title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && errors.title}
              />
              <CustomInput
                label="Description"
                name="description"
                placeholder="Enter task description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.description && errors.description}
              />

              {/* Image Upload */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Avatar (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    setFieldValue("avatar", file);
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setPreview(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="block w-full border border-gray-300 rounded-lg p-2"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-3 h-24 w-24 object-cover rounded-lg"
                  />
                )}
              </div>

              <CommonButton
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                disabled={addingTask}
              >
                {addingTask ? "Adding..." : "Add Task"}
              </CommonButton>
            </Form>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
};

export default AddTaskifyForm;
