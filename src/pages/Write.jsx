import React, { useState } from "react";
import { useBlogs } from "../context/BlogContext";
import CSidebar from "../components/CreatorNav";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const { addBlog } = useBlogs();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addBlog({ title, content, date: new Date().toLocaleDateString() });
      setTitle(""); 
      setContent("");
      toast.success("Your blog post has been successfully published!"); 
    } else {
      toast.error("All fields are required. Please fill in the title and content."); 
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#2B3A33] to-[#4A5D53]">
      <CSidebar isOpen={isSidebarOpen} />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64 sm:ml-64" : "ml-0 sm:ml-64"
        } p-8 bg-white font-sans`}
      >
        <h1 className="text-3xl font-semibold text-[#2B3A33] mb-6 text-center sm:text-left">
          Write Your Problem to be solved
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 max-w-4xl mx-auto border border-gray-300"
        >
          <div className="form-group">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-[#2B3A33] mb-2"
            >
              Blog Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F09120]"
              placeholder="Enter an engaging title for your blog"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="content"
              className="block text-lg font-medium text-[#2B3A33] mb-2"
            >
              Blog Content:
            </label>
            <Editor
              apiKey="3tyyaj049ws7lfwkluh6d4fq94g6g12kg47xsmsnj6qnb3yk" // API key
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
              init={{
                height: 400,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                content_style:
                  "body { font-family:Arial,sans-serif; font-size:16px; color:#333 }",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#F09120] text-white text-lg font-medium rounded-lg hover:bg-[#F28020] transition duration-300"
          >
            Publish Blog
          </button>
        </form>
      </main>

      <ToastContainer />
    </div>
  );
};

export default WriteBlog;
