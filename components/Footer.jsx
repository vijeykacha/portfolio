import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Vijay Kacha
          <Link href="/" className="hover:underline" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link
            href="https://github.com/vijeykacha"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </Link>

          <Link
            href="https://twitter.com/VijeyKacha"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/vijaykachaa/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
