import { solidPrinciplesContent } from "./system_design/solidPrinciplesContent";
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface Category {
  name: string;
  slug: string;
  posts: Post[];
}

export interface BlogData {
  [categorySlug: string]: Category;
}

export const blogData: BlogData = {
  "system-design": {
    name: "System Design",
    slug: "system-design",
    posts: [
      {
        slug: "solid-principles",
        title: "SOLID Principles",
        excerpt:
          "A deep dive into the five fundamental principles of object-oriented design.",
        content: solidPrinciplesContent,
      },
      {
        slug: "cap-theorem",
        title: "CAP Theorem",
        excerpt:
          "Understanding the trade-offs between Consistency, Availability, and Partition Tolerance.",
        content:
          "The CAP theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency, Availability, and Partition Tolerance...",
      },
      {
        slug: "acid-properties",
        title: "ACID Properties",
        excerpt:
          "Exploring the core principles of database transaction reliability.",
        content:
          "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps...",
      },
    ],
  },
  dsa: {
    name: "Data Structures & Algorithms",
    slug: "dsa",
    posts: [
      {
        slug: "big-o-notation",
        title: "Big O Notation",
        excerpt: "Understanding the basics of algorithmic complexity.",
        content:
          "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity...",
      },
    ],
  },
  python: {
    name: "Python",
    slug: "python",
    posts: [],
  },
  rust: {
    name: "Rust",
    slug: "rust",
    posts: [],
  },
  mojo: {
    name: "Mojo",
    slug: "mojo",
    posts: [],
  },
  "operating-system": {
    name: "Operating System",
    slug: "operating-system",
    posts: [],
  },
  "ai-and-ai-agents": {
    name: "AI and AI Agents",
    slug: "ai-and-ai-agents",
    posts: [],
  },
  "machine-learning": {
    name: "Machine Learning",
    slug: "machine-learning",
    posts: [],
  },
  database: {
    name: "Database",
    slug: "database",
    posts: [
      {
        slug: "sql",
        title: "SQL",
        excerpt:
          "A deep dive into the most popular query language for relational databases.",
        content:
          "SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)...",
      },
      {
        slug: "nosql",
        title: "NoSQL",
        excerpt: "Exploring the world of non-relational databases.",
        content:
          'A NoSQL (originally referring to "non-SQL" or "non-relational") database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases...',
      },
      {
        slug: "vector-databases",
        title: "Vector Databases",
        excerpt: "Understanding the databases that power AI applications.",
        content:
          "Vector databases are a type of database that stores data as high-dimensional vectors, which are mathematical representations of features or attributes. These databases are optimized for similarity search, which is the process of finding the most similar items to a given query item...",
      },
    ],
  },
};
