import React from 'react';

function ContactDetailPage({ contact: { id, name, lastName, phone, email, address }, deleteHandler }) {



    return (
        <div className="w-full mx-auto text-center m-4 ">
            <table className="w-full shadow-xl rounded bg-white">
                <thead>
                    <tr className="bg-gray-200 text-center ">
                        <th className="py-2 px-4 border-b">نام</th>
                        <th className="py-2 px-4 border-b">نام خانوادگی</th>
                        <th className="py-2 px-4 border-b">شماره موبایل</th>
                        <th className="py-2 px-4 border-b">ایمیل</th>
                        <th className="py-2 px-4 border-b">آدرس</th>
                        <th className="py-2 px-4 border-b">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100 text-center">

                        <td className="w-28 py-2 px-4 border-b">{name}</td>
                        <td className="w-28 py-2 px-4 border-b">{lastName}</td>
                        <td className="w-28 py-2 px-4 border-b">{Number(phone)}</td>
                        <td className="w-36 py-2 px-4 border-b">{email}</td>
                        <td className="w-36 py-2 px-4 border-b">{address}</td>
                        <td className="w-28 py-2 px-4 border-b">

                            <button
                                onClick={() => deleteHandler(id)}
                                className="w-24 bg-red-500 text-white px-2 py-1 rounded  m-1">حذف</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default ContactDetailPage;