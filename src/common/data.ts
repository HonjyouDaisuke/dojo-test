import { AlgorithmData } from "./types";
import { AlgorithmStatusID } from "./types";

export const statusStr: string[] = [
    "未提出", "提出済み", "レビュー中", "完了"
];

export function AlgorithmDatas(): AlgorithmData[] {
    const codes: AlgorithmData[] = [
        { id: 1, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'easy', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.completed, submitDate: '2023/11/18' },
        { id: 2, title: '２点間の距離', reviewer: ['勝又さん', 'Tayzar'], difficulty: 'easy', startDate: '2023/11/11', question: 'PointA(x1,y1)とPointB(x2, y2)が与えられます。\nこの時PointAとPointBの距離を求めてください。\n2点間の距離はユークリッド距離を採用してください。\n\n\n条件\-10^5<x1,x2,y1,y2<10^5', status: AlgorithmStatusID.completed, submitDate: '2023/11/18' },
        { id: 3, title: '重複する文字列', reviewer: ['honjyou', 'Tayzar', 'makoto yasuda'], difficulty: 'middle', startDate: '2023/11/11', question: '小文字のアルファベットが１個ずつ入った配列nが与えられた時、重複している文字をすべて返してください。\n順序は問いません。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.reviewing, submitDate: '2023/11/18' },
        { id: 4, title: '部分文字列の繰り返し', reviewer: ['sumire', 'honjyou'], difficulty: 'middle', startDate: '2023/11/11', question: '文字列sが与えられた時、この文字列の部分文字列の繰り返しになっている部分を返してください。\n順序は問いません。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.reviewing, submitDate: '2023/11/18' },
        { id: 5, title: 'フィルター', reviewer: [], difficulty: 'hard', startDate: '2023/11/11', question: 'コーヒーフィルターを１０個買ってきてください。\nただしコーヒーフィルタのサイズは4～6杯分のものを使用してください\n\n\n条件\n0<お金<1,000円', status: AlgorithmStatusID.submitted, submitDate: '2023/11/18' },
        { id: 6, title: 'ヒープを使った問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.submitted, submitDate: '2023/11/18' },
        { id: 7, title: 'Fizz Buzz', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 8, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 9, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 10, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 11, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 12, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 13, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 14, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 15, title: '\ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
        { id: 16, title: 'ソート問題', reviewer: [], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: AlgorithmStatusID.notSubmit, submitDate: '' },
    ];
    return codes;

}