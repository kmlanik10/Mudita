import Image from "next/image";
import MuditaLogo from "../../../public/MUDITA-Logo-White.png";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <Image
        src={MuditaLogo}
        alt="pinecone-logo"
        width="230"
        height="50"
        className="ml-3"
      />{" "}
    </header>
  );
}
