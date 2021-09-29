import React from 'react';

export const Category = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section className="w-2/6 category">
      <ul className="py-9 px-6 rounded-3xl" style={{ background: '#10355A' }}>
        <li className="all active flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="all"
            className="text-lg tracking-wide text-white"
            onClick={statusHandler}
          >
            All
          </button>
        </li>
        <li className="important active flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="important"
            className="text-lg tracking-wide text-white"
            onClick={statusHandler}
          >
            Puenting
          </button>
        </li>
        <li className="personal flex items-center gap-3 py-3 px-5 rounded-lg mb-2 transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="personal"
            className="text-lg tracking-wide text-white"
            onClick={statusHandler}
          >
            Personal
          </button>
        </li>
        <li className="work flex items-center gap-3 py-3 px-5 rounded-lg transition-all">
          <div className="h-4 w-4 rounded box"></div>
          <button
            value="work"
            className="text-lg tracking-wide text-white"
            onClick={statusHandler}
          >
            Work
          </button>
        </li>
      </ul>
    </section>
  );
};
