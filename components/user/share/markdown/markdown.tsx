import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.css";
import MarkdownImpl from "./types";

const Markdown = ({ markdown }: MarkdownImpl) => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </>
  );
};

export default Markdown;
