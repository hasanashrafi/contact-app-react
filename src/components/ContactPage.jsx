import React, { useEffect, useState } from 'react'
import ContactDetailPage from './ContactDetailPage'

function ContactPage() {
    const [savedContacts, setSavedContacts] = useState([])

    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setSavedContacts(savedContacts);
    }, []);

   
    const deleteHandler = (id) => {
        const newContact = savedContacts.filter((contact) => contact.id !== id)
        localStorage.setItem('contacts', JSON.stringify(newContact));
        setSavedContacts(newContact)
    }

    return (
        <div className='max-w-7xl mx-auto min-h-screen p-5'>
            <p className='mb-5 text-center bg-blue-100 rounded-md text-xl text-blue-700  p-2 '>لیست مخاطبین</p>
            <div className=' p-4 rounded-md '>

                {
                    savedContacts.length ? savedContacts.map((contact) =>
                        <ContactDetailPage
                            key={contact.id}
                          
                            deleteHandler={deleteHandler}
                            contact={contact}
                        />
                    ) : <p className='p-2 font-DanaDemiBold text-center rounded bg-red-200 text-red-700'>مخاطبی وجود ندارد!</p>
                }

            </div>
        </div>
    )
}

export default ContactPage