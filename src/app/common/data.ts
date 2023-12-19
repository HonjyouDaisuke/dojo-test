import { ProblemData } from "./types";
/***
title: string;
    questioner: string;
    difficulty: string;
    startDate: string;
    submitDate: string;
    timeComplexity: string;
    spaceComplexity: string;
    CodeData: string;
    ***/
export default function QuestionDatas(): ProblemData[] {
    const codes: ProblemData[] = [
        { id: 1, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'easy', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 3, submitDate: '2023/11/18' },
        { id: 2, title: '２点間の距離', reviewer: ['勝又さん', 'TAM'], difficulty: 'easy', startDate: '2023/11/11', question: 'PointA(x1,y1)とPointB(x2, y2)が与えられます。\nこの時PointAとPointBの距離を求めてください。\n2点間の距離はユークリッド距離を採用してください。\n\n\n条件\-10^5<x1,x2,y1,y2<10^5', status: 3, submitDate: '2023/11/18' },
        { id: 3, title: '重複する文字列', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '小文字のアルファベットが１個ずつ入った配列nが与えられた時、重複している文字をすべて返してください。\n順序は問いません。\n\n\n条件\n0<n.lenght<10^5', status: 2, submitDate: '2023/11/18' },
        { id: 4, title: '部分文字列の繰り返し', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '文字列sが与えられた時、この文字列の部分文字列の繰り返しになっている部分を返してください。\n順序は問いません。\n\n\n条件\n0<n.lenght<10^5', status: 2, submitDate: '2023/11/18' },
        { id: 5, title: 'フィルター', reviewer: ['勝又さん', 'TAM'], difficulty: 'hard', startDate: '2023/11/11', question: 'コーヒーフィルターを１０個買ってきてください。\nただしコーヒーフィルタのサイズは4～6杯分のものを使用してください\n\n\n条件\n0<お金<1,000円', status: 1, submitDate: '2023/11/18' },
        { id: 6, title: 'ヒープを使った問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 1, submitDate: '2023/11/18' },
        { id: 7, title: 'Fizz Buzz', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 8, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 9, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 10, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 11, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 12, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 13, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 14, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 15, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
        { id: 16, title: 'ソート問題', reviewer: ['勝又さん', 'TAM'], difficulty: 'middle', startDate: '2023/11/11', question: '配列nが与えられた時、この配列を昇順でソートしてください。\nただし、ビルトイン関数やライブラリは使わないでください。\n\n\n条件\n0<n.lenght<10^5', status: 0, submitDate: '' },
    ];
    return codes;
}