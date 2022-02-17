import React from "react";
import { numberWithCommas } from "../utils/utils";

function Menus(props) {
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card shadow">
          <img
            src={
              "/images/" +
              props.item.category.nama.toLowerCase() +
              "/" +
              props.item.gambar
            }
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.item.nama} <b>({props.item.kode})</b>
            </h5>
            <p className="card-text">
              Rp. {numberWithCommas(props.item.harga)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menus;
