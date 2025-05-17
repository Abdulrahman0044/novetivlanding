import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqItems = [
    {
      question: "What is Novetiv?",
      answer: "Novetiv is an AI-powered platform for social media management, combining content creation, sentiment analysis, and customer feedback response in one seamless tool."
    },
    {
      question: "Can I manage multiple accounts?",
      answer: "Yes, Novetiv allows you to manage multiple social media accounts across different platforms from a single dashboard."
    },
    {
      question: "What platforms does Novetiv support?",
      answer: "We support Instagram, Facebook, X (Twitter), LinkedIn, and more with ongoing expansion to new platforms."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can experience all the features of Novetiv with a free trial for 7 days. Enjoy full access without the need for a credit card. Discover how Novetiv can revolutionize your social media management risk-free."
    }
  ];

  return (
    <section className="py-16 section-darker">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-3 text-white">Frequently Asked<br />Questions</h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Don't just take our word hear what people are saying
            </p>
          </div>
          
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-[#1e3055] rounded-lg overflow-hidden bg-[#0c1a30]">
                  <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#071020] px-4 py-3 text-gray-400 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
