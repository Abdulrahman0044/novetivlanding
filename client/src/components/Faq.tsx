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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get quick answers to common questions about Novetiv
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-dark-card">
                <AccordionTrigger className="px-4 py-4 font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="bg-dark-surface px-4 py-4 text-gray-300">
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
