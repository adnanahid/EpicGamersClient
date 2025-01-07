import React from "react";

const Accordion = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-1">
      <h1 className="text-4xl text-center font-bold mb-12">
        Frequently Asked Questions
      </h1>

      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I contact support?
          </div>
          <div className="collapse-content">
            <p>
              You can contact our support team here. We also recommend browsing
              our support center articles, which may help answer questions or
              resolve issues.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I try a game before I buy it?
          </div>
          <div className="collapse-content">
            <p>
              Some publishers occasionally offer demos or free trial periods for
              certain non-free games from time to time (for example, a Free
              Weekend trial). During a free trial period, you can download and
              play a trial version of the game before you decide to purchase,
              but you can no longer access the game when the trial period ends.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            When are products eligible for a refund?
          </div>
          <div className="collapse-content">
            <p>
              Games and products are eligible for refund within 14 days of
              purchase if they are marked as “refundable” or “self-refundable”.
              However, you must have less than 2 hours of runtime on record.
              Products that include virtual currency or other consumables and
              products or games that are marked as “non-refundable” are not
              eligible for refund. You will not be eligible for refunds for
              games or products from which you have been banned or for which you
              have otherwise violated the Terms of Service. In addition, you may
              not be eligible for refunds if Epic determines that you are
              abusing the refund policy. Learn more about our refund policy
              here.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Where is the Epic Games store available?
          </div>
          <div className="collapse-content">
            <p>
              The Epic Games Store is available to players in most countries in
              the world except where prohibited by US law, such as North Korea
              and Iran, with the exception of iPhone and iPad, which are
              currently only available in the European Union. Certain regions
              may have additional legal requirements that developers may need to
              implement in their games in order to be compliant and distributed
              there
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How can I manage my child’s access to content across platforms??
          </div>
          <div className="collapse-content">
            <p>
              First and foremost we recommend enabling parental controls at the
              device level as well as Epic’s account-level controls. For details
              on how to navigate Epic's parental controls, please head here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
