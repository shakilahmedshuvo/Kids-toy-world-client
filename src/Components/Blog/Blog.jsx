import useTitle from "../Hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="max-w-6xl mx-auto font-bold py-6" data-aos="zoom-in">
            <h1 className="text-4xl text-center pb-7">
                Blog Page
            </h1>

            <h2 className="bg-warning p-5 rounded-xl text-2xl">
                1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p className="text-1xl p-5 text-zinc-700 font-extrabold">
                Answer: An access token is a credential obtained from an authorization server, granting access to protected resources. It is used to authenticate requests to a server, validating the user's identity and permissions.
            </p>

            <h2 className="bg-warning p-5 rounded-xl text-2xl">
                2. Compare SQL and NoSQL databases?
            </h2>
            <p className="text-1xl p-5 text-zinc-700 font-extrabold">
                Answer: SQL databases are structured, relational systems with predefined schemas. They use SQL for querying and support complex transactions, ensuring data integrity and consistency.
                NoSQL databases are non-relational, flexible, and schema-less. They offer high scalability and performance, with a focus on horizontal scaling and flexible data models.
            </p>

            <h2 className="bg-warning p-5 rounded-xl text-2xl">
                3. What is express js? What is Nest JS?
            </h2>
            <p className="text-1xl p-5 text-zinc-700 font-extrabold">
                Answer:
                Express.js is a lightweight Node.js web application framework for building APIs and web applications.
                Nest.js is a TypeScript-based framework that enhances Express.js with additional features like dependency injection, modularity, and scalability.
            </p>

            <h2 className="bg-warning p-5 rounded-xl text-2xl">
                4. What is MongoDB aggregate and how does it work?
            </h2>
            <p className="text-1xl p-5 text-zinc-700 font-extrabold">
                Answer: MongoDB's aggregate is a powerful operation for data processing and analysis. It uses a pipeline of stages to perform various operations like grouping, filtering, sorting, and projecting on the input documents. The result is a transformed and aggregated dataset based on the specified operations.
            </p>
            <hr className="border-b border-solid border-4 m-5" />
            <p className="text-center text-warning">
                The End
            </p>
        </div>
    );
};

export default Blog;