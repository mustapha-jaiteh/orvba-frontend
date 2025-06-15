import React from "react";
import AdminPages from "../../components/admin/AdminPages";
import { useAdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";

const Payments = () => {
    const { services } = useAdminContext();

    // payment status
    const getPaymentStatus = () => {
        switch (services.paymentStatus) {
            case "completed":
                return "text-green-500 hover:text-green-600 ";
            case "in progress":
                return "text-blue-500 hover:text-blue-600 ";
            case "pending":
                return "text-yellow-500 hover:text-yellow-600 ";
            default:
                return "text-gray-500 hover:text-gray-600 ";
        }
    };

    return (
        <AdminPages title="Payments">
            <div className="payments  h-full bg-green-100 pb-8">
                <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-4">
                    <h1 className="text-center text-4xl my-2 py-4 font-bold">
                        Payments
                    </h1>
                    {/* <Link to="/mechanic_register">
                        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 font-bold m-3 w-40">
                            Add mechanic
                        </button>{" "}
                    </Link> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full w-full border-2 border-blue-500">
                        <thead className="bg-blue-500 text-gray-100">
                            <tr className="text-center">
                                <th className="p-2 border-x border-white">
                                    License plate
                                </th>
                                <th className="p-2 border-x border-white">
                                    Vehicle Owner
                                </th>
                                <th className="p-2 border-x border-white">
                                    request Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    Paid Date
                                </th>
                                <th className="p-2 border-x border-white">
                                    Mechanic name
                                </th>
                                <th className="p-2 border-x border-white">
                                    Mechanic contact
                                </th>
                                <th className="p-2 border-x border-white">
                                    Charges
                                </th>
                                <th className="p-2 border-x border-white">
                                    Status
                                </th>
                                <th className="p-2 border-x border-white">
                                    Reciept
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((payment) => (
                                <tr
                                    key={payment.id}
                                    className="border-b-2 border-gray-300 bg-gray-100 pl-2 text-center"
                                >
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.license_plate}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.vehicle_owner}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.request_date}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.paid_date}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.mechanic_name}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.mechanic_phone}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.charges}
                                    </td>
                                    {/* <td
                                        className={`p-2 border-x border-gray-300 font-bold ${getPaymentStatus(
                                            payment.paymentStatus
                                        )}`}
                                    > */}
                                    <td className="p-2 border-x border-gray-300 font-bold">
                                        {payment.payment_status}
                                    </td>
                                    <td className="p-2 border-x border-gray-300">
                                        {payment.payment_receipt}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminPages>
    );
};

export default Payments;
