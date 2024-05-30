import React, { useState } from "react";

const create = () => {
  const [data, setData] = useState({
    title:"",
    description:'',
    image:""
  })
  return (
    <form className=" rounded-xl p-5 w-full my-4">
      <div className="rounded-xl bg-gray-800 flex lg:gap-11 gap-0 justify-around sm:p-8 my-5">
        <div className="p-4 my-1 flex flex-col w-full md:w-auto items-stretch">
          <h2 className="text-2xl text-center"> Add a post</h2>
          <div className="my-3">
            <label htmlFor="title" className="text-xl">
              Title
            </label>
            <br />
            <input
              type="text"
              value={data.title}
              id="title"
              className="bg-gray-100 w-full outline-0 rounded-sm p-2 text-xl"
            />
          </div>

          <div className="my-3">
            <label htmlFor="description" className="text-xl">
              Description
            </label>
            <br />
            <textarea
              type="text"
              id="description"
              value={data.description}
              className="bg-gray-100 w-full outline-0 rounded-sm p-2 resize-none text-xl"
            ></textarea>
          </div>
          <div className="my-3 md:hidden">
            <label htmlFor="upload" className="text-xl ">
              upload / images
            </label>
            <input type="file" name="file" id="upload" />
          </div>

          <div className="my-3 text-left">
            <label htmlFor="hash" className="text-xl">
              HashTags
            </label>
            <br />
            <input
              type="text"
              id="hash"
              value={data.image}
              className="bg-gray-100 w-full outline-0 rounded-sm p-2 text-xl"
            />
          </div>
          <div className="p-5 flex justify-between">
            <input
              type="submit"
              value="create"
              id="title"
              className="bg-neutral-200 text-gray-700 hover:bg-green-400 outline-0 rounded-sm p-2 text-xl"
            />
            <input
              type="submit"
              value="discard"
              id="title"
              className="bg-neutral-700 hover:text-white hover:bg-rose-600 text-white rounded-sm p-2 text-xl"
            />
          </div>
        </div>

        <div className=" bg-gray-400  rounded-xl md:block max-w-[400px] grow aspect-[1/.4]"></div>
      </div>
    </form>
  );
};

export default create;
