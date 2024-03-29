import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Table from './components/Table';
import SearchBox from './components/SearchBox';
import ViewModal from './components/ViewModal';
import CreateModal from './components/CreateModal';
import EditModal from './components/EditModal';

function App() {

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#createModal">Create User</button>
        </div>
        <div className="col-md-4">
          <SearchBox />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <Table />
        </div>
      </div>
      <ViewModal/>
      <EditModal/>
      <CreateModal/>
    </div>
  );
}

export default App;
