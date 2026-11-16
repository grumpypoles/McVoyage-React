import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ content, className = "" }) {
  // If "\n" was stored as two literal characters (backslash + n), e.g. when
  // typed into Compass/Atlas, convert it to a real newline first.
  const text = (content ?? "").replace(/\\n/g, "\n");

  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        // remarkBreaks turns single newlines into <br>, blank lines still make paragraphs
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
