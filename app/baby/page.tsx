"use client";
import React from "react";

function Baby() {
  async function handleDownloadCsv() {
    try {
      const res = await fetch(
        `/api/download-baby-csv?${new URLSearchParams({
          user: "admin",
          // user: "admin",
          // id: "0000",
          id: "0001",
        }).toString()}`,
      );
      // const blob = await res.blob();
      // const url = URL.createObjectURL(blob);
      //
      // const a = document.createElement("a");
      // a.href = url;
      // const date = "2025/04/26";
      // a.download = `${date}.csv`;
      // document.body.appendChild(a);
      // a.click();
      // a.remove();
      // URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="my-6 md:text-4xl font-bold underline">Baby Profile</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleDownloadCsv}
        >
          Download CSV
        </button>
      </div>
    </>
  );
}

export default Baby;
