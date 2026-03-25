import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/slices/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    if (amount) {
      dispatch(incrementByAmount(+amount));
      inputRef.current.value = "";
    } else {
      alert("Enter valid Amount");
    }
  };
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="bg-black d-flex align-items-center justify-content-center text-white"
      >
        <div
          style={{ width: "700px" }}
          className="border p-5 d-flex align-items-center justify-content-center flex-column rounded"
        >
          <h1 style={{ fontSize: "200px" }} className="mb-5">
            {count}
          </h1>
          <div className="d-flex gap-4">
            <button
              onClick={() => {
                dispatch(decrement());
              }}
              className="btn btn-warning"
            >
              Decrement
            </button>
            <button
              onClick={() => {
                dispatch(reset());
              }}
              className="btn  btn-danger"
            >
              Reset
            </button>
            <button
              onClick={() => {
                dispatch(increment());
              }}
              className="btn  btn-success"
            >
              Increment
            </button>
          </div>
          <form className="d-flex mt-4 ">
            <input
              ref={inputRef}
              placeholder="Enter Amount to be incremented!!"
              type="text"
              className="form-control"
            />
            <button onClick={handleIncrement} className="btn btn-primary ms-3">
              Increment by count
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Counter;
