import React from "react";

const Blogs = () => {
  return (
    <div className="lg:flex justify-center mt-10">
      <a
        href="#"
        className=" m-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Difference between Javascript and Nodejs
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Javascript mainly a programming language thats can run any browser on
          the other hand Nodejs is running environment for javascript.
          Javascript running in many of engines like V8(Chrome), Spider
          Monkey(FireFox) etc but Nodejs only support V8 engine. Nodejs is
          written in c++ and Javascript is written in Java Programming Language.
        </p>
      </a>
      <a
        href="#"
        className="m-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          When should you use nodejs and when should you use mongodb?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Nodejs and MongoDB are used for different purpose. Nodejs is a
          javascript engine that runs javascript code. We used it for build
          servers that can response to web requests and MongoDB mainly a
          Database. When we need to store some data we can use MongoDb.Servers
          are used mongodb to save,query or update data.
        </p>
      </a>
      <a
        href="#"
        className="m-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Differences between SQL and NOSQl databases
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          SQL database are mainly relational and it's use structured query
          language.SQL databases are vertically scalable on the hand NOSQl
          database are non-relational.it's follow dynamic schemas for
          unstructured data. NoSQL databases are horizontally scalable.
        </p>
      </a>
    </div>
  );
};

export default Blogs;
