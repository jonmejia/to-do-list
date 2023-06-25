'use client'
import React from 'react';
const Form = () => {


  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form>
        <div className="mb-4">
          <label htmlFor="inputText" className="block text-gray-700 text-sm font-bold mb-2">
            Text
          </label>
          <input
            type="text"
            id="inputText"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
