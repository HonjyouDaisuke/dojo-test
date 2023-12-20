import { JSXElementConstructor } from "react";

export interface AlgorithmData {
    id: number;
    title: string;
    reviewer: string[];
    difficulty: string;
    startDate: string;
    question: string;
    status: number;
    submitDate: string;
    //timeComplexity: string;
    //spaceComplexity: string;
    //CodeData: string;
};

export enum AlgorithmStatusID {
    notSubmit = 0,
    submitted,
    reviewing,
    completed,
};
