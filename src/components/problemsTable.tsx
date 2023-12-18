import react from 'react';
import StatusIcon from './statusIcon';

export default function ProblemTable() {
    return (
        <div className="flex flex-col h-full">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Title</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4">Reviewer</th>
                                    <th scope="col" className="px-6 py-4">StartDate</th>
                                    <th scope="col" className="px-6 py-4">SubmitDate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td className="whitespace-nowrap px-6 py-4"><StatusIcon statusID={0} statusString='未提出' /></td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};