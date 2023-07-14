import type { FC } from "react";
import FaqCard from "./FaqCard";

type IProps = {
  setCurrentPage: (page: string) => void;
};

const Faq: FC<IProps> = ({ setCurrentPage }) => {
  return (
    <div
      onMouseEnter={() => setCurrentPage("faq")}
      id="faq"
      className="pt-[15vh] pb-[10vh] flex justify-center w-full">
      <div className="w-[50vw] xl:w-[85vw] text-center">
        <h3 className="text-5xl font-bold">Frequently Asked Questions</h3>
        <p className="mt-5 text-xl text-gray-500">
          Find quick answers to common inquiries about our web design services.
        </p>
        <div className="mt-20">
          <FaqCard
            question="What does each plan include?"
            answer="Each plan includes the creation of a website with a specific number of pages and sections. All plans include the provision of source codes and two rounds of revisions. Delivery times vary based on the chosen plan and special requests."
          />
          <FaqCard
            question="Can the delivery time be changed?"
            answer="Yes, the standard delivery time may vary according to the client's specific design preferences and special requests."
          />
          <FaqCard
            question="What does a revision entail?"
            answer="A revision includes changes to the website's design, content, layout, or other aspects as requested by the client. Each plan includes two rounds of revisions."
          />
          <FaqCard
            question="Do I own the source codes?"
            answer="Yes, all source codes created as part of the web design project are provided to the client upon completion."
          />
          <FaqCard
            question="Can I add more sections to a page?"
            answer="The plans offer up to five sections per page as standard. If more sections are needed, please discuss this before the start of the project as it may affect pricing and delivery times."
          />
          <FaqCard
            question="Can I upgrade my plan after work has begun?"
            answer="Yes, you can upgrade your plan at any point during the project. However, this will affect the final price and possibly extend the delivery time."
          />
          <FaqCard
            question="What if I'm not satisfied with the design?"
            answer="We aim for 100% client satisfaction. If you're not satisfied with the design, you can utilize your two rounds of revisions to request changes. Further revisions may be available at an additional cost."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
