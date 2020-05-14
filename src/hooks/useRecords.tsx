import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string; // ISO 8601
}

type NewRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('vhbu__records') || '[]'));
  }, []);
  const addRecord = (newRecord: NewRecordItem) => {
    const record = {...newRecord, createdAt: (new Date().toISOString())};
    setRecords([...records, record]);
  };
  useUpdate(() => {
    window.localStorage.setItem('vhbu__records', JSON.stringify(records));
  }, [records]);

  return {records, setRecords, addRecord};
};
