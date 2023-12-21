import react from 'react';
import StatusIcon from './statusIcon';
import { AlgorithmDatas } from '@/common/data';
import ReviewerIcon from './reviewerIcon';

export default function ProblemTable() {
  const Datas = AlgorithmDatas();
  return (
    <div className='flex flex-col h-full '>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8 rounded'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light bg-white dark:bg-neutral-800 border '>
              <thead className='border-b font-medium bg-secondary-light dark:bg-secondary dark:border-neutral-500'>
                <tr>
                  <th scope='col' className='px-6 py-2'>#</th>
                  <th scope='col' className='px-6 py-2 text-center'>Title</th>
                  <th scope='col' className='px-6 py-2 text-center'>Status</th>
                  <th scope='col' className='px-6 py-2 text-center'>Level</th>
                  <th scope='col' className='px-6 py-2 text-center'>Reviewer</th>
                  <th scope='col' className='px-6 py-2 text-center'>StartDate</th>
                  <th scope='col' className='px-6 py-2 text-center'>SubmitDate</th>
                </tr>
              </thead>
              <tbody key='algorithmTbl'>
                {Datas.map((data) => (
                  <tr key={data.id}
                    className='border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600'>
                    <td className='whitespace-nowrap px-6 py-2 font-medium'>{data.id}</td>
                    <td className='whitespace-nowrap px-6 py-2'>{data.title}</td>
                    <td className='whitespace-nowrap px-6 py-2'><StatusIcon statusID={data.status} /></td>
                    <td className='whitespace-nowrap px-6 py-2'>{data.difficulty}</td>
                    <td className='whitespace-nowrap px-6 py-2'><ReviewerIcon reviewerName={data.reviewer} /></td>
                    <td className='whitespace-nowrap px-6 py-2'>{data.startDate}</td>
                    <td className='whitespace-nowrap px-6 py-2'>{data.submitDate}</td>
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