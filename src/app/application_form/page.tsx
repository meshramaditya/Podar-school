"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const jobPositionFromQuery = searchParams.get("position") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    video: null as File | null,
    resume: null as File | null,
  });

  // Pre-fill position if passed from query
  useEffect(() => {
    if (jobPositionFromQuery) {
      setFormData(prev => ({ ...prev, position: jobPositionFromQuery }));
    }
  }, [jobPositionFromQuery]);

  const positions = [
    "Primary School Teacher",
    "Science Teacher",
    "Math Teacher",
    "Librarian",
  ];

  const experiences = ["0-1 years", "2-5 years", "5-10 years", "10+ years"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    // TODO: send formData to backend API
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">
          Apply for a Position
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below and submit your application. We will get back to you within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Position *</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              disabled={!!jobPositionFromQuery}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a position</option>
              {positions.map((pos, idx) => (
                <option key={idx} value={pos}>{pos}</option>
              ))}
            </select>
            {jobPositionFromQuery && (
              <p className="text-gray-500 text-sm mt-1">
                Position pre-selected from career page
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Experience *</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select experience level</option>
              {experiences.map((exp, idx) => (
                <option key={idx} value={exp}>{exp}</option>
              ))}
            </select>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cover Letter / Message *</label>
            <textarea
              name="coverLetter"
              placeholder="Briefly tell us why you are a great fit for this position..."
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Video Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Introduction Video (Optional)</label>
            <input
              type="file"
              name="video"
              accept=".mp4,.mov,.avi"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-gray-500 text-sm mt-1">MP4, MOV, AVI | Max 50MB</p>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Resume *</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-gray-500 text-sm mt-1">PDF, DOC, DOCX | Max 5MB</p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold px-10 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
