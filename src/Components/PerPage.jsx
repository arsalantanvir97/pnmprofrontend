import React from "react";

const PerPage = ({ perPage, setPerPage, setPage }) => {
  return (
    <div className="d-sm-flex align-items-center for-select">
      <label htmlFor className="mr-sm-1 dash-label mb-0">
        Showing
      </label>
      <select
        className="dash-select entri-drop"
        value={perPage}
        onChange={(e) => {
          setPerPage(e.target.value);
          setPage(1);
        }}
      >
        <option value>10</option>
        <option value>11</option>
        <option value>12</option>
        <option value>13</option>
        <option value>14</option>
        <option value>15</option>
      </select>
      <label htmlFor className="ml-sm-1 dash-label mb-0">
        Entries
      </label>
    </div>
  );
};

export default PerPage;
