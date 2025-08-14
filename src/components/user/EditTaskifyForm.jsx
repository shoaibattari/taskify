// src/components/Taskify/EditTaskifyForm.jsx
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import { CommonButton, CustomInput } from "../common";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import apis from "../../config/api";
import { FiUpload } from "react-icons/fi";

const EditTaskifyForm = ({ task, onClose, onSuccess }) => {
  const [preview, setPreview] = useState(task?.avatar?.url || null);
  const fileInputRef = useRef(null);

  const { mutate: editTask, isLoading: editing } = useMutation({
    mutationFn: ({ id, formData }) => apis.editTask(id, formData),
    onSuccess: () => {
      toast.success("Task updated successfully!");
      onSuccess?.(); // refresh list
      onClose();
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to update task");
    },
  });

  const initialValues = {
    title: task?.title || "",
    description: task?.description || "",
    avatar: null,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    avatar: Yup.mixed().nullable(),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.avatar) formData.append("avatar", values.avatar);

    editTask({ id: task._id, formData });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Task</h2>

        <Formik
          enableReinitialize
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
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                  >
                    <FiUpload size={18} />
                    Upload Image
                  </button>
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-16 w-16 rounded-lg object-cover border shadow"
                    />
                  )}
                </div>
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

              <div className="flex gap-3">
                <CommonButton
                  type="button"
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={onClose}
                >
                  Cancel
                </CommonButton>
                <CommonButton
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  disabled={editing}
                >
                  {editing ? "Updating..." : "Update Task"}
                </CommonButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditTaskifyForm;
