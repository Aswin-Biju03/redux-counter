import React from "react";

function Counter() {
  return (
    <>
      <div style={{height:"100vh"}} className="bg-black d-flex align-items-center justify-content-center text-white">
        <div style={{width:"700px"}} className="border p-5 d-flex align-items-center justify-content-center flex-column rounded">
            <h1 style={{fontSize:"200px"}} className="">0</h1>
            <div className="d-flex gap-4">
                <button className="btn btn-warning"> Decrement</button>
                <button className="btn  btn-danger"> Reset</button>
                <button className="btn  btn-success"> Increment</button>
            </div>
            <form className="d-flex mt-4 ">
                <input placeholder="Enter Amount to be incremented!!" type="text" className="form-control" />
                <button className="btn btn-primary ms-3">Increment</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Counter;
