import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Viewer() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Document file="/pdf/sample.pdf">
        <Page pageNumber={page} />
      </Document>
      <button onClick={() => setPage(p => p + 1)}>+1</button>
      <button onClick={() => setPage(p => p - 1)}>-1</button>
    </div>
  );
}

export default Viewer;
