import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#373737] text-[#aaa] text-[16px] md:text-[18px] lg:text-[20px] py-[21px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] flex flex-col xl:flex-row items-center justify-between gap-0 xl:gap-2 text-center xl:text-left">
        <span className="max-sm:leading-[normal] max-sm:pb-3 leading-normal">
          Creative Skills Digital Ltd | Registered in England, Company No.
          10556234
        </span>

        <span className="max-sm:leading-[normal] leading-normal">
          Drop Us a Line at{" "}
          <Link
            href="mailto:hello@creativeskills.com?subject=Website Inquiry"
            className="text-[#f04c3e] hover:opacity-80 transition-opacity break-all"
          >
            hello@creativeskills.com
          </Link>
        </span>
      </div>
    </footer>
  );
}
