

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';


function AddContactPage() {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: "",
        name: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(savedContacts);
    }, []);

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value.toLowerCase();
        setContact((contact) => ({ ...contact, [name]: value, id: v4() }));
    };


    const addHandler = () => {
        if (
            !contact.name ||
            !contact.lastName ||
            !contact.phone ||
            !contact.email) {
            return toast.error("لطفا فرم را پر کنید.")
        }

        const newContact = { ...contact, id: v4() }
        setContacts((contacts) => [...contacts, newContact]);

        const saveContacts = [...contacts, contact]
        localStorage.setItem('contacts', JSON.stringify(saveContacts));

        setContact({
            name: '',
            lastName: '',
            phone: '',
            email: '',
            address: ''
        });
        console.log(contacts)
    };

    return (
        <div className="max-w-md mx-auto p-4 min-h-screen">
          <ToastContainer/>
            <h2 className="text-2xl font-bold mb-4 text-center">
                مخاطب جدید
            </h2>

            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="نام"
                    value={contact.name}
                    onChange={changeHandler}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="نام خانوادگی"
                    value={contact.lastName}
                    onChange={changeHandler}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    name="phone"
                    placeholder="شماره موبایل"
                    value={contact.phone}
                    onChange={changeHandler}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="ایمیل"
                    value={contact.email}
                    onChange={changeHandler}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="address"
                    placeholder="آدرس"
                    value={contact.address}
                    onChange={changeHandler}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    onClick={addHandler}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    افزودن
                </button>
            </div>

        </div>
    );
}

export default AddContactPage;
