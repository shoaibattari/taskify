// src/components/Taskify/AddTaskifyForm.jsx
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { CommonButton, CustomInput, Wrapper } from "../common";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import apis from "../../config/api";
import { FiUpload } from "react-icons/fi";

const AddTaskifyForm = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const { mutate: addTask, isLoading: addingTask } = useMutation({
    mutationFn: (formData) => apis.addTask(formData),
    onSuccess: () => {
      toast.success("Task added successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to add task");
    },
  });

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
  };

  return (
    <Wrapper className="py-12">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
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
            <Form className="space-y-6">
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
                <label className="block mb-2 font-medium text-gray-700">
                  Avatar (optional)
                </label>

                <div className="flex items-center gap-4">
                  {/* Upload Button */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                  >
                    <FiUpload size={18} />
                    Upload Image
                  </button>

                  {/* Preview */}
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-16 w-16 rounded-lg object-cover border shadow"
                    />
                  )}
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFieldValue("avatar", file);
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setPreview(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
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
