'use client';

import { useState } from "react";
import api from "../api-services/axios";
import { API_URL } from "../api-services/api_url";
import { toast } from "react-toastify";
import { Mail, Phone } from "lucide-react";

// import { useState } from 'react';

export default function EnquireForm({ setIsEnquireFormOpen }: { setIsEnquireFormOpen: (isOpen: boolean) => void }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    find_us: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone_number: '',
    find_us: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone_number: '',
      find_us: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
        isValid = false;
      }
    }

    // Phone number validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
      isValid = false;
    } else {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone_number.replace(/\D/g, ''))) {
        newErrors.phone_number = 'Invalid phone number format';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await api.post(API_URL.CONTACT_US.POST_CONTACT_US, formData);
      console.log(response);
      toast.success('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        find_us: ''
      });
      setErrors({
        name: '',
        email: '',
        phone_number: '',
        find_us: ''
      });
      setIsEnquireFormOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('Message not sent');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-transparent bg-opacity-40  flex justify-center items-center">
        <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-lg relative">
          <button
            onClick={() => setIsEnquireFormOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          >
            &times;
          </button>

          <h2 className="text-3xl font-bold">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="mt-2 text-gray-700 font-medium">
            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free.
            <br />
            Take your virtual counselling session today!
          </p>

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name *"
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number *"
                className={`w-full border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
              {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
            </div>
            <div>
              <select
                className={`w-full border ${errors.find_us ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                name="find_us"
                value={formData.find_us}
                onChange={handleChange}
              >
                <option value="">How did you find us?</option>
                <option value="Linkedin">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
                <option value="Reference">Reference</option>
                <option value="Other">Other</option>
              </select>
              {errors.find_us && <p className="text-red-500 text-sm mt-1">{errors.find_us}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold text-lg shadow-md transition-colors"
            >
              SEND
            </button>
          </form>


          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-6 sm:mt-8 text-sm">
            <div className="flex items-center col-span-1 mb-2 sm:mb-0 ">
              <Phone className="w-6 h-6 mb-1" />
              <div className="ms-3">
                <p className="font-bold">PHONE</p>
                <p className="text-green-600">+91 99005 42429</p>
              </div>
            </div>
            {/* <div className="flex items-center col-span-1 mb-2 sm:mb-0">
                    <FaX className="w-6 h-6 mb-1" />
                    <div className="ms-3">
                        <p className="font-bold">FAX</p>
                        <p className="text-green-600">03 5432 1234</p>
                    </div>
                </div> */}
            <div className="flex items-center col-span-1">
              <Mail className="w-6 h-6 xl:w-8 xl:h-8" />
              <div className="ms-3">
                <p className="font-bold">EMAIL</p>
                <p className="text-green-600 break-words">info@whatnextoverseas.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
