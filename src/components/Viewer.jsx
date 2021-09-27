import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'regenerator-runtime/runtime';

function Viewer() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Document file="/pdf/sample.pdf">
        <Page pageNumber={page} />
      </Document>
    </div>
  );
}

export default Viewer;
