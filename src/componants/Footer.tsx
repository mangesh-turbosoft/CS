export default function Footer() {
  return (
    <footer className="w-full bg-[#373737] text-[#aaa] text-[16px] py-[21px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2 text-center md:text-left">
        <span className="leading-relaxed">
          Creative Skills Digital Ltd | Registered in England, Company No.
          10556234
        </span>

        <span className="leading-relaxed">
          Drop Us a Line at{" "}
          <a
            href="mailto:hello@creativeskills.com?subject=Website Inquiry"
            className="text-[#f04c3e] hover:opacity-80 transition-opacity break-all"
          >
            hello@creativeskills.com
          </a>
        </span>
      </div>
    </footer>
  );
}
