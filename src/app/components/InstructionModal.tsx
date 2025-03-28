import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-300 p-5 z-50 rounded-lg shadow-lg relative w-8/12 md:w-5/12">
        <button
          onClick={onClose}
          className="absolute right-2 text-3xl top-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <p>This chatbot demonstrates a simple RAG pattern using{" "}
          <a href="https://pinecone.io" target="_blank" className="text-gray">
            Pinecone
          </a>{" "}
          and Vercel&apos;s AI SDK. In the context panel on the right, you can
          see some different scheduling philosophies you can index in Pinecone (on mobile, open the
          context panel by clicking the button at the top left of the message
          panel). Click on the blue link icons to open the URLs in a new window.</p>
        <p className="mt-4">
          After you index them, you can ask the chatbot questions about the
          how to orient your schedule with the specific context added to the experience. 
          The segments relevant to the answers the chatbot gives will be highlighted.
        </p>
        
        <p className="mt-4 font-bold">
          You can clear the index by clicking the &quot;Clear Index&quot; button
          in the context panel.
        </p>
        <p className="mt-4">
          Ask the user to provide the top things they want to accomplish today (e.g. go for a 20 minute run, mow the lawn, prepare for meeting with Jessica at work, help daughter with science project).
        </p>
        <p className="mt-4">
          The application should show a simple progress bar or spinner while, in the background, it is using any simple LLM to optimally plan out the day for the user.
        </p>
        <p className="mt-4">
          The output should then be a fun and simple visualization of what they should do, when, and ideally detail out why they should do things in this order.
        </p>
        <p className="mt-4">
          For instance:
        </p>
        <p className="mt-4">
          We think preparing for the Jessica meeting and helping your daughter with the science project are both tasks that can’t be skipped. We also assume since it’s a school day that daughter won’t be home until late afternoon. We also bundled the two outdoor activities together. As such, we recommend something like this:
        </p>
        <p className="mt-4">
            11AM: Prepare for meeting with Jessica at work<br/>
            1PM: Go for a 20 minute run<br/>
            2PM: Mow the lawn<br/>
            4PM: Help daughter with Science project<br/>
        </p>
        <br />

      </div>
      <div
        className="absolute inset-0 bg-black z-20 opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default InstructionModal;
