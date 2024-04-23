import React from 'react';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';

type ExcelExportProps = {
  data: any[];
  fileName: string;
};

const ExcelExportBtn = ({ data, fileName }: ExcelExportProps) => {
  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
      onClick={exportToExcel}
    >
      Exportar a Excel
    </button>
  );
};

export default ExcelExportBtn;
