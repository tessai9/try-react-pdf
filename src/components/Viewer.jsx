import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

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
