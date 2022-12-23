import React from "react";
import ChailTable from "./chailTable";
import { data } from "./mockData";
import "./Style.css";

const TableDasboard = () => {
  return (
    <div
      className="shadow p-3 mb-5 bg-body rounded-5 p-2 "
      style={{ width: "1050px" }}
    >
      <h1 className="text-start fs-4 fw-bold my-3">Latest Patient</h1>
      <table className="table text-start mantab">
        <thead className="bgtable fs-5 text-start">
          <th scope="col-2" className="py-2">
            No
          </th>
          <th scope="col-2" className="py-2 ">
            Name
          </th>
          <th scope="col-2" className="py-2">
            Age
          </th>
          <th scope="col-2" className="py-2">
            Gender
          </th>
          <th scope="col-2" className="py-2">
            Status
          </th>
          <th scope="col-2" className="py-2 text-end">
            Action
          </th>
        </thead>
        {data?.map((item, i) => {
          return (
            <tbody className="table-striped">
              <ChailTable data={item} />
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TableDasboard;
