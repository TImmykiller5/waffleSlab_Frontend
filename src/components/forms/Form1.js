import React from "react";

function Form1() {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-8">
          <label>
            <div className="flex flex-col gap-2 ">
              <span className=" font-semibold">Project Information</span>
              <input
                style={{ borderWidth: "1px" }}
                type="text"
                placeholder="Project Name"
                className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500  rounded-md px-2 py-1"
              ></input>
            </div>
          </label>
          <div className="flex gap-6">
            <label className="flex flex-col gap-2 ">
              <span className=" font-semibold">Enter Panel Length</span>
              <span className=" text-gray-500">Longer Span</span>
              <input
                style={{ borderWidth: "1px" }}
                type="number"
                placeholder="Panel Length"
                className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
              ></input>
            </label>

            <label className="flex flex-col gap-2 ">
              <span className=" font-semibold">Enter Panel Width</span>
              <span className=" text-gray-500">Shorter Span</span>
              <input
                style={{ borderWidth: "1px" }}
                type="number"
                placeholder="Panel Width"
                className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
              ></input>
            </label>

            <label className="flex flex-col gap-2 ">
              <span className=" font-semibold">Enter Panel Depth</span>
              <span className=" text-gray-500">some description</span>
              <input
                style={{ borderWidth: "1px" }}
                type="number"
                placeholder="Panel Depth"
                className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
              ></input>
            </label>
          </div>

          <label>
            <div className="flex  gap-2 ">
              <div className="flex flex-col">
                <span className="mb-1">Slab Thickness (mm)</span>
                <input
                  style={{ borderWidth: "1px" }}
                  type="number"
                  placeholder="7.2m"
                  className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="mb-1">Mould Length (mm)</span>
                <input
                  style={{ borderWidth: "1px" }}
                  type="number"
                  placeholder="Input Mould Length"
                  className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="mb-1">Mould Width (mm)</span>
                <input
                  style={{ borderWidth: "1px" }}
                  type="number"
                  placeholder="Mould Width"
                  className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
                ></input>
              </div>
            </div>
          </label>
          <label>
            <div className="flex   gap-2">
              <div className="flex w-1/2 flex-col">
                <span className="mb-1">Length (mm)</span>
                <input
                  style={{ borderWidth: "1px" }}
                  type="text"
                  placeholder="Project Name"
                  className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
                ></input>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="mb-1">Length (mm)</span>
                <input
                  style={{ borderWidth: "1px" }}
                  type="text"
                  placeholder="Project Name"
                  className=" h-14 max-w-md border-2 border-black-600 focus:outline-double focus:border-indigo-500 rounded-md px-2 py-1"
                ></input>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form1;
