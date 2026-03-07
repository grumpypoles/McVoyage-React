import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// export default function MarkdownRenderer({ content }) {
//   return (
//     <div className="prose prose-invert max-w-none">
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           a: ({ node, ...props }) => (
//             <a
//               {...props}
//               className="text-blue-400 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//           ),
//           img: ({ node, ...props }) => (
//             <img {...props} className="my-4 rounded-lg shadow-md" />
//           ),
//           h1: ({ node, ...props }) => (
//             <h1 {...props} className="mt-6 mb-4 text-3xl font-bold" />
//           ),
//           h2: ({ node, ...props }) => (
//             <h2 {...props} className="mt-6 mb-3 text-2xl font-semibold" />
//           ),
//           h3: ({ node, ...props }) => (
//             <h3 {...props} className="mt-4 mb-2 text-xl font-semibold" />
//           ),
//           ul: ({ node, ...props }) => (
//             <ul {...props} className="my-4 ml-6 list-disc" />
//           ),
//           ol: ({ node, ...props }) => (
//             <ol {...props} className="my-4 ml-6 list-decimal" />
//           ),
//           table: ({ node, ...props }) => (
//             <table {...props} className="my-4 border-collapse table-auto" />
//           ),
//           th: ({ node, ...props }) => (
//             <th {...props} className="px-3 py-2 bg-gray-700 border" />
//           ),
//           td: ({ node, ...props }) => (
//             <td {...props} className="px-3 py-2 border" />
//           ),
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   );
// }
export default function MarkdownRenderer({ content, className = "" }) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

