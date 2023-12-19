import react from 'react';
import StatusIcon from './statusIcon';
import QuestionDatas from '@/app/common/data';
import ReviewerIcon from './reviewerIcon';

export default function ProblemTable() {
    const codeDatas = QuestionDatas();
    return (
        <div className="flex flex-col h-full ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light bg-white rounded">
                            <thead className="border-b font-medium bg-secondary-light dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-2">#</th>
                                    <th scope="col" className="px-6 py-2">Title</th>
                                    <th scope="col" className="px-6 py-2">Status</th>
                                    <th scope="col" className="px-6 py-2">Reviewer</th>
                                    <th scope="col" className="px-6 py-2">StartDate</th>
                                    <th scope="col" className="px-6 py-2">SubmitDate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {codeDatas.map((data) => (
                                    <tr
                                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td className="whitespace-nowrap px-6 py-2 font-medium">{data.id}</td>
                                        <td className="whitespace-nowrap px-6 py-2">{data.title}</td>
                                        <td className="whitespace-nowrap px-6 py-2"><StatusIcon statusID={data.status} /></td>
                                        <td className="whitespace-nowrap px-6 py-2"><ReviewerIcon reviewerName={data.reviewer} /></td>
                                        <td className="whitespace-nowrap px-6 py-2">{data.startDate}</td>
                                        <td className="whitespace-nowrap px-6 py-2">{data.submitDate}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};