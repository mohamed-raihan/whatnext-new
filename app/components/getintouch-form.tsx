'use client';
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
// import { FaX } from "react-icons/fa6";
import { API_URL } from "../api-services/api_url";
import { toast } from "react-toastify";
import api from "../api-services/axios";

const GetintouchForm = () => {

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
        } catch (error) {
            console.log(error);
            toast.error('Message not sent');
        }
    };  

    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 w-full max-w-xl mx-auto text-[#0a0a0a]">
            <h2 className="text-2xl sm:text-3xl md:text-[45px] font-bold mb-2 font-montserrat">
                Get in <span className="text-[#288737]">Touch</span>
            </h2>
            <p className="text-[#000000] mb-4 sm:mb-6 font-montserrat text-sm sm:text-base md:text-[14px] font-semibold">
            It&apos;s effective, it&apos;s beneficial and it&apos;s absolutely free. Take your virtual counselling session today!
            </p>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Name *"
                        className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base`}
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
                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base`}
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
                        className={`w-full border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-sm sm:text-base`}
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                    {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
                </div>
                <div>
                    <select     
                        className={`w-full border ${errors.find_us ? 'border-red-500' : 'border-gray-300'} px-3 py-2 sm:px-4 sm:py-3 rounded outline-none text-gray-700 text-sm sm:text-base`}
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
                    className="w-full bg-[#003DA5] text-white py-2 sm:py-3 font-bold rounded text-base sm:text-lg hover:bg-[#002d7a] transition-colors"
                >
                    SEND
                </button>
            </form>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-6 sm:mt-8 text-sm">
                <div className="flex items-center col-span-1 mb-2 sm:mb-0 text-left">
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
                <div className="flex items-center col-span-1 text-left">
                    <Mail className="w-6 h-6 xl:w-8 xl:h-8" />
                    <div className="ms-3">
                        <p className="font-bold">EMAIL</p>
                        <p className="text-green-600 break-words">info@whatnextoverseas.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetintouchForm