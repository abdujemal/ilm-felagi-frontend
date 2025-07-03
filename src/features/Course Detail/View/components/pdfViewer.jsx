import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

// Set the PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewerRemote({remoteUrl}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

//   const remoteUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  return (
    <div className="p-4 flex flex-col items-center">
      <Document
        file={remoteUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p>Loading PDF...</p>}
        error={<p>Failed to load PDF</p>}
      >
        <Page pageNumber={pageNumber} width={600} />
      </Document>

      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Prev
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
