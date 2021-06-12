import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className='cover-container d-flex w-100 h-100 p-5 mx-auto flex-column bg-dark text-light text-center'>
      <main className='px-5'>
        <h1 style={{ fontSize: "10em" }}>⚠︁</h1>
        <h1>You are lost</h1>
        <p className='lead'>
          This page does not exist, maybe it has expired or was
          deleted for some reason.. or maybe you were messing around
          with fake urls.. <br />
          Anyways, you won't find anything useful here so let me help
          you start over.
        </p>
        <p className='lead'>
          <Link className='btn btn-light' to='/'>
            Go back Home
          </Link>
        </p>
      </main>
    </div>
  );
}
