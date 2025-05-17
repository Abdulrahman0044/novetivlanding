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
      question: "Who is Novetiv for?",
      answer: "Novetiv is perfect for startups, marketing teams, entrepreneurs, and content creators looking to simplify their digital strategy and boost engagement."
    },
    {
      question: "What platforms does Novetiv support?",
      answer: "We support Instagram, Facebook, X (Twitter), LinkedIn, and more with ongoing expansion to new platforms."
    }
  ];

  return (
    <section className="py-16 section-darker">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Get quick answers to common questions about Novetiv
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
}
